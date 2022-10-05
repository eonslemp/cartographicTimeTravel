const React = require('react')
const Layout = require('./Layouts/layout')

class Show extends React.Component {

    render() {
        
        let { map } = this.props

        // function buyMap(){}
        return (
            <Layout title={`${map._id}`}>
                <header id='header'>
                <h1>{`${map.city} in ${map.year}`}</h1>
                </header>
                <div id='show-image'>
                    <img src={`${map.path}`} alt="no image available" id='edit-image'/>
                    <br />
                    
                    <div>
                        This map costs: {`${map.price}`} and there are {`${map.quantity}`} in stock.     
                        <b>{map.quantity == 0 ? <span id='out'>OUT OF STOCK</span> : 
                        <form action="">
                        <a href={`/products/${map._id}`}>
                        Buy this map!
                        </a>
                        </form>
                        }</b>
                   
                    </div>
                    <br />
                </div>
                <button >
                    <a href={`/products/${map._id}/edit`}>Edit Map Data</a>
                </button>
              
                <form action={`/products/${map._id}?_method=DELETE`} method='POST'>
                    <input type="submit" value="DELETE PRODUCT" />
                </form>
            

                <nav>
                    <a href="/products">Back to the Map Index</a>
                </nav>
            </Layout>
        )
    }
}

module.exports = Show