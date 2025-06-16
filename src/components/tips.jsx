import React from 'react'
import cross from '../assets/Remove.png'


function Tips({children}) {
  return (
    <div className="tip-msg">
        <img src={cross} className='cross'/>
        {children}
      </div>
  )
}

export default Tips