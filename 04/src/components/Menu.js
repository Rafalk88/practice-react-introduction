import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './../../../03/src/components/MenuItem'

export class Menu extends React.Component {

    render() {
        
        return (

            <ul className={this.props.className}>
                <MenuItem className='nav_menu__li' text='home' url='/' />
                <MenuItem className='nav_menu__li' text='kontakt' url='/contact' />
            </ul>

        )
    
    }

}

Menu.propTypes = {

    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

}

export default Menu