import styles from './grid.module.css'

interface CaseProps{
    value:string;
    position:number;
    color: "green"|"grey"|"orange"|"red";
}

export function Case({value,position,color}:CaseProps){

    const caseStyle = { '--case-color': color } as React.CSSProperties

    return (
        <div className={styles.case} style={caseStyle} data-position={position}>
            {value.toUpperCase()}
        </div>
    )
}