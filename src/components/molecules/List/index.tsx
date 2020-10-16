import React from 'react';
import CheckBox from '../../atoms/CheckBox';
import Label from '../../atoms/Label';

type CheckBoxProps = {
    checkChange?: (isChecked : boolean) => void,
    isChecked: boolean
}

const List: React.FC<CheckBoxProps> = ({checkChange, isChecked}: CheckBoxProps) =>{
    return (
        <div style={{display:"flex"}}>
            <CheckBox onChanged={checkChange} isChecked={isChecked}></CheckBox>
            <Label></Label>
        </div>
    )
}

export default List