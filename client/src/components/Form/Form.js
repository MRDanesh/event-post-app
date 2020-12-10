import React, {useEffect, useState} from 'react';
import FileBase from 'react-file-base64';
import {connect} from 'react-redux';

import {TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';
import {createPost, updatePost} from '../../actions/posts';

const Form = ({createPost, updatePost, currentId, setCurrentId, posts}) => {
    const classes = useStyles();
    const [postData, setPostData] = useState ({
        creator: '', 
        title: '', 
        message: '', 
        tags: '', 
        selectedFile: ''
    });
    
    const post = (posts) => currentId ? posts.find((p)=> p._id === currentId) : null;


    const handleSubmit = (event) => {
        event.preventDefault();
        if (currentId){
            updatePost(currentId, postData);
        } else {
            createPost(postData);
        }
    };

    useEffect(()=>{
        if(post(posts)){
            setPostData(post(posts)); 
        }   
    }, [post(posts)]);

    const clear = () => {

    };

    return (
        <Paper className={classes.paper}>
            <form 
                autoComplete="off" 
                noValidate 
                className={classes.form} 
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">
                    Creating a Memory
                </Typography>
                <TextField 
                    name="creator" 
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({...postData, creator: e.target.value})}
                />
                <TextField 
                    name="title" 
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                />
                <TextField 
                    name="message" 
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({...postData, message: e.target.value})}
                />
                <TextField 
                    name="tags" 
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({...postData, tags: e.target.value})}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    type="submit"
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    fullWidth
                    onClick={clear}
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    };
};

export default connect(mapStateToProps, {createPost, updatePost})(Form);