import React from 'react'
import Button from '../../atoms/Button'
import Textarea from '../../atoms/Textarea'

type SetListProps = {
    onChangeTTA : (val : string) => void,
    onClickBT : () => void
}

const SetList: React.FC<SetListProps> = ({onChangeTTA, onClickBT} : SetListProps) => {
    return(
        <div>
            <Textarea onChange={onChangeTTA}/>
            <Button onClick={onClickBT}></Button>
        </div>
    )
}

export default SetList