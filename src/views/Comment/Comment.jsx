import React from "react";
import { useParams } from "react-router-dom";
import './Comment.css';
import { CommentHeader } from "../../components";
import { CommentMain, FollowLecture } from "../containers";
import { BackToTopButton } from "../../components/Button";
const Comment = () => {
    const { id: idPost } = useParams();

    return <div className="comments">
        <div className="comment-container">
            <CommentHeader />
            <div className="comment-body">
                <CommentMain idPost={idPost} />
                <FollowLecture />
            </div>
        </div>
        <BackToTopButton />
    </div>;
};

export default Comment;