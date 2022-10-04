const React = require('react')
const Layout = require('./Layouts/layout')


class Index extends React.Component {

    render() {
        const maps = 'X'
        return (
            <Layout>
                
                <body>
                
                </body>
                 <nav>
                    <a href="/products/new">Add a map to inventory</a>
                </nav>

            </Layout>
        )
    }
}

module.exports = Index;