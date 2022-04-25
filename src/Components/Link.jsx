import React from 'react'

const Link = ({icon, title, url}) => {
  return (
    <>
      <a href={url}>
        <div class="link">
        <i class={icon}></i>
          <span>&nbsp;{title}</span>
        </div>
      </a>
    </>
  )
}

export default Link