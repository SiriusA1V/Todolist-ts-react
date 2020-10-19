import React, { useState } from 'react'
import List from '../../components/molecules/List'
import SetList from '../../components/molecules/SetList'
import styles from './style.module.scss'

type checkType = {
    isCheck: boolean,
    LabelTXT: string
}

const Top: React.FC = () => {
    const [LabelTXT, setLabel] = useState("")
    const [listItem, setCheck] = useState(Array<checkType>())
    const [isBtDisabled, setBtDisabled] = useState(true)

    const onChangeCheck = (isChecked: boolean, idx: number): void => {
        const c = [...listItem]
        c[idx].isCheck = isChecked
        setCheck(c);
    }

    const onChangeText = (changeText: string) => {
        if (changeText.length > 0) {
            setBtDisabled(false)
        } else {
            setBtDisabled(true)
        }

        setLabel(changeText)
    }

    const onClickBT = () => {
        const c = [...listItem]

        c.push({ isCheck: false, LabelTXT: LabelTXT })

        setCheck(c)
    }

    const onClickDelBT = (idx: number) => {
        const c = [...listItem]
        c.splice(idx, 1)

        setCheck(c)
    }

    return (
        <div className={styles.container}>
            <div className={styles.setlist_cnt}>
                <SetList onChangeTTA={onChangeText} onClickBT={onClickBT} isBtDisabled={isBtDisabled} />
            </div>

            <div className={styles.list_cnt}>
                <div className={styles.listItemJ_cnt}>
                    {Object.keys(listItem).map(idx => {
                        return (<List
                            checkChange={(changeText: boolean): void => { onChangeCheck(changeText, Number(idx)) }}
                            key={idx}
                            lbValue={listItem[Number(idx)].LabelTXT}
                            boundCheck={listItem[Number(idx)].isCheck}
                            isChecked={listItem[Number(idx)].isCheck}
                            onClickDelBT={() => onClickDelBT(Number(idx))}
                        ></List>)
                    })}
                </div>
            </div>
        </div>
    )
}


export default Top