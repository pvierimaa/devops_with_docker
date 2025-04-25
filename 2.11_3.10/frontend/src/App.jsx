import { useState } from 'react'

const API_URL = 'http://localhost:3000/calculate'

const App = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [op, setOp] = useState('+')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const calculate = async (e) => {
    e.preventDefault()
    setError('')
    setResult(null)

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ a: Number(a), b: Number(b), op }),
      })

      const data = await res.json()
      if (!res.ok) {
        setError(data.error)
      } else {
        setResult(data.result)
      }
    } catch {
      setError('Connection error')
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Simple Calculator</h1>
      <form onSubmit={calculate}>
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
        <select value={op} onChange={(e) => setOp(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
        <button type="submit">Calculate</button>
      </form>
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  )
}

export default App
