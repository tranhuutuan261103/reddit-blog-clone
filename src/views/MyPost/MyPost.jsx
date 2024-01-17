import React from "react";
import './MyPost.css';
import { PostSkeleton } from "../../components";

const MyPost = () => {
    return (
        <div className="my-post">
            <div className="my-post__container">
                <div className="my-post__left">
                    {
                        [...Array(10)].map((_, index) => (
                            <PostSkeleton key={index} />
                        ))
                    }
                </div>
                <div className="my-post__right">
                    <h1>Profile</h1>
                </div>
            </div>
        </div>
    )
}

export default MyPost;