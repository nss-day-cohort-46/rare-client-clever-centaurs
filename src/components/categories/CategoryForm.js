import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"


export const CategoryForm = () => {
    const { } = useContext()

    const [category, setCategory] = useState({
        label: ""
    });

    const [isLoading, setIsLoading] = useState(true);

    const { categoryId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newCategory = { ...category }
        newCategory[event.target.id] = event.target.value
        setCategory(newCategory)
    }

    const handleSaveCategory = () => {
        if (category.label === "") {
            window.alert("Please Enter Category Name")
        } else {
            setIsLoading(true);
            if (categoryId) {
                updateCategory({
                    id: category.id,
                    label: category.label
                })
                    .then(() => history.push("/categories"))
            } else {
                addCategory({
                    label: category.label
                })
                    .then(() => history.push("/categories"))
            }
        }
    }

    useEffect(() => {

    }, [])


    return (
        <form className="categoryForm">
            <h2 className="categoryForm__title">{categoryId ? "Edit Category" : "Add Category"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Category Name:</label>
                    <input type="text" id="label" autoFocus className="form-control" placeholder="Category" onChange={handleControlledInputChange} value={category.label} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleSaveCategory()
                }}>
                {categoryId ? "Save Category" : "Add Category"}
            </button>
        </form>
    )
}