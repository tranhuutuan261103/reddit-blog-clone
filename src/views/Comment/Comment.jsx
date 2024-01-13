import React from "react";
import { useParams } from "react-router-dom";
import './Comment.css';
import { CommentHeader } from "../../components";

const Comment = () => {
    const { id: idPost } = useParams();

    return <div className="comments">
        <div className="comment-container">
            <CommentHeader />
            <p>Post ID: {idPost}</p>
        </div>
    </div>;
};

export default Comment;