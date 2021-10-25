import classNames from 'classnames'
import React from 'react'
import "../DialogItem/DialogItem.scss"

const DialogItem= ({children,className}) => {
    return (
       <div className={classNames("block",className)}>{children}</div>
    )
}



export default DialogItem
 