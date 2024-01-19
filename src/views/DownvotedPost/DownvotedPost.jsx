import React from "react";
import './DownvotedPost.css';
import { PostSkeleton, ProfilePanel } from '../../components';

const DownvotedPost = () => {
    return (
        <div className="downvoted-post">
            <div className="downvoted-post__container">
                <div className="downvoted-post__left">
                    {
                        [...Array(10)].map((_, index) => (
                            <PostSkeleton key={index} />
                        ))
                    }
                </div>
                <div className="downvoted-post__right">
                    <ProfilePanel />
                </div>
            </div>
        </div>
    )
}

export default DownvotedPost;