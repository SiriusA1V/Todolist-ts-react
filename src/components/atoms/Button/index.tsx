import React from 'react'

type ButtonProps = {
    onClick : () => void,
    isDisabled? : boolean
}

const Button: React.FC<ButtonProps> = ({onClick, isDisabled} : ButtonProps) => {
    return(
        <button onClick={onClick} disabled={isDisabled}>Button</button>
    )
}

export default Button