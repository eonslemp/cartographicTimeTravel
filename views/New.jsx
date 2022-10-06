// this page defines basic structure for the page that allows input of data for new product
// imports for react and basic layout structure
const React = require('react')
const Layout = require('./Layouts/layout')

class New extends React.Component {
    render() {
        return (
            <Layout title="Add New Map" >

                <header id='header'>
                {/*title header for page  */}
                <h1>Add a Map</h1>
                </header>
                <br />
                <form action="/products" method="POST">
                    {/* input box new product country data*/}
                    <label htmlFor="country">Country: </label>
                    <input type="text" id="country" name="country" />

                    <br />
                    {/* input box new product city data*/}
                    <label htmlFor="city">City: </label>
                    <input type="text" id="city" name="city" />

                    <br />
                     {/* input box new product vintage*/}
                    <label htmlFor="year">Year: </label>
                    <input type="text" id="year" name="year" />

                    <br />
                    {/* input box new product image link*/}
                    <label htmlFor="path">Path: </label>
                    <input type="text" id="path" name="path" />

                    <br />
                    {/* input box for name of the illustrator */}
                    <label htmlFor="illustrator">Illustrator: </label>
                    <input type="text" id="illustrator" name="illustrator" />

                    <br />
                    {/* input box for in stock quantity */}
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" id="quantity" name="quantity" />

                    <br />
                    {/* input box for the products price */}
                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" name="price" />
                    
                    <br />
                    {/* submit toggle for the data */}
                    <input type="submit" value="Create Product"/>
                </form>
                <nav>
                    {/* navigates back to index page */}
                    <a href="/products">Back to the Map Index</a>
                </nav>
            </Layout>
        )
    }
}

module.exports = New