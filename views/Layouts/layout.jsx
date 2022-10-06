// this file defines the basic layout for the pages of the app
// import react
const React = require('react')

class Layout extends React.Component {
    render() {
        return (
            <html id='layout'>
                <head>
                    {/* accesses the css for the pages */}
                <link rel="stylesheet" href="/style.css" />
                </head>
                <br />
                <body>
                    
                    {this.props.children}
                    <br />
                </body>
            </html>
        )
    }
}
// exports layout object
module.exports = Layout
