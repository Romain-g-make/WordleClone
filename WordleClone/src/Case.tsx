import styles from './grid.module.css'

interface CaseProps{
    value:string;
    position:number;
    color: "green"|"grey"|"orange"|"red";
    answer:string | undefined;
    check:boolean;
}

function decoupe(word :string){
    return [...word]
}

export function Case({value,position,color,answer,check}:CaseProps){
    if (check && answer) {
        const answerDec = decoupe(answer as string)
        color = "red"
        for (let i = 0; i < answerDec.length; i++) {
            if (answer[i] === value) {
                color = "orange"
                if (i === position) {
                    color = "green"
                    break
                }
            }
        }
    }

    const caseStyle = { '--case-color': color } as React.CSSProperties

    return (
        <div className={styles.case} style={caseStyle} data-position={position}>
            {value.toUpperCase()}
        </div>
    )
}