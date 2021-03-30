import React from 'react';
import './NFError.css';
import error from '../images/404Error.png'


// page to handle 404 errors
export default function NFError() {
    return (
        <div style={{ backgroundImage:`url(${error})` }} className="NfError">
            {/*<h1>Hello</h1>*/}
        </div>
    );
}
