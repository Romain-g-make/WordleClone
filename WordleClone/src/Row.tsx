import { Case } from './Case'
import styles from './grid.module.css'


interface RowProps{
    values:string[];
    check:boolean;
    answer:string | undefined;
}

export function Row({values,check,answer}:RowProps){
    return (
        <div className={styles.row}>
            {Array.from({ length: 5 }, (_, position) => (
                <Case
                    key={position}
                    value={values[position] || ''}
                    position={position}
                    answer={answer}
                    check={check}
                />
            ))}
        </div>
    )
}