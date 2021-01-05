import React, { useState } from 'react'
import './styles.css'

const NumberMask = () => {
  const [form, setForm] = useState({
    creditCard: ''
  })
  const [finalNumber, setFinalNumber] = useState()

  const handleChangeInput = (e) => {
    const value = e.target.value
    if (Number(value) || value === '') {
      maskify(value)
      setForm({
        [e.target.name]: value
      })
    }
  }

  const maskify = (string) => {
    let sliced = ''
    if (string.length >= 7) {
      sliced = string.slice(1, string.length - 3)
      setFinalNumber(`*${sliced}***`)
    } else {
      return setFinalNumber(string)
    }
  }
  return (
    <>
      <h2>1. Credit card number mask</h2>
      <form action="">
        <div className="number-mask__input">
          <label htmlFor="creditCard">Credit Card</label>
          <input type="text" pattern="[0-9]*" onChange={handleChangeInput} value={form.creditCard} name="creditCard" id="creditCard"/>
        </div>
        <span>Result: {finalNumber}</span>
      </form>
    </>
  )
}
export default NumberMask