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

    return (
        <PostContext.Provider value={{
            posts, getPostById, getPosts
        }}>
            {props.children}
        </PostContext.Provider>
    )
}
