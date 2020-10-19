import React from 'react'
import Button from '../../atoms/Button'
import Textarea from '../../atoms/Textarea'
import styles from './style.module.scss'

type SetListProps = {
    onChangeTTA: (val: string) => void,
    onClickBT: () => void,
    isBtDisabled?: boolean
}

const SetList: React.FC<SetListProps> = ({ onChangeTTA, onClickBT, isBtDisabled }: SetListProps) => {
    return (
        <div className={styles.container}>
            <Textarea onChange={onChangeTTA} />
            <Button onClick={onClickBT} isDisabled={isBtDisabled}></Button>
        </div>
    )
}

export default SetList