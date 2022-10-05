const React = require('react')

const Layout = require('./Layouts/layout')

class Edit extends React.Component {
    render() {
        const { map } = this.props
        // let { vegetable } = this.props
        return (    
            <Layout title="Map Edit Page" >
                <header id='header'>
                <h1>Edit Map Data</h1>
                </header>
                <form action={`/products/${map._id}?_method=PUT`} method="POST">
            
                    <label htmlFor="country">Country: </label>
                    <input type="text" id="country" name="country" defaultValue={map.country}/>

                    <br />

                    <label htmlFor="city">City: </label>
                    <input type="text" id="city" name="city" defaultValue={map.city}/>

                    <br />

                    <label htmlFor="year">Year: </label>
                    <input type="text" id="year" name="year" defaultValue={map.year}/>

                    <br />

                    <label htmlFor="path">Path: </label>
                    <input type="text" id="path" name="path" defaultValue={map.path}/>

                    <br />

                    <label htmlFor="illustrator">Illustrator: </label>
                    <input type="text" id="illustrator" name="illustrator" defaultValue={map.illustrator}/>

                    <br />

                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" id="quantity" name="quantity" defaultValue={map.quantity}/>

                    <br />

                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" name="price" defaultValue={map.price}/>
                    
                    <br />
                    <input type="submit" value="Edit Data"/>
                    <img src={map.path} alt="no image" id='edit-image' />
                </form>
                <nav>
                    <a href="/products">Back to the Map Index</a>
                </nav>
            </Layout>
        )
    }
}

module.exports = Edit