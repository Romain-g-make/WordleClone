import styles from './clavier.module.css';

interface ToucheProps {
  lettre: string;
  onClick: (lettre: string) => void;
  desactive?: boolean;
}

export const Touche = ({ lettre, onClick, desactive = false }: ToucheProps) => {
  const classeBouton = `${styles.touche} ${desactive ? styles.desactive : ''}`.trim();

  return (
    <button
      type="button"
      className={classeBouton}
      onClick={() => onClick(lettre)}
      disabled={desactive}
    >
      {lettre}
    </button>
  );
};