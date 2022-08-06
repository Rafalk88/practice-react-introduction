import React from 'react'
import PropTypes from 'prop-types'
import Menu from './../components/Menu'

export class Nav extends React.Component {

    render() {

        return (

            <nav>
                <Menu className='nav_menu__ul'/>
            </nav>

        )

    }

}

Menu.propTypes = {

    className: PropTypes.string,

}

export default Nav