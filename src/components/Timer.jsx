import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Timer = ({ value, text }) => {
  return (
    <CircularProgressbar
      value={value}
      styles={buildStyles({ pathColor: 'red' })}
      text={text}
      strokeWidth={6}
    />
  )
}

export default Timer
