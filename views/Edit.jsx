// import for react framework
const React = require('react')
// accesses layout functionality
const Layout = require('./Layouts/layout')

class Edit extends React.Component {
    render() {
        // map variable to access relevant product data
        const { map } = this.props
        return (    
            <Layout title="Map Edit Page" >
                <header id='header'>
                    {/* edit page header */}
                <h1>Edit Map Data</h1>
                </header>
                <form action={`/products/${map._id}?_method=PUT`} method="POST">
                    {/* input box for  country data*/}
                    <label htmlFor="country">Country: </label>
                    <input type="text" id="country" name="country" defaultValue={map.country}/>

                    <br />
                    {/* input box for city */}
                    <label htmlFor="city">City: </label>
                    <input type="text" id="city" name="city" defaultValue={map.city}/>

                    <br />
                    {/* input box for year data */}
                    <label htmlFor="year">Year: </label>
                    <input type="text" id="year" name="year" defaultValue={map.year}/>

                    <br />
                    {/* input box for image link*/}
                    <label htmlFor="path">Path: </label>
                    <input type="text" id="path" name="path" defaultValue={map.path}/>

                    <br />
                    {/* input box for illustrator data*/}
                    <label htmlFor="illustrator">Illustrator: </label>
                    <input type="text" id="illustrator" name="illustrator" defaultValue={map.illustrator}/>

                    <br />
                    {/* input box for quantity available*/}
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" id="quantity" name="quantity" defaultValue={map.quantity}/>

                    <br />
                    {/* input box for price data */}
                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" name="price" defaultValue={map.price}/>
                    
                    <br />
                    {/* submit edits button */}
                    <input type="submit" value="Edit Data"/>
                    {/* display image of map */}
                    <img src={map.path} alt="no image" id='edit-image' />
                </form>
                <nav>
                    {/* nav bar to return to index */}
                    <a href="/products">Back to the Map Index</a>
                </nav>
            </Layout>
        )
    }
}
// export for edit page setup
module.exports = Edit