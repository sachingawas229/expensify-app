import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div className="container">
        <p>Page not found</p>
        <h1>404</h1>
        <Link to="/">Back to home</Link>
    </div>
);

export default NotFoundPage;