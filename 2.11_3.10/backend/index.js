const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/calculate', (req, res) => {
  const { a, b, op } = req.body

  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'a and b must be numbers' })
  }

  let result
  switch (op) {
    case '+':
      result = a + b
      break
    case '-':
      result = a - b
      break
    case '*':
      result = a * b
      break
    case '/':
      result = b !== 0 ? a / b : 'division by zero'
      break
    default:
      return res.status(400).json({ error: 'Unknown operator' })
  }

  res.json({ result })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
