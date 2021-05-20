import React from 'react';
import './Header.css';
const Header = (props) => {
    return(
        <div className = "head" onClick = {props.click}>
            <div className = "logo">
                <h1 className = "title" >QuizzMe</h1>
            </div>
        </div>
    );
};
export default Header;