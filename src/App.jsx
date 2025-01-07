import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tweet, setTweet] = useState("")
  const [sentiment, setSentiment] = useState(""); // positive, negative, neutral

  const callOpenAIAPI = async () => {
    console.log("Calling OpenAI API")
  }
console.log("tweet", tweet)
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
