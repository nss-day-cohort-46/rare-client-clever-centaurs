import React, {useContext, useEffect, useState} from 'react'
import { TagContext } from './TagProvider'
import { Tag } from './Tag'

export const TagList = ({props}) => {
    const { tags, getTags} = useContext(TagContext)

    useEffect(() => {
        getTags()
        
    }, [])
    
    

    return (
        <>
            <section className="tags">
                <div>
                    {
                        tags.map( t => {
                            return <Tag key={t.id} tag={t} />
                        } )
                    }
                </div>
            </section>
        </>
    )
}