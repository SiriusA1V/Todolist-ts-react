import React, { useState } from 'react'
import List from '../../components/molecules/List'
import SetList from '../../components/molecules/SetList'

type checkType = {
    isCheck : true | false
}

const Top: React.FC = () => {
    const [list_count, setCount] = useState("")
    const [isCheckedL, setCheck] = useState(Array<checkType>())

    const onChangeCheck = (isChecked : boolean, idx : number): void => {
        const c = [...isCheckedL]
        c[idx].isCheck = isChecked
        setCheck(c);
    }

    const onChangeText = (changeText : string) => {
        setCount(changeText)
    }

    const onClickBT = () => {
        const c = []

        if((/^[0-9]*$/).test(list_count)){
            for(let i = 0; i < Number(list_count); i++){
                c.push({isCheck : false})
            }
        }else{
            alert("定数を入れてください。")
        }

        setCheck(c)
    }

    return (
        <div>
            <SetList onChangeTTA={onChangeText} onClickBT={onClickBT}></SetList>

            {Object.keys(isCheckedL).map(idx => {
               return (<List 
                        checkChange={(changeText: boolean): void => {onChangeCheck(changeText, Number(idx))}} 
                        key={idx} 
                        isChecked={isCheckedL[Number(idx)].isCheck
                        }></List>) 
            })}
        </div>
    )
}


export default Top