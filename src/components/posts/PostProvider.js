import React, { useState } from "react"

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

    const updatePost = post => {
        return fetch (`http://localhost.8088/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(getPosts)
    }

    return (
        <PostContext.Provider value={{
            posts, getPostById, getPosts, updatePost
        }}>
            {props.children}
        </PostContext.Provider>
    )
}
