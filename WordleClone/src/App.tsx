import { useEffect, useState } from "react";
import styles from "./grid.module.css";
import { Row } from "./Row";
import { Consigne } from "./Consigne";
import { Clavier } from "./Clavier";

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

  	const ajouterLettre = (lettre: string) => {
    	if (motEnCours.length < TAILLE_MAX) {
      		setMotEnCours((prev) => prev + lettre.toLowerCase());
    	}
  	};

  	const supprimerLettre = () => {
    	setMotEnCours((prev) => prev.slice(0, -1));
  	};

  	const validerMot = () => {
    	if (
      		motEnCours.length !== TAILLE_MAX || motsValides.length >= NOMBRE_ESSAIS
    	){
      		return;
    	}

    	setMotsValides((prev) => [...prev, motEnCours]);
    	setMotEnCours("");
  	};

  	const casesLigneActive = decouperMot(motEnCours);

  	useEffect(() => {
    	const fetchData = async () => {
      		try {
        		const response = await fetch("http://localhost:3000/api/word?lang=fr", {
          		method: "GET",
          		headers: {
            		"Accept": "application/json",
            		"x-api-key": "secret_api_key",
          			},
        		});

        		const data = await response.json();
        		setData(data);
      		}catch (error) {
        		console.error("Erreur :", error);
      		}
    	};

    	fetchData();
  	}, []);
  	const [showRules, setShowRules] = useState(true);

  	return (
    <>
      	<button onClick={() => setShowRules(true)}>Règles du jeu</button>
      	<Consigne
        	isActive={showRules}
        	onClose={() => setShowRules(false)}
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
      	/>
    </>
  	);
}

export default App;
