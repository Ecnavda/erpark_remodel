import React from 'react';
import { Link } from 'react-router-dom';

// Routes to other pages
import * as Routes from '../../constants/routes';

// Stylesheet
import './style.css';

const Navigation = () => ( 
    <nav>
        <ul>
            <li><Link to={Routes.HomePath}>Home</Link></li>
            <li><Link to={Routes.AboutPath}>About</Link></li>
            <li><Link to={Routes.PricingPath}>Pricing</Link></li>
            <li><Link to={Routes.CartPath}>Cart</Link></li>
        </ul>
    </nav>
);

export default Navigation;