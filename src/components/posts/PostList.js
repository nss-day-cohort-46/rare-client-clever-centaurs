import React, { useState, useContext, useEffect } from "react"
import { PostContext } from "./PostProvider"
import Post from "./PostCard"
import { useHistory } from "react-router"

export const PostList = ({ history }) => {
    const { getPosts, posts } = useContext(PostContext)

    const historyRoute = useHistory()

    useEffect(() => {
        getPosts()
    }, [])


    return (
        <div>
            <h1>Posts</h1>
            <button onClick={() => historyRoute.push("/posts/create")}>Add A Post</button>
            <div className="posts">
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    )
}
