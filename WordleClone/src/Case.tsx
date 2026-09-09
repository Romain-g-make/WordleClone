import styles from './grid.module.css'

interface CaseProps {
    value: string;
    position: number;
    answer: string;
    check: boolean;
}

export function Case({ value, position, answer, check }: CaseProps) {
    let color = 'white'

    if (check) {
        color = answer[position] === value ? '#6aaa64' : answer.includes(value) ? '#c9b458' : '#787c7e'
    }

    const caseStyle = { '--case-color': color } as React.CSSProperties

    return (
        <div className={styles.case} style={caseStyle} data-position={position}>
            {value.toUpperCase()}
        </div>
    )
}