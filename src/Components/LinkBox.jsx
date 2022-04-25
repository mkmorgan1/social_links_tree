import React from 'react'
import Link from './Link.jsx'
import data from '../data.json'
data = Object.values(data)

console.log("+++++++++++++", typeof data)

const LinkBox = () => {
  return(
    <>
      {data.map((link) => {
        return <Link url={link.url} icon={link.icon} title={link.name}/>
      })}
    </>
  )
}

export default LinkBox
