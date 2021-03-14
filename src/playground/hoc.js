// Higher Order Components (HOC) - A component that renders another component
// Reuse code
// render hijacking
// Abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <div><p>User is Authenticated</p>  <WrappedComponent {...props} /> </div>: <p> User is not authorised</p>}
           
        </div>
    )
}

//const AdminInfo = withAdminWarning(Info);
const AdminInfo = requireAuthentication(Info);

ReactDOM.render(<AdminInfo isAdmin={true} isAuthenticated={true} info="There are the details" />, document.getElementById('app'));