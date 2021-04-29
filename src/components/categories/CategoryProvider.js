import React, { useState, createContext } from "react"

export const CategoryContext = createContext()

export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return fetch("http://localhost:8088/categories")
            .then(res => res.json())
            .then(setCategories)
    }

    const getCategoryById = (id) => {
        return fetch(`http://localhost:8088/categories/${id}`)
            .then(res => res.json())
    }


    return (
        <CategoryContext.Provider value={{
            categories, getCategories, getCategoryById
        }}>
            {props.children}
        </CategoryContext.Provider>
    )

}