import React from 'react'
import ReactDOM from 'react-dom'

const styleText = {

    fontFamily: 'sans-serif',
    fontSize: '26px',
    color: 'blue',
    backgroundColor: 'grey',

}

// ----------------------- Function ----------------------------

const HeaderFn = () => {

    return <header style= { styleText }>
        Moja pierwsza strona w React Fn
    </header>

}

ReactDOM.render(

    <HeaderFn/>,
    document.querySelector('#root')

)

// -------------------- End of Function ------------------------

// ----------------------- ES2015 ------------------------------

class HeaderCl extends React.Component {

    render() {

        return <header style= { styleText }>
            Moja pierwsza strona w React Cl
        </header>

    }

}

ReactDOM.render(

    <HeaderFn />,
    <HeaderCl/>,
    document.querySelector('#root')

)

// -------------------- End of ES2015 -------------------------