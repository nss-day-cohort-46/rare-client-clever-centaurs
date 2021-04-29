import React, { createContext, useState } from "react"

export const PostContext = React.createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])


    const getPosts = () => {
        return fetch("http://localhost:8088/posts")
        .then(res => res.json())
        .then(setPosts)
    }

    const getPostById = (id) => {
        return fetch(`http://localhost:8088/posts/${id}`)
            .then(res => res.json())
    }
    const getPostsByUserId = (user_id) => {
        return fetch(`http://localhost:8088/posts?user_id=${user_id}`)
            .then(res => res.json())
            .then(setPosts)
    }

    return (
        <PostContext.Provider value={{
            posts, getPostById, getPosts, getPostsByUserId
        }}>
            {props.children}
        </PostContext.Provider>
    )
}
