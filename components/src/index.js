// Import react and react-dom
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container elements">
      <ApprovalCard>
        <CommentDetail author="King" />
      </ApprovalCard>
      <CommentDetail author="only" />
      <CommentDetail author="one" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
