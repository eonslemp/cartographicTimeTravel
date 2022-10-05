const React = require('react')
const Layout = require('./Layouts/layout')


class Index extends React.Component {

    render() {
        const { maps } = this.props
        return (
            <Layout>
                <body>
                <header>
                 <h1 id='index-title'>Cartographic Time Travel</h1>
                 </header>
                
                    <ul id='map-index'>
                    {maps.map((map) => {
                        return (
                            <li key={map._id} id='items'>
                                {console.log(map.path)}
                                <div>
                                A map of {` ${map.city}, ${map.country}`} in the year {`${map.year}`}  
                                <img src=''  alt="image not available" />
                                </div>
                                
                            </li>
                        )

                    })}

                    </ul>

                </body>
                 <nav>
                    <a href="/products/new">Add a map to inventory</a>
                </nav>

            </Layout>
        )
    }
}

module.exports = Index;