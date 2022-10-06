
// this file is the setup for the main index page of the app
// importing react and basic layout functionality
const React = require('react')
const Layout = require('./Layouts/layout')

// defining structure of index page react object
class Index extends React.Component {

    render() {
        // variable for accessing map data
        const { maps } = this.props
        
        return (
            <Layout>
                <body>
                <header id='header'>
                    {/* index header display */}
                 <h1 id='index-title'>Cartographic Time Travel</h1>
                </header>
                <nav id='nav-index'>
                    {/* link to 'new' page for adding products to inventory */}
                    <a href="/products/new">Add a map to inventory</a>
                </nav>

                    <ul id='map-index'>
                    {/* takes product data from invetory and constructs a basic display 
                    of available maps*/}
                    {maps.map((map) => {
                        return (
                            <div key={map._id} id='index-image'>
                                {console.log(map.path)}
                                <div id='item'>
                                {` ${map.city}, ${map.country}`} in the year {`${map.year}`}  
                                <a href={`/products/${map._id}`}>
                                    <img src={`${map.path}`}  alt="image not available" id='images'/>
                                </a>
                                </div>
                                
                            </div>
                        )

                    })}

                    </ul>

                </body>
                 <nav id='nav-index'>
                    {/* another nav bar to add product to invventory */}
                    <a href="/products/new">Add a map to inventory</a>
                </nav>

            </Layout>
        )
    }
}
// export to allow access to index page set up
module.exports = Index;