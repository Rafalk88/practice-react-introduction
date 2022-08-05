import React from 'react'

export class MenuItem extends React.Component {

    render() {

        return (
            <li className={this.props.className}>
                <a href={this.props.url}>
                    {this.props.text}
                </a>
            </li>
        )

    }

}

export default MenuItem