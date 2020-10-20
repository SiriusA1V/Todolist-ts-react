import React from 'react'
import List from '../../molecules/List'

type ListULProps = {
    onCheckChange?: (items: any[]) => void
    onClickDelButton?: (items: any[]) => void
    items: any[]
}

const ListULProps: React.FC<ListULProps> = ({
    onCheckChange,
    onClickDelButton,
    items
}: ListULProps) => {
    const handleChangeCheck = (isChecked: boolean, idx: number): void => {
        const c = [...items]
        c[idx].isCheck = isChecked

        if (onCheckChange) {
            onCheckChange(c)
        }
    }

    const handleClickDelButton = (idx: number): void => {
        const c = [...items]
        c.splice(idx, 1)

        if (onClickDelButton) {
            onClickDelButton(c)
        }
    }

    return (
        <ul>
            {items.map((val, idx) => {
                return (
                    <List
                        checkChange={(changeText: boolean): void => {
                            handleChangeCheck(changeText, Number(idx))
                        }}
                        key={val.id}
                        lbValue={val.LabelTXT}
                        isChecked={val.isCheck}
                        onClickDelButton={(): void => handleClickDelButton(Number(idx))}
                    />
                )
            })}
        </ul>
    )
}

export default ListULProps