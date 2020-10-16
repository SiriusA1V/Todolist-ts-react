import React from 'react'

type ButtonProps = {
    onClick : () => void
}

const Button: React.FC<ButtonProps> = ({onClick} : ButtonProps) => {
    return(
        <button onClick={onClick}>Button</button>
    )
}

export default Button