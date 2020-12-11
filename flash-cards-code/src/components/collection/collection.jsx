import React from 'react';
import axios from 'axios';

    



function displayCollection(props){
    console.log(props.collection.title)
    return(
         <div>
             <div>
                 <h1>{props.collection.title}</h1>
             </div>
         </div>
    )
 }

 function Collection(props) {
    
    return(
        <div>
            <div>
                <button onClick={()=> props.previousCollection()}>Previous Collection</button>
            </div>
            <div>
                {displayCollection(props)} 
            </div>
            <div>
                <button onClick={()=> props.nextCollection()}>Next Collection</button>
            </div>
        </div>
    )
}


export default Collection

