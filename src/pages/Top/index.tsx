import React, { useState } from 'react'
import SetList from '../../components/molecules/SetList'
import styles from './style.module.scss'
import ListUL from '../../components/molecules/ListUL'

type checkType = {
  id: number
  isCheck: boolean
  LabelTxt: string
}

const Top: React.FC = () => {
  const [listItems, setListItems] = useState(Array<checkType>())
  const [listItemsID, setListItemsID] = useState(0)

  const handleSubmitButton = (labelTxt: string): void => {
    const c = [...listItems]

    c.push({ isCheck: false, LabelTxt: labelTxt, id: listItemsID })

    setListItemsID(listItemsID + 1)

    console.log(c)

    setListItems(c)
  }

  return (
    <div className={styles.container}>
      <div className={styles.setlist_cnt}>
        <SetList
          onSubmit={(labelTxt: string): void => handleSubmitButton(labelTxt)}
        />
      </div>

      <div className={styles.list_cnt}>
        <div className={styles.listItemJ_cnt}>
          <ListUL
            onCheckChange={(items: any[]): void => setListItems(items)}
            onClickDelButton={(items: any[]): void => setListItems(items)}
            items={listItems}
          />
        </div>
      </div>
    </div>
  )
}

export default Top
