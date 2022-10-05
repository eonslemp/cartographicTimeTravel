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
                            <li key={map._id}>
                                {console.log(map.path)}
                                <div id='item'>
                                A map of {` ${map.city}, ${map.country}`} in the year {`${map.year}`}  
                                <a href={`/products/${map._id}`}>
                                    <img src={`${map.path}`}  alt="image not available" id='images'/>
                                </a>
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