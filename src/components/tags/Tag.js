import React from 'react'

export const Tag = ({ tag }) => {

    return (<>
        <section className="tag">
            <div>
                <p>{tag.label}</p>
            </div>
        </section>
    </>
    )
}