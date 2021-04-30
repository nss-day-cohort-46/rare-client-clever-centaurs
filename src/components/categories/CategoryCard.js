import React, { useContext } from "react"
import { useHistory } from "react-router"
import { CategoryContext } from "./CategoryProvider"

export const CategoryCard = ({ category }) => {
    const { deleteCategory } = useContext(CategoryContext)
    const history = useHistory()

    const handleDelete = () => {
        deleteCategory(category.id)
            .then(() => {
                history.push("/categories")
            })
    }

    return (
        <section className="category">
            <div className="category_label">{category.label}</div>
            <button onClick={() => { history.push(`/categories/edit/${category.id}`) }}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </section>
    )
}
