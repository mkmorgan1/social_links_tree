import React from 'react'
import Link from './Link.jsx'

console.log("+++++++++++++", typeof data)

const LinkBox = ({links}) => {
  return(
    <>
      {links.map((link) => {
        return <Link url={link.url} icon={link.icon} title={link.name}/>
      })}
    </>
  )
}

export default LinkBox
