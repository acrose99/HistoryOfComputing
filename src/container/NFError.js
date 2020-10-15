import React from 'react';
import './NFError.css';
import error from '../images/404Error.png'

//Todo add a cool and QuIRkY page for this

// page to handle 404 errors
export default function NfError() {
    return (
        <div style={{ backgroundImage:`url(${error})` }} className="NfError">
            {/*<h1>Hello</h1>*/}
        </div>
    );
}