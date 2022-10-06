// importing react 
const React = require('react')
// importing a basic layout for the applicatioon
const Layout = require('./Layouts/layout')

// defining basic structure of 'show' page based on react framework
class Show extends React.Component {

    render() {
        // variable allowing access to the selected map data
        let { map } = this.props

        // function buyMap(){}
        return (
            <Layout title={`${map._id}`}>

                <header id='header'>
                    {/* header to display basic map properties */}
                <h1>{`${map.city} in ${map.year}`}</h1>
                </header>
                <div id='show-image'>
                    {/* accesing image for display */}
                    <img src={`${map.path}`} alt="no image available" id='edit-image'/>
                    <br />
                    
                    <div>
                        {/* display map properties relevant to inventory  */}
                        This map costs: {`${map.price}`} and there are {`${map.quantity}`} in stock.  
                        <br />   
                        {/* ternary to conditionally display 'buy' link based on availability */}
                        <b>{map.quantity == 0 ? <span id='out'>OUT OF STOCK</span> : 
                        // <form action="">
                        // link to buy functionality, currently not working
                        <a href={`/products/${map._id}`}>
                        Buy this map!
                        </a>
                        // </form>
                        }</b>
                    </div>
                    {/* <br /> */}
                </div>
              
                {/* <button > */}
                      {/* link to edit product data */}
                    <a href={`/products/${map._id}/edit`}>Edit Map Data</a>
                {/* </button> */}
              
                <form action={`/products/${map._id}?_method=DELETE`} method='POST'>
                    <input type="submit" value="DELETE PRODUCT" />
                </form>

                <nav>
                    {/* navigates back to index page */}
                    <a href="/products">Back to the Map Index</a>
                </nav>
            </Layout>
        )
    }
}
// exporting 'show' page layout
module.exports = Show