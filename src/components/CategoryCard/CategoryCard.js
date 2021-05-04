import React from 'react';
import './CategoryCard.css';
const CategoryCard = (props) => {
    return(
        <button onClick = {props.click} className = "cat-card">
            {props.categoryName}
        </button>
    );
};

export default CategoryCard;