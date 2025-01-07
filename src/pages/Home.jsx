import React from "react";
import NavBar from "../components/organisms/NavBar/NavBar";

export default function Home() {
  return (
    <div>
        <NavBar />
      <h1>Home</h1>
      <p>
        This is the home page. For all OpenAI API related content, please visit the Tweet Sentiment page. More pages will be added soon.
      </p>
    </div>
  );
}