import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    console.log(post);
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.messsage});
    }
};

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    console.log (req.params);
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send ('No post with this id');
    } else {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});
        res.json(updatePost);
    }
};