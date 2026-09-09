import styles from "./Clavier.module.css";
import { Touche } from "./Touche";

interface ClavierProps {
	onToucheClick: (lettre: string) => void;
	onSupprimer: () => void;
	onEntree: () => void;
	lettresAbsentes: ReadonlySet<string>;
}

const LIGNE_AZERTY = ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"];
const LIGNE_AZERTY2 = ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"];
const LIGNE_AZERTY3 = ["W", "X", "C", "V", "B", "N"];

export const Clavier = (
	{ onToucheClick, onSupprimer, onEntree, lettresAbsentes }: ClavierProps,
) => {
	return (
		<div className={styles.clavier}>
			<div className={styles.ligne}>
				{LIGNE_AZERTY.map((caractere) => (
					<Touche
						key={caractere}
						lettre={caractere}
						onClick={onToucheClick}
						desactive={lettresAbsentes.has(caractere.toLowerCase())}
					/>
				))}
			</div>

			<div className={styles.ligne}>
				{LIGNE_AZERTY2.map((caractere) => (
					<Touche
						key={caractere}
						lettre={caractere}
						onClick={onToucheClick}
						desactive={lettresAbsentes.has(caractere.toLowerCase())}
					/>
				))}
			</div>

			<div className={styles.ligne}>
				{LIGNE_AZERTY3.map((caractere) => (
					<Touche
						key={caractere}
						lettre={caractere}
						onClick={onToucheClick}
						desactive={lettresAbsentes.has(caractere.toLowerCase())}
					/>
				))}
			</div>
			<div className={styles.ligne}>
				<button
					type="button"
					className={styles.toucheAction}
					onClick={onEntree}
				>
					Entrée
				</button>

				<button
					type="button"
					className={styles.toucheAction}
					onClick={onSupprimer}
				>
					⌫
				</button>
			</div>
		</div>
	);
};
