import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./categories/CategoryList"
import { CategoryProvider } from "./categories/CategoryProvider"
import { PostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"
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

            <CategoryProvider>
                <Route exact path="/categories">
                    <CategoryList />
                </Route>
            </CategoryProvider>
        </main>
    </>
}
