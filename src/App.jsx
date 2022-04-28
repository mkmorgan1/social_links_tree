import React from 'react'
import LinkBox from './Components/LinkBox.jsx'
import data from './data.json'


const App = () => {
      return (
        <>
          <div class="link-box">
            <h1 class="Title">{data.title}</h1>
            <LinkBox links={data.links}/>
          </div>
        </>
      )
}

export default App
