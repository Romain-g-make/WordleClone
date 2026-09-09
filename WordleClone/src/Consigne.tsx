import stylesConsigne from "./Consigne.module.css";

interface ConsigneProps {
    isActive: boolean;
    onClose: () => void;
}

export function Consigne({ isActive, onClose }: ConsigneProps) {
    if (!isActive) return null;

    return (
        <div className={stylesConsigne.rulesContainer}>
            <div className={stylesConsigne.header}>
                <h2>Comment jouer ?</h2>
            </div>

            <p>Devinez le mot secret en 6 essais.</p>                
            <ul>
                <li>Chaque essai doit être un mot valide de 5 lettres.</li>
                <li>La couleur des cases change pour indiquer si vous vous approchez du mot.</li>
            </ul>
            <hr />

            <h3>Exemples</h3>

            <div>
                <div className={stylesConsigne.row}>
                    <span className={stylesConsigne.tileCorrect}>T</span>
                    <span className={stylesConsigne.tile}>R</span>
                    <span className={stylesConsigne.tile}>O</span>
                    <span className={stylesConsigne.tile}>U</span>
                    <span className={stylesConsigne.tile}>E</span>
                </div>
                <p>La lettre <strong>T</strong> est dans le mot et à la bonne place.</p>
            </div>

            <div>
                <div className={stylesConsigne.row}>
                    <span className={stylesConsigne.tile}>C</span>
                    <span className={stylesConsigne.tilePresent}>R</span>
                    <span className={stylesConsigne.tile}>O</span>
                    <span className={stylesConsigne.tile}>U</span>
                    <span className={stylesConsigne.tile}>E</span>
                </div>
                <p>La lettre <strong>R</strong> est dans le mot mais à la mauvaise place.</p>
            </div>

            <div>
                <div className={stylesConsigne.row}>
                    <span className={stylesConsigne.tile}>O</span>
                    <span className={stylesConsigne.tile}>O</span>
                    <span className={stylesConsigne.tileAbsent}>O</span>
                    <span className={stylesConsigne.tile}>O</span>
                    <span className={stylesConsigne.tile}>O</span>
                </div>
                <p>La lettre <strong>O</strong> n'est pas dans le mot secret.</p>
            </div>
            <button className={stylesConsigne.closeButton} onClick={onClose}>
                Bien compris !
            </button>
        </div>
        
    );
}