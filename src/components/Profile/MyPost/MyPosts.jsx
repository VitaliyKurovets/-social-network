import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.MyPost}>
            <div className={s.posts}>
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;