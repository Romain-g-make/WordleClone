import { useState } from 'react'
import styles from './grid.module.css'
import { Row } from './Row'
import { Clavier } from './Clavier'

const TAILLE_MAX = 5;
const NOMBRE_ESSAIS = 6;
const REPONSE = "troue";

const decouperMot = (mot: string) => Array.from({ length: TAILLE_MAX }, (_, index) => mot[index] || '');

function App() {
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
    if (motEnCours.length !== TAILLE_MAX || motsValides.length >= NOMBRE_ESSAIS) {
      return;
    }

    setMotsValides((prev) => [...prev, motEnCours]);
    setMotEnCours("");
  };

  const casesLigneActive = decouperMot(motEnCours);

  return (
    <>
      <div className={styles.board}>
        {Array.from({ length: NOMBRE_ESSAIS }, (_, index) => (
          <Row
            key={index}
            values={motsValides[index] ? decouperMot(motsValides[index]) : index === motsValides.length ? casesLigneActive : decouperMot('')}
            check={index < motsValides.length}
            answer={REPONSE}
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