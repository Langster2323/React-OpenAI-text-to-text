import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tweet, setTweet] = useState("")
  const [sentiment, setSentiment] = useState(""); // positive, negative, neutral
  const callOpenAIAPI = async () => {
    const APIBody = {
      "model": "gpt-3.5-turbo",
      "max_tokens": 60,
      "temperature": 0,
      "top_p": 1,
      "frequency_penalty": 0,
      "presence_penalty": 0,
      "messages": [
        {
          "role": "system",
          "content": "You will be provided with a tweet, and your task is to classify its sentiment as positive, neutral, or negative."
        },
        {
          "role": "user",
          "content": tweet
        }
      ],
    }
    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify(APIBody)
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        setSentiment(data.choices[0].message.content)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
  return (
 <div>
  <div>
    <textarea
      onChange={(e) => setTweet(e.target.value)}
      placeholder='Paste your tweet here!'
      cols={50}
      rows={10}
    />
  </div>
  <div>
    <button onClick={callOpenAIAPI}>Get The Tweet Sentiment From OpenAI API</button>
    {sentiment && <h3>This Tweet Is: {sentiment}</h3>}
  </div>
 </div>
  )
}

export default App
