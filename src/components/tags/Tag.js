import { useHistory } from "react-router"
import React, { useEffect, useContext } from 'react'
import { TagContext }  from "./TagProvider.js"

export const Tag = ({ tag }) => {
    const{getTags, deleteTag} = useContext(TagContext)
const history = useHistory()

useEffect(() =>{
    getTags()
},[])

    const DeleteTag = () => {
        let txt= window.confirm("Are you sure you want to delete")

        if(txt){
            deleteTag(tag.id)
            history.push(`/tags`)
          } else {
              
    
        }
    }
    return (<>
        <section className="tag">
            <div>
                <p>{tag.label}</p>
            </div>
            <button  variant="primary" size="sm" onClick={() => { 
         DeleteTag()  
     }}>delete</button>

     <button  variant="primary" size="sm" onClick={() => { 
         history.push(`/editForm/${tag.id}`)  
     }}>Edit</button>
        </section>
    </>
    )
}