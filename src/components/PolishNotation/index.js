import React, {useState} from 'react'
import './styles.css'

const PolishNotation = () => {
  const reversePolish = (expresion) => {
    let expr = expresion.split(" ");
    let stack =[];
     if(expr === ''){
      return 0;
    }

    for(let i=0; i<expr.length; i++) {
      if(!isNaN(expr[i]) && isFinite(expr[i])) {
        stack.push(expr[i]);
      }else {
        let a = stack.pop();
        let b = stack.pop();
        if(expr[i] === "+") {
          stack.push(parseInt(a) + parseInt(b));
        } else if(expr[i] === "-") {
            stack.push(parseInt(b) - parseInt(a));
          } else if(expr[i] === "*") {
              stack.push(parseInt(a) * parseInt(b));
          } else if(expr[i] === "/") {
              stack.push(parseInt(b) / parseInt(a));
          } else if(expr[i] === "^") {
              stack.push(Math.pow(parseInt(b), parseInt(a)));
          }
      }
    }

    if(stack.length > 1) {
      return "ERROR";
    }else {
      return stack[0];
    }

  }
  const [form, setForm ] = useState({
    number: ''
  })
  const [finalString, setFinalString] = useState()
  const handleInput = (e) => {
    const value = e.target.value
    setForm({
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFinalString(reversePolish(form.number))
    
  }


  return (
    <>
      <h2>Polish Notation</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="ordinal-numbers__input">
          <label htmlFor="number">expresion (characters separated by space)</label>
          <input type="text" onChange={handleInput} name="number" value={form.number} id="number" />
        </div>
        <button type="submit">calculate</button>
        <span>Result: {finalString}</span>
      </form>
    </>
  )
}

export default PolishNotation