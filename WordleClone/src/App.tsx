import { useEffect, useState, useCallback } from "react";
import styles from "./grid.module.css";
import { Row } from "./Row";
import { Consigne } from "./Consigne";
import { Clavier } from "./Clavier";
import { Victoire } from "./Victoire";
  
const TAILLE_MAX = 5;
const NOMBRE_ESSAIS = 6;

const decouperMot = (mot: string) =>
	Array.from({ length: TAILLE_MAX }, (_, index) => mot[index] || "");

interface WordData {
	word: string;
	language: string;
	date: string;
}

function App() {
	const [data, setData] = useState<WordData | null>(null);
	const [motEnCours, setMotEnCours] = useState<string>("");
	const [motsValides, setMotsValides] = useState<string[]>([]);
	const [lettresAbsentes, setLettresAbsentes] = useState<Set<string>>(
		new Set(),
	);
	const [showRules, setShowRules] = useState(true);
	const [showVictory, setShowVictory] = useState(false);

	const ajouterLettre = useCallback((lettre: string) => {
		if (
			motEnCours.length < TAILLE_MAX &&
			!lettresAbsentes.has(lettre.toLowerCase())
		) {
			setMotEnCours((prev) =>
				(prev + lettre.toLowerCase()).slice(0, TAILLE_MAX)
			);
		}
	}, [lettresAbsentes, motEnCours.length]);

	const supprimerLettre = useCallback(() => {
		setMotEnCours((prev) => prev.slice(0, -1));
	}, []);

	const validerMot = useCallback(() => {
		if (
			motEnCours.length !== TAILLE_MAX ||
			motsValides.length >= NOMBRE_ESSAIS
		) {
			return;
		}

		setMotsValides((prev) => [...prev, motEnCours]);
		if (data?.word) {
			const lettresAbsentesDeLEssai = new Set(
				[...motEnCours.toLowerCase()].filter(
					(lettre) => !data.word.toLowerCase().includes(lettre),
				),
			);
			setLettresAbsentes((prev) =>
				new Set([...prev, ...lettresAbsentesDeLEssai]),
			);
		}
		if (data?.word && motEnCours.toLowerCase() === data.word.toLowerCase()) {
			setShowVictory(true);
		}
		setMotEnCours("");
	}, [data?.word, motEnCours, motsValides.length]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (
				event.target instanceof HTMLInputElement ||
				event.target instanceof HTMLTextAreaElement
			) {
				return;
			}

			const key = event.key;

			if (key === "Enter") {
				validerMot();
			} else if (key === "Backspace") {
				supprimerLettre();
			} else if (/^[a-zA-Z]$/.test(key)) {
				ajouterLettre(key);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [ajouterLettre, supprimerLettre, validerMot]);

	const casesLigneActive = decouperMot(motEnCours);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://localhost:3000/api/word?lang=fr",
					{
						method: "GET",
						headers: {
							"Accept": "application/json",
							"x-api-key": "secret_api_key",
						},
					},
				);

				const data = await response.json();
				setData(data);
			} catch (error) {
				console.error("Erreur :", error);
			}
		};

		fetchData();
	}, []);
	return (
		<>
			<button onClick={() => setShowRules(true)}>Règles du jeu</button>
			<Consigne
				isActive={showRules}
				onClose={() => setShowRules(false)}
			/>
			<Victoire
        		isActive={showVictory}
        		onClose={() => setShowVictory(false)}
        		mot={data?.word ?? ""}
      		/>
			<div className={styles.board}>
				{Array.from({ length: NOMBRE_ESSAIS }, (_, index) => (
					<Row
						key={index}
						values={motsValides[index]
							? decouperMot(motsValides[index])
							: index === motsValides.length
							? casesLigneActive
							: decouperMot("")}
						check={index < motsValides.length}
						answer={data?.word}
					/>
				))}
			</div>
			<Clavier
				onToucheClick={ajouterLettre}
				onSupprimer={supprimerLettre}
				onEntree={validerMot}
				lettresAbsentes={lettresAbsentes}
			/>
		</>
	);
}

export default App;
