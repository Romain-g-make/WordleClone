import styles from './case.module.css'

interface CaseProps{
    value:string;
    position:number;
    color:string;
    answer:string;
}

function decoupe(word:string){
    return [...word]
}

export function Case({value,position,color,answer}:CaseProps){
    const answerDec = decoupe(answer)
    color= "red"
    for (let i=0;i<answerDec.length;i++){
        if (answer[i]==value){
            color = "orange"
            if(i==position){
                color="green"
                break
            }
        }
    }
    return (
        <div className={styles.case} style={{"--case-color":color}} data-position={position}>
            {value}
        </div>
    )
}