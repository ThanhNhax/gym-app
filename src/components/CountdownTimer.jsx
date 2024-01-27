import React, { useState, useEffect } from 'react'
import Timer from './Timer'
import Button from './Button'

const CountdownTimer = () => {
  const [count, setCount] = useState(60)
  const [rounds, setRounds] = useState(1)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval = null

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === 0) {
            setRounds(() => rounds + 1)
            return rounds % 2 === 0 ? 60 : 45 // Đếm 60 giây sau đó 45 giây
          } else {
            return prevCount - 1
          }
        })
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isRunning, rounds])

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setCount(60)
    setRounds(1)
    setIsRunning(false)
  }
  const initTimer = rounds % 2 === 0 ? (count / 45) * 100 : (count / 60) * 100

  console.log({ initTimer })
  return (
    <div>
      <div>Thời gian: {count} giây</div>
      <div>Số lần lặp lại: {rounds}</div>
      <Button disabled={isRunning} onClick={handleStart}>
        Bắt đầu
      </Button>
      <Button onClick={handleStop}>Dừng</Button>
      <Button onClick={handleReset}>Đặt lại</Button>
      <Timer text={count} value={initTimer} />
    </div>
  )
}

export default CountdownTimer
