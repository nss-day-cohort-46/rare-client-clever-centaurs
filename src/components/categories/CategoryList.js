import React, { useContext, useEffect } from "react"
// import { useHistory } from "react-router-dom"
import { CategoryCard } from "./CategoryCard"
import { CategoryContext } from "./CategoryProvider"

export const CategoryList = () => {
    const { categories, getCategories } = useContext(CategoryContext)

    // const history = useHistory()

    useEffect(() => {
        getCategories()
    }, [])


    return (
        <>
            <h2>Categories</h2>
            <button>New Category</button>
            <div className="categories">
                {categories.map(category => {
                    return <CategoryCard key={category.id} category={category} />
                })}
            </div>
        </>
    )
}