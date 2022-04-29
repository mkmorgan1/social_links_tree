import React from 'react'
import LinkBox from './Components/LinkBox.jsx'
import data from './data.js'

const App = () => {
      return (
        <>
          <div className='link-box'>
            <h1 className='title'>{data.title}</h1>
            <LinkBox links={data.links}/>
          </div>
        </>
      )
}

export default App
