import React from 'react';
import './NFError.css';

//Todo add a cool and QuIRkY page for this

// page to handle 404 errors
export default function NfError() {
    return (
        <div className="NfError">
            <div className="maintext">
                <h1>404 Error</h1>
                <p>Page Not Found</p>
            </div>
        </div>
    );
}