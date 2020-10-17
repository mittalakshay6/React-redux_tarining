import React from "react";
import Faker from "faker";

const CommentDetail = (props) => {
  return (
    <div class="comment">
      <a class="avatar" href="/">
        <img alt="Avatar" src={Faker.image.avatar()} />
      </a>
      <div class="content">
        <a class="author" href="/">
          {props.author}
        </a>
        <div class="metadata">
          <span class="date">Today at 5:42PM</span>
        </div>
        <div class="text">How artistic!</div>
        <div class="actions">
          <a class="reply" href="/">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};
export default CommentDetail;
