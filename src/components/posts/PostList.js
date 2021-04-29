import React, { useContext, useEffect } from "react"
import { PostContext } from "./PostProvider"
import Post from "./PostCard"

export const PostList = ({ history }) => {
    const { getPosts, posts } = useContext(PostContext)

    useEffect(() => {
        getPosts()
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
