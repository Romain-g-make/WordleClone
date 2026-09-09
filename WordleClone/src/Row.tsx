import { Case } from './Case'
import styles from './grid.module.css'

interface RowProps {
    values: string[];
    check: boolean;
    answer: string | undefined;
}

function computeColors(values: string[], answer: string | undefined): ("green" | "orange" | "red" | "grey")[] {
    let result: ("green" | "orange" | "red" | "grey")[] = Array(5).fill("grey");

    if (!answer || answer.length !== 5) {
        return result;
    }

    const target = answer.toLowerCase().split('');
    const guess = values.map(v => v.toLowerCase());
    const taken = Array(5).fill(false);

    for (let i = 0; i < 5; i++) {
        if (guess[i] && guess[i] === target[i]) {
            result[i] = "green";
            taken[i] = true;
        }
    }

    for (let i = 0; i < 5; i++) {
        if (result[i] === "green" || !guess[i]){
            continue;
        }
        const foundIndex = target.findIndex(
            (char, index) => char === guess[i] && !taken[index]
        );
        if (foundIndex !== -1) {
            result[i] = "orange";
            taken[foundIndex] = true;
        } else {
            result[i] = "red";
        }
    }
    return result;
}

export function Row({ values, check: shouldCheck, answer }: RowProps) {
    const colors = shouldCheck ? computeColors(values, answer) : Array(5).fill("grey");

    return (
        <div className={styles.row}>
            {Array.from({ length: 5 }, (_, position) => (
            <Case
                key={position}
                value={values[position] || ''}
                position={position}
                color={colors[position]}
            />
            ))}
        </div>
  );
}