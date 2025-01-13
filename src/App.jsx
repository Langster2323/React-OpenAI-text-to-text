import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TweetSentiment from "./pages/TweetSentiment";
import Home from "./pages/Home";
import NavBar from "./components/organisms/NavBar/NavBar";
import { Layout } from "./components/molecules/Layout";

function App() {
  const [tweet, setTweet] = useState("");
  const [sentiment, setSentiment] = useState(""); // positive, negative, neutral
  const callOpenAIAPI = async () => {
    const APIBody = {
      model: "gpt-3.5-turbo",
      max_tokens: 60,
      temperature: 0,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      messages: [
        {
          role: "system",
          content:
            "You will be provided with a tweet, and your task is to classify its sentiment as with a value between 0 and 10 (to being its very positive).",
        },
        {
          role: "user",
          content: tweet,
        },
      ],
    };
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify(APIBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSentiment(data.choices[0].message.content);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <BrowserRouter>
      <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweet-sentiment" element={<TweetSentiment />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
