import React from 'react'
import ReactDOM from 'react-dom'

import MenuItem from './../03/src/components/menu'

class Menu extends React.Component {

    render() {
        
        return (

            <ul className={this.props.className}>
                <MenuItem className='nav_menu__li' text='home' url='/' />
                <MenuItem className='nav_menu__li' text='kontakt' url='/contact' />
            </ul>

        )
    
    }

}

class Nav extends React.Component {

    render() {

        return (

            <nav>
                <Menu className='nav_menu__ul'/>
            </nav>

        )

    }

}

ReactDOM.render(

    <Nav />,
    document.querySelector('#root')

)