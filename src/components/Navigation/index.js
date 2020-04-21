import React from 'react';
import { Link } from 'react-router-dom';

// Routes to other pages
import * as Routes from '../../constants/routes';

// Stylesheet
import './style.css';

const Navigation = () => ( 
    <nav>
        <ul>
            <li><a href="#"><Link to={Routes.HomePath}>Home</Link></a></li>
            <li><a href="#"><Link to={Routes.AboutPath}>About</Link></a></li>
            <li><a href="#"><Link to={Routes.ProductsPath}>Products</Link></a></li>
            <li><a href="#"><Link to={Routes.CartPath}>Cart</Link></a></li>
        </ul>
    </nav>
);

export default Navigation;