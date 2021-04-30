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

    return (
        <TagContext.Provider value={{
            tags, getTags,addTag
        }}>
            {props.children}
        </TagContext.Provider>
    )
}
