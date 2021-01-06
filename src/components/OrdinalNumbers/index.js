import React, { useState } from 'react'
import './styles.css'

const OrdinalNumbers = () => {
  const [form, setForm] = useState({
    number: ''
  })
  const [finalString, setFinalString] = useState()
  const exeptions = [
    {
      value: '1',
      string: 'st',
    },
    {
      value: '2',
      string: 'nd',
    },
    {
      value: '3',
      string: 'rd',
    },
  ]

  const handleInput = (e) => {
    const value = e.target.value
    if (Number(value) || value === '' || value === '0'){
      numberToOrdinal(value)
      setForm({
        [e.target.name]: value,
      })
    }
  }

  const numberToOrdinal = (number) => {
    let stringComplement = number === '' ? '' : 'th'
    if (number === '0'){
      setFinalString(number)
    } else {
      for (let i in exeptions) {
        // exception with 11
        if (exeptions[i].value === number.slice(number.length - 1, number.length) && number != '11' ) {
          stringComplement = exeptions[i].string
        }
      }
      setFinalString(`${number}${stringComplement}`)
    }
  }
  

  return (
    <>
      <h2>2. Ordinal Numbers</h2>
      <form action="">
        <div className="ordinal-numbers__input">
          <label htmlFor="number">Number</label>
          <input type="text" pattern="[0-9]*" onChange={handleInput} name="number" value={form.number} id="number" />
        </div>
        <span>Result: {finalString}</span>
      </form>
    </>
  )
}

export default OrdinalNumbers