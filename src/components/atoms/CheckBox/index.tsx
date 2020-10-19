import React from 'react'
import styles from './style.module.scss'

type CheckBoxProps = {
  onChanged?: (isChecked: boolean) => void
  isChecked: boolean
}

const CheckBox: React.FC<CheckBoxProps> = ({
  onChanged,
  isChecked,
}: CheckBoxProps) => {
  // const [isChecked, setChecked] = useState(false)
  const handleChange = (): void => {
    const updateState = !isChecked
    // setChecked(updateState)
    if (onChanged) {
      onChanged(updateState)
    }
  }

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
      className={styles.CheckBox}
    />
  )
}

export default CheckBox
