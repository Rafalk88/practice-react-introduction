import React from 'react'
import ReactDOM from 'react-dom'

import MenuItem from './src/components/Menu'

ReactDOM.render(

    <ul className='nav_menu'>
        <MenuItem className='nav_menu__li' text='kontakt' url='./contact' />
    </ul>,
    document.querySelector('#root')

)