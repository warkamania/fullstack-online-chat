import classNames from 'classnames'
import React from 'react'
import "../DialogItem/DialogItem.scss"

const DialogItems = ({user,message}) => {
    return (
      <div className = "dialog__items">
          <div className="dialog__items-avatar">
            <img src={user.avatar} alt={`${user.fullname} avatar`} />
            <div className = "dialog__items-info">
                <div className = "dialog__items-info-top">

                </div>
            </div>
          </div>

      </div>
    )
}



export default DialogItems
 