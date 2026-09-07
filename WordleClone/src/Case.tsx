interface CaseProps{
    value:string;
    position:number;
    color:string;
}

export function Case({value,position,color}:CaseProps){
    return (
        <div className="case" style={{"--case-color":{color}}} data-position={position}>
            {value}
        </div>
    )
}