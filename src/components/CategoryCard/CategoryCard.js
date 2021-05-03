import React from 'react';
import './CategoryCard.css';
const CategoryCard = (props) => {
    return(
        <div className = "cat-card">
            <p>{props.categoryName}</p>
        </div>
    );
};

export default CategoryCard;