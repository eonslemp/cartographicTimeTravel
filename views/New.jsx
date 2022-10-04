const React = require('react')
const Layout = require('./Layouts/layout')

class New extends React.Component {
    render() {
        return (
            <Layout title="Add New Map" >
                <h1>Add a Map</h1>
                <br />
                <form action="/products" method="POST">

                    <label htmlFor="country">Country: </label>
                    <input type="text" id="country" name="country" />

                    <br />

                    <label htmlFor="city">City: </label>
                    <input type="text" id="city" name="city" />

                    <br />

                    <label htmlFor="image">Path to Image: </label>
                    <input type="text" id="img-path" name="image" />

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
            </Layout>
        )
    }
}

module.exports = New