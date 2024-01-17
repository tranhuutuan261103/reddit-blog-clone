import React from "react";
import './UpvotedPost.css';
import { PostSkeleton } from '../../components';

const UpvotedPost = () => {
    return (
        <div className="upvoted-post">
            <div className="upvoted-post__container">
                <div className="upvoted-post__left">
                    {
                        [...Array(10)].map((_, index) => (
                            <PostSkeleton key={index} />
                        ))
                    }
                </div>
                <div className="upvoted-post__right">
                    <h1>Profile</h1>
                </div>
            </div>
        </div>
    )
}

export default UpvotedPost;