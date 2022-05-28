import React from 'react'
import Link from './Link.jsx'
import data from '../data.js'

const LinkBox = () => {
  return(
    <>
      <div className='link-box'>
        <h1 className='title'>{data.title}</h1>
        {data.links.map((link) => {
          return <Link key={link.name} url={link.url} icon={link.icon} name={link.name}/>
        })}
      </div>
    </>
  )
}

export default LinkBox
