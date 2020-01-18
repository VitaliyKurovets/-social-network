import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPost/MyPosts.jsx';

const Profile = () => {
    return (
        <div className={s.Profile}>
            <div>
                <img src="https://cdn.promodj.com/afs/e89cd00519228e2f12fd30f862c374c212:a66b1b" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;