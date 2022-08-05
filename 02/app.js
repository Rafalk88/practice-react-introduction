import React from 'react'
import ReactDOM from 'react-dom'

// ----------------------- Function ----------------------------

const HeaderFn = () => <header>Moja pierwsza strona w React</header>

ReactDOM.render(

    <HeaderFn/>,
    document.querySelector('#root')

)

// -------------------- End of Function ------------------------

// ----------------------- ES2015 ------------------------------

class HeaderCl extends React.Component {

    render() {

        return <header>Moja pierwsza strona w React</header>

    }

}

ReactDOM.render(

    <HeaderCl/>,
    document.querySelector('#root')

)

// -------------------- End of ES2015 -------------------------