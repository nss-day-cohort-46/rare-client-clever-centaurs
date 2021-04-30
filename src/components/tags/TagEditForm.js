import React, { useContext, useRef, useEffect,useState } from "react"
import {TagContext} from "./TagProvider"
import { Route,useHistory } from "react-router-dom"
import "./Tag.css"

export const TagEditForm = (props) =>{
    const{tags,getTags,updateTag} = useContext(TagContext)
  
    const[Tag,setTag] = useState({})

    const editMode = props.match.params.hasOwnProperty("tagId")

const handleControlledInputChange = (event) => {
    const newTag = Object.assign({}, Tag)
    newTag[event.target.name] = event.target.value
    setTag(newTag)
    }

    const getTagInEditMode = () => {
        if (editMode){
        const tagId = parseInt(props.match.params.tagId)
        const selectedTag = tags.find(t => t.id === tagId) || {}
        console.log(tagId)
        setTag(selectedTag)}
    }
    useEffect(() =>{
        getTags()
    },[])
    // console.log(Category)
    
    useEffect(() =>{
        getTagInEditMode()
    },[tags])

    const history = useHistory()
const constructNewTag = () => {
    const tagId = parseInt(props.match.params.tagId)
    // console.log(categoryId)
    if(tagId === 0){
        window.alert("please select a Label" )
    }else{
        if (editMode){
        updateTag({
            id: Tag.id,
            label:Tag.label
        })
        .then(() => history.push("/tags"))}
    }}

return (
    <form className ="TagForm">
    <h2 className="userForm__title">Update Tag</h2>
    <fieldset>
            <div className="form-group">
                <label htmlFor="tagName">Tag label: </label>
                <input type="text" name="label" id="tagName" required autoFocus className="form-control"
                placeholder="Tag label" value={Tag.label} onChange={handleControlledInputChange}  />
            </div>
    </fieldset>

    <section className="button">
        <button type="submit" className="button" 
            onClick={evt => {
                evt.preventDefault() // Prevent browser from submitting the form
                constructNewTag()
            }}
            className="btn btn-primary">
            Save Category
        </button>

        <button type="submit" className="button" 
            onClick={() =>
                    history.push("/tags")}>
            Cancel
        </button>    
    </section>
    </form>
)}
