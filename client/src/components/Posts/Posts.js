import React from 'react';
import {connect} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({posts, setCurrentId}) => {
    const classes = useStyles();
    return (
        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post setCurrentId={setCurrentId} post={post}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps)(Posts);