import React from "react";
import './SavedPost.css';
import { PostSkeleton, ProfilePanel } from "../../components";

const SavedPost = () => {
    return (
        <div className="saved-post">
            <div className="saved-post__container">
                <div className="saved-post__left">
                    {
                        [...Array(10)].map((_, index) => (
                            <PostSkeleton key={index} />
                        ))
                    }
                </div>
                <div className="saved-post__right">
                    <ProfilePanel />
                </div>
            </div>
        </div>
    )
}

export default SavedPost;