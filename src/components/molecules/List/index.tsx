import React from 'react';
import CheckBox from '../../atoms/CheckBox';
import Label from '../../atoms/Label';

type CheckBoxProps = {
    checkChange?: (isChecked : boolean) => void,
    isChecked: boolean,
    lbValue : string,
    boundCheck?: boolean,
}

const List: React.FC<CheckBoxProps> = ({checkChange, isChecked, lbValue, boundCheck}: CheckBoxProps) =>{
    return (
        <div style={{display:"flex"}}>
            <CheckBox onChanged={checkChange} isChecked={isChecked}></CheckBox>
            <Label value={lbValue} isChecked={boundCheck}></Label>
        </div>
    )
}

export default List