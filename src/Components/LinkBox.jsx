import React from 'react'
import Link from './Link.jsx'

const LinkBox = ({links}) => {
  return(
    <>
      {links.map((link) => {
        return <Link url={link.url} icon={link.icon} name={link.name}/>
      })}
    </>
  )
}

export default LinkBox
