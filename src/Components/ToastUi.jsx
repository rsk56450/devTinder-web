import React from 'react'

const ToastUi = ({ message, type }) => {
   
    return (
        <div className="toast toast-center toast-middle">
            <div className="alert alert-success">
                <span>{message}</span>
            </div>
        </div>
    )
}

export default ToastUi;