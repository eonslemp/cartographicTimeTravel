// const React = require('react')
// const Layout = require('../Layouts/layout')

// class Show extends React.Component {

//     render() {

//         const { name, type, _id } = this.props.map

//         return (
//             <Layout title={`${name} details`} >
//                 <h1>{`${}`}</h1>
//                 <p>
//                     The {name} is {type}
//                 </p>
//                 <button>
//                 <a href={`/meats/${_id}/edit`}>Edit</a>
//                 </button>
//                 <form action={`/meats/${_id}?_method=DELETE`} method='POST'>
//                     <input type="submit" value="DELETE" />
//                 </form>

//                 <nav>
//                     <a href="/products">Back to the Maps</a>
//                 </nav>
//             </Layout>
//         )
//     }
// }

// module.exports = meatShow