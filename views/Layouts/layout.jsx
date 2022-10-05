const React = require('react')

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                <link rel="stylesheet" href="/style.css" />
                </head>
                {/* <h1>
                    <a href='/products'> Our Maps </a>
                </h1> */}
                <br />
                <body>
                    <div>
                        <a href='/products'> Our Maps </a>
                     </div>
                    {/* <h1>
                        <a href='/products'> Our Maps </a>
                    </h1> */}

                    {this.props.children}
                    <br />
                </body>
            </html>
        )
    }
}

module.exports = Layout
