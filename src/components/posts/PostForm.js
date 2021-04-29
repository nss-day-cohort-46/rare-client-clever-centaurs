import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { PostContext } from "./PostProvider"


export const PostForm = () => {
    const { updatePost } = useContext(PostContext)

    const [post, setPost] = useState({
        user_id: 0,
        category_id: 0,
        title: "",
        publication_date: Date,
        content: ""
    });

    const [isLoading, setIsLoading] = useState(true);
    const {postId} = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.id] = event.target.value
        setPost(newPost)
    }

    const handleSavePost = () => {
        if (parseInt(post.))
    }
}