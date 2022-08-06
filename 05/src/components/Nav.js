import React from 'react'
import PropTypes from 'prop-types'
import Menu from './../components/Menu'

export class Nav extends React.Component {

    render() {

        return (

            <nav>
                <Menu
                className='nav_menu__ul'
                items={[

                    {text: 'strona główna', url: '/'},
                    {text: 'www', url: '/www'}

                ]}/>
            </nav>

        )

    }

}

Menu.propTypes = {

    className: PropTypes.string,
    items: PropTypes.array.isRequired,

}

export default Nav