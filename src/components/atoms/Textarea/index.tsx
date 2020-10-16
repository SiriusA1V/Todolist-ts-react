import React, { useState } from 'react'

type TextAreaProps = {
    onChange? : (val: string) => void,
}

const Textarea: React.FC<TextAreaProps> = ({onChange} : TextAreaProps) => {
    const [tval, setTval] = useState("")
    const handleChanged = (e : React.ChangeEvent<HTMLInputElement>) : void=> {
        const val = e.target.value
        setTval(val)
        if(onChange){
            onChange(val)
        }
    }

    return(
        <input type="text" onChange={handleChanged} value={tval}></input>
    )
}

export default Textarea