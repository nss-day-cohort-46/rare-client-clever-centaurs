import React, { useState, useContext, useEffect } from "react"
import { PostContext } from "./PostProvider"
import Post from "./PostCard"
import { userStorageKey } from "../auth/AuthProvider"

export const UserPostList = ({ history }) => {
    const { getPostsByUserId, posts } = useContext(PostContext)

    let currentUser = parseInt(localStorage.getItem(userStorageKey))

    useEffect(() => {
        getPostsByUserId(currentUser)
    }, [])


    return (
        <div>
            <h1>test</h1>
            <div className="posts">
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    )
}
