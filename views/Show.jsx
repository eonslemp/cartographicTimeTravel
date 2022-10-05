const React = require('react')
const Layout = require('./Layouts/layout')

class Show extends React.Component {

    render() {

        let { map } = this.props

        return (
            <Layout title={`${map._id}`} >
    
                <h1>{`${map.city} in ${map.year}`}</h1>
                <div>
                    <img src={`${map.path}`} alt="no image available" id='edit-image'/>
                    <br />
                    <p>
                        This map costs: {`${map.price}`} and there are {`${map.quantity}`} in stock.     
                        <button>Buy this map!</button>
                    </p>
                    <br />
                </div>

                <button >
                    <a href={`/products/${map._id}/edit`}>Edit Map</a>
                </button>
                <form action={`/products/${map._id}?_method=DELETE`} method='POST'>
                    <input type="submit" value="DELETE" />
                </form>

                <nav>
                    <a href="/products">Back to the Map Index</a>
                </nav>
            </Layout>
        )
    }
}

module.exports = Show