import React from 'react';
import {connect} from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({posts}) => {
    const classes = useStyles();
    console.log(posts);
    return (
        <>
            <h1>
                Posts
            </h1>
            <Post/>
            <Post/>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps)(Posts);