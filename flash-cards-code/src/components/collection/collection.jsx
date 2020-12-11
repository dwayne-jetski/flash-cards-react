import React from 'react';
import axios from 'axios';



class Collection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        collections: [],
        loading: true,
        }
    }

    axios = require('axios').default;

    componentDidMount() {
        axios.get(`http://localhost:5000/api/collections`)  // need to change the connection string
        .then(res => {
            const collections = res.data;
            this.setState({
                collections: collections,
                loading: false
            });
            
            console.log(collections);
        })
    }

     outputCollectionData(filteredData){
     return ( this.state.loading  ? <tr><td>Loading...</td></tr> : 
        
         filteredData.map((index)=>{
             const {id, title} = this.state.collections
             return(
                 <tr key={id}>
                     <td>{title}</td>
                 </tr>
             )
         })

         )
     }
   
    
render() {
    return(
        this.outputCollectionData()
    )
}


}


export default Collection

