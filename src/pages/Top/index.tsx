import React, { useState } from 'react'
import List from '../../components/molecules/List'
import SetList from '../../components/molecules/SetList'

type checkType = {
    isCheck : boolean,
    LabelTXT : string
}

const Top: React.FC = () => {
    const [LabelTXT, setLabel] = useState("")
    const [listItem, setCheck] = useState(Array<checkType>())
    const [isBtDisabled, setBtDisabled] = useState(true)

    const onChangeCheck = (isChecked : boolean, idx : number): void => {
        const c = [...listItem]
        c[idx].isCheck = isChecked
        setCheck(c);
    }

    const onChangeText = (changeText : string) => {
        if(changeText.length > 0){
            setBtDisabled(false)
        }else{
            setBtDisabled(true)
        }

        setLabel(changeText)
    }

    const onClickBT = () => {
        const c = [...listItem]

        c.push({isCheck : false, LabelTXT : LabelTXT})

        setCheck(c)
    }

    return (
        <div>
            <SetList onChangeTTA={onChangeText} onClickBT={onClickBT} isBtDisabled={isBtDisabled} ></SetList>

            {Object.keys(listItem).map(idx => {
               return (<List 
                        checkChange={(changeText: boolean): void => {onChangeCheck(changeText, Number(idx))}} 
                        key={idx} 
                        lbValue={listItem[Number(idx)].LabelTXT}
                        boundCheck={listItem[Number(idx)].isCheck}
                        isChecked={listItem[Number(idx)].isCheck
                        }></List>) 
            })}
        </div>
    )
}


export default Top