import React from "react";
import { Link } from "react-router-dom";
import './FilterPosts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faFire, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';

const FilterPosts = () => {
    return (
        <div className="filter-posts">
            <Link to="/best" className="filter-posts-link">
                <FontAwesomeIcon icon={faRocket} className="filter-posts__link-icon" />
                Best
            </Link>
            <Link to="/hot" className="filter-posts-link">
                <FontAwesomeIcon icon={faFire} className="filter-posts__link-icon" />
                Hot
            </Link>
            <Link to="/new" className="filter-posts-link">
                <FontAwesomeIcon icon={faSun} className="filter-posts__link-icon" />
                New
            </Link>
            <Link to="/top" className="filter-posts-link">
                <FontAwesomeIcon icon={faRankingStar} />
                Top
            </Link>
        </div>
    );
}

export default FilterPosts;