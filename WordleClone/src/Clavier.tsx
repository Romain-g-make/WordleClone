import { useState } from "react";
import { Touche } from "./Touche";

const LIGNE_AZERTY = ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P","suppr" ];
const LIGNE_AZERTY2 = ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M","Entrée"];
const LIGNE_AZERTY3 = ["W", "X", "C", "V", "B", "N"];

export const Clavier = ({ onToucheClick }: { onToucheClick: (lettre: string) => void }) => {
  const [lettreChoisie, setLettreChoisie] = useState<string>("");

  const gererClic = (lettre: string) => {
    setLettreChoisie(lettre);
    onToucheClick(lettre);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "6px" }}>
        {LIGNE_AZERTY.map((caractere) => (
          <Touche
            key={caractere}
            lettre={caractere}
            onClick={gererClic}
            desactive={lettreChoisie === caractere}
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: "6px" }}>
        {LIGNE_AZERTY2.map((caractere) => (
          <Touche
            key={caractere}
            lettre={caractere}
            onClick={gererClic}
            desactive={lettreChoisie === caractere}
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: "6px" }}>
        {LIGNE_AZERTY3.map((caractere) => (
          <Touche
            key={caractere}
            lettre={caractere}
            onClick={gererClic}
            desactive={lettreChoisie === caractere}
          />
        ))}
      </div>
    </div>
  );
};