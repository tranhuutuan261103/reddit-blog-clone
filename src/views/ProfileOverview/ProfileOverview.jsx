import React from "react";
import './ProfileOverview.css';

const ProfileOverview = () => {
    return (
        <div className="profile-overview">
            <div className="profile-overview__container">
                <div className="profile-overview__left">
                    <div className="profile-overview__avatar"></div>
                    <div className="profile-overview__info">
                        <h1 className="profile-overview__username">tuanne</h1>
                        <h2 className="profile-overview__name">Tuan Tran</h2>
                    </div>
                </div>
                <div className="profile-overview__right">
                    <div className="profile-overview__stats">
                        <div className="profile-overview__stat">
                            <h3 className="profile-overview__stat-number">0</h3>
                            <h4 className="profile-overview__stat-title">Post</h4>
                        </div>
                        <div className="profile-overview__stat">
                            <h3 className="profile-overview__stat-number">0</h3>
                            <h4 className="profile-overview__stat-title">Comment</h4>
                        </div>
                        <div className="profile-overview__stat">
                            <h3 className="profile-overview__stat-number">0</h3>
                            <h4 className="profile-overview__stat-title">Karma</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileOverview;