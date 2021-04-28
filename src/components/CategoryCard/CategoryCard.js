import React from 'react';
import './CategoryCards.css';
const CategoryCard = (props) => {
    return(
        <div className = "cat-card">
            <h4>{props.categoryName}</h4>
        </div>
    );
};