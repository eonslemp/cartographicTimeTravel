const React = require('react')
const Layout = require('./Layouts/layout')

class New extends React.Component {
    render() {
        return (
            <Layout title="Add New Map" >
                <header id='header'>
                <h1>Add a Map</h1>
                </header>
                <br />
                <form action="/products" method="POST">

                    <label htmlFor="country">Country: </label>
                    <input type="text" id="country" name="country" />

                    <br />

                    <label htmlFor="city">City: </label>
                    <input type="text" id="city" name="city" />

                    <br />

                    <label htmlFor="year">Year: </label>
                    <input type="text" id="year" name="year" />

                    <br />

                    <label htmlFor="path">Path: </label>
                    <input type="text" id="path" name="path" />

                    <br />

                    <label htmlFor="illustrator">Illustrator: </label>
                    <input type="text" id="illustrator" name="illustrator" />

                    <br />

                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" id="quantity" name="quantity" />

                    <br />

                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" name="price" />
                    
                    <br />

                    <input type="submit" value="Create Product"/>
                </form>
                <nav>
                    <a href="/products">Back to the Map Index</a>
                </nav>
            </Layout>
        )
    }
}

module.exports = New