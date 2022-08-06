import React from 'react'
import PropTypes from 'prop-types'

export class MenuItem extends React.Component {

    render() {

        const {className, text, url} = this.props
        return (
            <li className={className}>
                <a href={url}>
                    {text}
                </a>
            </li>
        )

    }

}

MenuItem.propTypes = {

    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

}

export default MenuItem