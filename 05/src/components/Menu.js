import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './../../../03/src/components/MenuItem'

export const Menu = props => {

    const {className, items} = props

    const list = items.map(

        ({text, url}) => {

            return <MenuItem className='nav_menu__li' text={text} url={url}/>

        }

    )

    return (<ul className={className}>{list}</ul>)

}

Menu.propTypes = {

    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

}

export default Menu