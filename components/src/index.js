// Import react and react-dom
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="ui container elements">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            King
          </a>
          <div className="metadata">
            <span className="date">Today, now</span>
          </div>
          <div className="text">Believe it or not, You are the best !</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
