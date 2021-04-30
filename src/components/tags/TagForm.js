import React, { useContext, useRef, useEffect } from "react"
import { TagContext } from './TagProvider'

export const TagForm = (props) => {

    const { addTag, getTags } = useContext(TagContext)

    const label = useRef(null)

    useEffect(() => {

        getTags()

    }, [])


    const constructNewTag = () => {

        const tagName = label.current.value
        if (tagName === "") {
            window.alert("Please enter a label")
        } else {
            return addTag(
                {
                    label: tagName
                }
            )
        }
    }

    return (
        <form className="tagForm">
            <h2 className="tagForm__title">New Tag</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="tagName">Tag name: </label>
                    <input type="text" id="tagName" ref={label} required autoFocus className="form-control" placeholder="tag name" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewTag(props).then(() => {
                        label.current.value = ""

                    }).then(getTags)
                }}
                className="btn btn-primary">
                Save Tag
        </button>
        </form>
    )
}