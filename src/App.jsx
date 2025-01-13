import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TweetSentiment from "./pages/TweetSentiment";
import Home from "./pages/Home";
import { Layout } from "./components/molecules/Layout";

function App() {
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
