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
    if(answer[position]==value){
        color="green"
    }else if (value in answerDec){
        color = "orange"
    } else {color= "red"}
    return (
        <div className={styles.case} style={{"--case-color":color}} data-position={position}>
            {value}
        </div>
    )
}