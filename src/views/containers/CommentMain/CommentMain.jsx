import React from "react";
import './CommentMain.css';
import { UpVoteButton, DownVoteButton, CommentButton, ShareButton, SavePostButton } from "../../../components/Button";

const posts = [
    {
        id: 1,
        avatar: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
        username: "Author",
        creationDate: "2024-01-01",
        title: "Post 1",
        subscription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit quis efficitur tincidunt, sem sem sodales libero, nec tincidunt ipsum velit eu sem. Duis ac metus ac nisl ultricies varius. Cras nec semper magna. Nullam euismod nisl et nunc lacinia, eu lacinia ipsum ultrices. Sed sit amet semper nisl. Nullam eget semper nisl. Nulla facilisi. Nulla facilisi. Donec id semper magna. Nulla facilisi. Nulla facilisi. Donec id semper magna."
    },
    {
        id: 2,
        avatar: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
        username: "Author",
        creationDate: "2024-01-01",
        title: "Post 2",
        subscription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit quis efficitur tincidunt, sem sem sodales libero, nec tincidunt ipsum velit eu sem. Duis ac metus ac nisl ultricies varius. Cras nec semper magna. Nullam euismod nisl et nunc lacinia, eu lacinia ipsum ultrices. Sed sit amet semper nisl. Nullam eget semper nisl. Nulla facilisi. Nulla facilisi. Donec id semper magna. Nulla facilisi. Nulla facilisi. Donec id semper magna."
    },
    {
        id: 3,
        avatar: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
        username: "Author",
        creationDate: "2024-01-01",
        title: "Post 3",
        subscription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit quis efficitur tincidunt, sem sem sodales libero, nec tincidunt ipsum velit eu sem. Duis ac metus ac nisl ultricies varius. Cras nec semper magna. Nullam euismod nisl et nunc lacinia, eu lacinia ipsum ultrices. Sed sit amet semper nisl. Nullam eget semper nisl. Nulla facilisi. Nulla facilisi. Donec id semper magna. Nulla facilisi. Nulla facilisi. Donec id semper magna."
    },
    {
        id: 4,
        avatar: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
        username: "Author",
        creationDate: "2024-01-01",
        title: "Post 4",
        subscription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit quis efficitur tincidunt, sem sem sodales libero, nec tincidunt ipsum velit eu sem. Duis ac metus ac nisl ultricies varius."
    }
];

const comments = [
    {
        id: 1,
        avatar: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
        username: "Author",
        creationDate: "2024-01-01",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit quis efficitur tincidunt, sem sem sodales libero, nec tincidunt ipsum velit eu sem. Duis ac metus ac nisl ultricies varius. Cras nec semper magna. Nullam euismod nisl et nunc lacinia, eu lacinia ipsum ultrices. Sed sit amet semper nisl. Nullam eget semper nisl. Nulla facilisi. Nulla facilisi. Donec id semper magna. Nulla facilisi. Nulla facilisi. Donec id semper magna.",
        votes: 0
    },
    {
        id: 2,
        avatar: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
        username: "Author",
        creationDate: "2024-01-01",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit quis efficitur tincidunt, sem sem sodales libero, nec tincidunt ipsum velit eu sem. Duis ac metus ac nisl ultricies varius. Cras nec semper magna. Nullam euismod nisl et nunc lacinia, eu lacinia ipsum ultrices. Sed sit amet semper nisl. Nullam eget semper nisl. Nulla facilisi. Nulla facilisi. Donec id semper magna. Nulla facilisi. Nulla facilisi. Donec id semper magna.",
        votes: 4
    },
    {
        id: 3,
        avatar: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
        username: "Author",
        creationDate: "2024-01-01",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit quis efficitur tincidunt, sem sem sodales libero, nec tincidunt ipsum velit eu sem. Duis ac metus ac nisl ultricies varius. Cras nec semper magna. Nullam euismod nisl et nunc lacinia, eu lacinia ipsum ultrices. Sed sit amet semper nisl. Nullam eget semper nisl. Nulla facilisi. Nulla facilisi. Donec id semper magna. Nulla facilisi. Nulla facilisi. Donec id semper magna.",
        votes: 2
    }
];

const CommentMain = ({ idPost }) => {
    const post = posts.find(post => post.id === parseInt(idPost));

    const handleUpVote = () => {
        console.log("upvote");
    }

    const handleDownVote = () => {
        console.log("downvote");
    }

    const handleCommentBtnClick = () => {
        console.log("comment");
    }

    const handleSavePostBtnClick = () => {
        console.log("save");
    }

    return (
        <div className="comment-main">
            <div className="comment-main-border">
                <div className="comment-main__top">
                    <div className="comment-main__left">
                        <UpVoteButton upVote={handleUpVote} />
                        <span className="comment-main__votes">4.2k</span>
                        <DownVoteButton downVote={handleDownVote} />
                    </div>
                    <div className="comment-main__right">
                        <div className="post-header">
                            <span className="post-header-id" hidden>{post.id}</span>
                            <span className="post-header-author">
                                <img src={post.avatar} className="post-header__author-avatar" alt="Author" />
                                <span className="post-header__author-username">{post.username}</span>
                            </span>
                            <span className="post-header-date">{post.creationDate}</span>
                        </div>
                        <div className="post-body">
                            <h2 className="post-body__title">{post.title}</h2>
                            <p className="post-body__subscription">{post.subscription}</p>
                        </div>
                        <div className="post-footer">
                            <CommentButton clickEvent={handleCommentBtnClick} />
                            <ShareButton />
                            <SavePostButton clickEvent={handleSavePostBtnClick} />
                        </div>

                        <div className="comment-main__bottom">
                            <span className="comment-main__bottom-text">Comment as {"Tuanne"}</span>
                            <textarea className="comment-main__bottom-textarea" placeholder="What are your thoughts?" rows={12} />
                            <div className="comment-main__bottom-action">
                                <button className="comment-main__bottom-action-btn">Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment-list">
                    {comments.map(comment => (
                        <div className="comment-list__item" key={comment.id}>
                            <div className="comment-list__item-left">
                                <div className="comment-list__item-left-author">
                                    <img src={comment.avatar} className="comment-list__item-header__author-avatar" alt="Author" />
                                </div>
                            </div>
                            <div className="comment-list__item-right">
                                <div className="comment-list__item-header">
                                    <span className="comment-list__item-header__author-username">{comment.username}</span>
                                    <span className="comment-list__item-header-date">{comment.creationDate}</span>
                                </div>
                                <div className="comment-list__item-body">
                                    <p className="comment-list__item-body__content">{comment.content}</p>
                                </div>
                                <div className="comment-list__item-footer">
                                    <UpVoteButton upVote={handleUpVote} />
                                    <span className="comment-list__item-votes">{comment.votes}</span>
                                    <DownVoteButton downVote={handleDownVote} />
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default CommentMain;