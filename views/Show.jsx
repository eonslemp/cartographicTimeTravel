const React = require('react')
const Layout = require('../Layouts/layout')

class Show extends React.Component {

    render() {

        let { map } = this.props

        return (
            <Layout title={`${map._id}`} >
                <h1>{`${map.city} in ${map.year}`}</h1>
                <div>
                    <img src={`${map.path}`} alt="no image available" />
                    <p>This map costs: {`${map.price}`}</p>
                    {/* buy button */}
                </div>

                <button>
                <a href={`/products/${map._id}/edit`}>Edit Map</a>
                </button>
                <form action={`/products/${map._id}?_method=DELETE`} method='POST'>
                    <input type="submit" value="DELETE" />
                </form>

                <nav>
                    <a href="/products">Back</a>
                </nav>
            </Layout>
        )
    }
}

module.exports = Show