import React, { useState } from 'react';

type CheckBoxProps = {
    onChanged?: (isChecked : boolean) => void,
    isChecked: boolean
}

const CheckBox: React.FC<CheckBoxProps> = ({onChanged, isChecked}: CheckBoxProps) => {
    //const [isChecked, setChecked] = useState(false)
    const onChangeHandle = (): void =>{
        const updateState = !isChecked;
        //setChecked(updateState)
        if(onChanged){
            onChanged(updateState)
        }
    }

    return (
        <input type="checkbox" checked={isChecked} onChange={onChangeHandle}/>
    );
}

export default CheckBox;