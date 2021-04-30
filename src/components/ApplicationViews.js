import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./categories/CategoryList"
import { CategoryProvider } from "./categories/CategoryProvider"
import { PostForm } from "./posts/PostForm"
import { PostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"
import { UserPostList } from "./posts/UserPostList"
// import { PostCard } from "./posts/PostCard"
import { TagProvider } from './tags/TagProvider'
import { TagList } from './tags/TagList'
import { TagForm } from './tags/TagForm'
import { TagEditForm } from "./tags/TagEditForm"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>

            <PostProvider>
                <CategoryProvider>
                    <Route exact path="/posts">
                        <PostList />
                    </Route>
                    <Route exact path="/posts/create">
                        <PostForm />
                    </Route>
                    <Route exact path="/myPosts">
                        <UserPostList />
                    </Route>
                    <Route exact path="/categories">
                        <CategoryList />
                    </Route>
                </CategoryProvider>
            </PostProvider>


            <TagProvider>

                <Route exact path="/tags" render={

                    props => <TagForm {...props} />
                } />
                <Route exact path="/tags" render={
                    props => <TagList {...props} />
                } />
                <Route exact path="/editForm/:tagId(\d+)" render={
                    props => <TagEditForm {...props} />
                } />

            </TagProvider>
        </main>
    </>
}
