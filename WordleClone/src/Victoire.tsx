import stylesVictoire from "./Consigne.module.css";

interface VictoireProps {
    isActive: boolean;
    onClose: () => void;
    mot: string;
}

export function Victoire({ isActive, onClose, mot }: VictoireProps) {
    if (!isActive) return null;

    return (
        <div className={stylesVictoire.rulesContainer}>
            <div className={stylesVictoire.header}>
                <h2>Bravo, vous avez gagné !</h2>
            </div>

            <p>Le mot secret était :</p>
            <h3>{mot.toUpperCase()}</h3>
            <button className={stylesVictoire.closeButton} onClick={onClose}>
                Fermer
            </button>
        </div>
    );
}