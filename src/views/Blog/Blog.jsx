import React from "react";
import './Blog.css';
import { CreatePostPanel, FilterPosts, QuickAccess } from "../../components";

const Blog = () => {
    return (
        <div className="blog">
            <div className="blog-left">
                <CreatePostPanel />
                <FilterPosts />
            </div>
            <div className="blog-right">
                <QuickAccess />
            </div>
        </div>
    );
};

export default Blog;