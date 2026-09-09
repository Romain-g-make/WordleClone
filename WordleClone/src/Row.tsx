import { Case } from './Case'
import styles from './grid.module.css'


interface RowProps{
    values:[string,string,string,string,string];
    check:boolean;
    answer:string;
}

export function Row({values,check,answer}:RowProps){
    return (
        <div className={styles.row}>
            <Case value={values[0]} position={0} color='black' answer={answer} check={check} ></Case>
            <Case value={values[1]} position={1} color='black' answer={answer} check={check}></Case>
            <Case value={values[2]} position={2} color='black' answer={answer} check={check}></Case>
            <Case value={values[3]} position={3} color='black' answer={answer} check={check}></Case>
            <Case value={values[4]} position={4} color='black' answer={answer} check={check}></Case>
        </div>
    )
}