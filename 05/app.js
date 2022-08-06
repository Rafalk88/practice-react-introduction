import React from 'react'
import ReactDOM from 'react-dom'

import Nav from './src/components/Nav'

const div = document.createElement('div')
div.setAttribute('id', 'root')
document.body.appendChild(div)

ReactDOM.render(

    <Nav />,
    document.querySelector('#root')

)