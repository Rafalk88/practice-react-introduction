import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './../../../03/src/components/MenuItem'

export const Menu = props => {

    const {className, items} = props

    const arr = items.map(

        item => {

            const {text, url} = item
            return <MenuItem className='nav_menu__li' text={text} url={url}/>

        }

    )

    return (<ul className={className}>{arr}</ul>)

}

Menu.propTypes = {

    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

}

export default Menu