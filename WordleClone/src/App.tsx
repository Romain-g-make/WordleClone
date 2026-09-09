import { useEffect, useState } from "react";
import "./App.css";
import styles from "./grid.module.css";
import { Row } from "./Row";
import { Consigne } from "./Consigne";

interface WordData {
  word: string;
  language: string;
  date: string;
}

function App() {
  const [data, setData] = useState<WordData | null>(null);

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
      } catch (error) {
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
        isActive={showRules} onClose={() => setShowRules(false)} />
      <div className={styles.board}>
        <Row values={["o", "o", "o", "o", "o"]} check={true} answer={data?.word}/>
        <Row values={["t", "r", "u", "o", "a"]} check={true} answer={data?.word} />
        <Row values={["c", "r", "o", "u", "e"]} check={true} answer={data?.word} />
        <Row values={["t", "r", "o", "u", "e"]} check={true} answer={data?.word} />
        <Row values={["", "", "", "", ""]} check={true} answer={data?.word} />
      </div>
    </>
  );
}

export default App;
