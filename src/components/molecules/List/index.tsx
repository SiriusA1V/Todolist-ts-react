import React from 'react';
import CheckBox from '../../atoms/CheckBox';
import Label from '../../atoms/Label';
import styles from './style.module.scss'
import DelListBT from '../../atoms/DelListBT'

type CheckBoxProps = {
    checkChange?: (isChecked: boolean) => void,
    onClickDelBT: () => void,
    isChecked: boolean,
    lbValue: string,
    boundCheck?: boolean,
}

const List: React.FC<CheckBoxProps> = ({ checkChange, isChecked, lbValue, boundCheck, onClickDelBT }: CheckBoxProps) => {
    return (
        <div className={styles.container}>
            <DelListBT onClick={onClickDelBT} />
            <CheckBox onChanged={checkChange} isChecked={isChecked}></CheckBox>
            <Label value={lbValue} isChecked={boundCheck}></Label>
        </div>
    )
}

export default List