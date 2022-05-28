import React from 'react'
import { createRoot } from 'react-dom/client'
import LinkBox from './Components/LinkBox.jsx'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(<LinkBox />)
