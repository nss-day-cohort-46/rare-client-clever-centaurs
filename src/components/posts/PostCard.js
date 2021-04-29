import React from "react"
// import "./Posts.css"
// import { Link } from "react-router-dom"

const Post = ({ post }) => (
    <section className="post">
        <h3 className="post__name">
            {/* <Link to={`/posts/${post.id}`}> */}
                { post.name }
            {/* </Link> */}
        </h3>
        <div className="post__content">{ post.content }</div>
        <div className="post__category">{ post.categoryId }</div>
        <div className="post__user">{ post.userId }</div>
        <button className="post__detail__button">Details</button>
    </section>
)
export default Post