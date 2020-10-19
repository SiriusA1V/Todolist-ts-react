import React from 'react'
import styles from './style.module.scss'

type DelListBTProps = {
    onClick: () => void
}

const DelListBT: React.FC<DelListBTProps> = ({ onClick }: DelListBTProps) => {
    return (
        <button className={styles.delListBT} onClick={onClick}>x</button>
    )
}

export default DelListBT