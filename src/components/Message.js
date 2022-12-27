import React from 'react';
import './Message.css'

const Message = ({ err, suc, msg }) => {
    return (
        <>
            {
                suc ? 
                <div className='message__box success'>
                    <div className='message'>{msg}</div>
                </div> : null
            }
            {
                err ?
                <div className='message__box error'>
                    <div className='message'>{msg}</div>
                </div> : null
            }
        </>
    )
}

export default Message