import React, { useState } from 'react'
import SetList from '../../components/molecules/SetList'
import styles from './style.module.scss'
import ListUL from '../../components/molecules/ListUL'

type checkType = {
  id: number
  isCheck: boolean
  LabelTXT: string
}

const Top: React.FC = () => {
  const [lableTxt, setLabel] = useState('')
  const [listItems, setListItems] = useState(Array<checkType>())
  const [listItemsID, setListItemsID] = useState(0)
  const [isButtonDisabled, setButtonDisabled] = useState(true)

  // const handleChangeCheck = (isChecked: boolean, idx: number): void => {
  //   const c = [...listItems]
  //   c[idx].isCheck = isChecked
  //   setListItems(c)
  // }

  const handleChangeText = (changeText: string): void => {
    if (changeText.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }

    setLabel(changeText)
  }

  const handleSubmitButton = (): void => {
    const c = [...listItems]

    c.push({ isCheck: false, LabelTXT: lableTxt, id: listItemsID })

    setListItemsID(listItemsID + 1)
    setLabel("")
    setButtonDisabled(true)
    setListItems(c)
  }

  // const handleClickDelButton = (idx: number): void => {
  //   const c = [...listItems]
  //   c.splice(idx, 1)

  //   setListItems(c)
  // }

  return (
    <div className={styles.container}>
      <div className={styles.setlist_cnt}>
        <SetList
          textareaValue={lableTxt}
          onChangeTextarea={handleChangeText}
          onSubmit={handleSubmitButton}
          isButtonDisabled={isButtonDisabled}
        />
      </div>

      <div className={styles.list_cnt}>
        <div className={styles.listItemJ_cnt}>
          <ListUL
            onCheckChange={(items: any[]): void => {
              setListItems(items)
            }}
            onClickDelButton={(items: any[]): void => {
              setListItems(items)
            }}
            items={listItems}
          />
        </div>
      </div>
    </div>
  )
}

export default Top
