import React from "react";
import "./index.css";
import Comments from "./components/Comments";
import BlogPost from "./components/BlogPost";
import hoc from './components/HOC';

const NewComments = hoc(Comments);

export default function App() {
  return (
    <div className="App">
      <h1>Higher Order Component Example</h1>
      {/* <button onClick={}>Login</button> */}
      <NewComments />
      <BlogPost />
    </div>
  );
}
