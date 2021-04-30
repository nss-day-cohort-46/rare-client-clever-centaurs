import React, { useState } from 'react'

export const TagContext = React.createContext()

export const TagProvider = (props) => {
    const [tags, setTags ] = useState([])
    
    const getTags = () => {

        return fetch("http://localhost:8088/tags")
        .then(res => res.json())
        
        .then(setTags)
    }

    const addTag = tag => {
        return fetch("http://localhost:8088/tags", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(tag)

        })
            .then(getTags)
    }
    const deleteTag = tagId=> {
        return fetch(`http://localhost:8088/tags/${tagId}`, {
            method: "DELETE"
        })
            .then(getTags)
    }

    const updateTag = tag =>{
        return fetch(`http://localhost:8088/tags/${tag.id}`,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tag)
        })
        .then(getTags)
    }

    return (
        <TagContext.Provider value={{
            tags, getTags, addTag, deleteTag, updateTag
        }}>
            {props.children}
        </TagContext.Provider>
    )
}
