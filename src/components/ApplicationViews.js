import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"
import { UserPostList } from "./posts/UserPostList"
// import { PostCard } from "./posts/PostCard"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <PostProvider>
                <Route exact path="/posts"> 
                    <PostList />
                </Route>
            </PostProvider>
            <PostProvider>
                <Route exact path="/myPosts"> 
                    <UserPostList />
                </Route>
            </PostProvider>
        </main>
    </>
}
