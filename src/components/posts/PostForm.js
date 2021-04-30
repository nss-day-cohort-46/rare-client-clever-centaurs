import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { PostContext } from "./PostProvider.js"
import { CategoryContext } from "../categories/CategoryProvider.js"


export const PostForm = () => {
    const { getPosts, getPostById, addPost, updatePost } = useContext(PostContext)
    const { categories, getCategories } = useContext(CategoryContext)
    const currentUser = parseInt(localStorage.getItem("rare_user_id"))

    const [post, setPost] = useState({
        user_id: 0,
        category_id: 0,
        title: "",
        publication_date: "",
        content: ""
    });

    const [isLoading, setIsLoading] = useState(true);
    const { postId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.id] = event.target.value
        setPost(newPost)
    }

    const handleSavePost = () => {
        // if (parseInt(post.category_id) === 0) {
        //     window.alert("Please select a category")
        // } else {
        setIsLoading(true);
        if (postId) {
            updatePost({
                id: post.id,
                user_id: parseInt(post.user_id),
                category_id: parseInt(post.category_id),
                title: post.title,
                publication_date: post.publication_date,
                content: post.content
            })
                .then(() => history.push(`/posts/details/${post.id}`))
        } else {
            addPost({
                user_id: currentUser,
                category_id: parseInt(post.category_id),
                title: post.title,
                publication_date: post.publication_date,
                content: post.content
            })
                .then(() => history.push("/posts"))
        }
        // }
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        if (postId) {
            getPostById(postId)
                .then(post => {
                    setPost(post)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [postId])

    return (
        <form className="postForm">
            {/* title of form depends on if there is an postId in URL. If yes, Edit
            If no, Add. */}
            <h2>{postId ? "Edit Post" : "Add Post"}</h2>

            {/* Select category */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Category: </label>
                    <select value={post.category_id} id="category_id" className="form-control" onChange={handleControlledInputChange}>
                        <option value="0">Select a category</option>
                        {/* map thru categories array */}
                        {categories.map(c => (
                            // for each category, create an option HTML element
                            <option key={c.id} value={c.id}>
                                {/* name of category as input */}
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            {/* Date input */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postDate">Date: </label>
                    <input type="date" id="publication_date" required autoFocus className="form-control"
                        // event handler, when input value is changed, update API
                        onChange={handleControlledInputChange}
                        value={post.publication_date} />
                </div>
            </fieldset>

            {/* Title input */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postTitle">Post Title: </label>
                    <input type="text" id="title" required autoFocus className="form-control"
                        placeholder="Write Title Here"
                        // event handler, when input value is changed, update API
                        onChange={handleControlledInputChange}
                        value={post.title} />
                </div>
            </fieldset>

            {/* Content input */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postContentInput"> </label>
                    <textarea type="text" id="content" required autoFocus className="form-control"
                        placeholder="Write Post Here "
                        // event handler, when input value is changed, update API
                        onChange={handleControlledInputChange}
                        value={post.content} />
                </div>
            </fieldset>

            {/* Save or Edit Button */}
            <button
                // disabled disables button click when isLoading is true
                disabled={isLoading}
                // event handler that saves post to API, either add or edit depending..
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handleSavePost()
                }}>
                {/* if there is a post id in the URL, Save button will display. 
                If not, Add button displays */}
                {postId ? "Save Post" : "Add Post"}
            </button>
        </form>
    )
}
