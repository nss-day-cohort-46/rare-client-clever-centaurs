import React from "react"

export const CategoryCard = ({ category }) => (
    <section className="category">
        <div className="category_label">{category.label}</div>
    </section>
)