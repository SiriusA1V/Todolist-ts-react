import React from 'react'

type LabelProps = {
  value: string
  isChecked?: boolean
}

const Label: React.FC<LabelProps> = ({ value, isChecked }: LabelProps) => {
  return (
    <div style={isChecked ? { textDecoration: 'line-through' } : {}}>
      {value}
    </div>
  )
}

export default Label
