import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = ({icon, name, url}) => {
  return (
    <>
      <a href={url}>
        <div className='link'>
        <FontAwesomeIcon icon={icon} />
          <span>&nbsp;{name}</span>
        </div>
      </a>
    </>
  )
}

export default Link