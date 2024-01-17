import React from "react";
import { Routes, Route } from "react-router-dom";
import './Profile.css';
import { ProfileHeader } from '../containers';

const profile = {
    id: 1,
    username: "tuanne",
    name: "Tuan Tran",
    profileImageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
}

const Profile = () => {
    return (
        <div className="profile">
            <ProfileHeader profile={profile} />
            <div className="profile__content">
                <Routes>
                    <Route path="/:username/posts" element={<h1>Posts</h1>} />
                    <Route path="/:username/saved" element={<h1>Saved</h1>} />
                    <Route path="/:username/upvoted" element={<h1>Upvoted</h1>} />
                    <Route path="/:username/downvoted" element={<h1>Downvoted</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default Profile;