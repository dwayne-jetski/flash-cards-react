import React from 'react';
import { Button } from 'reactstrap';


function BuildEditor(props){

    return(
        <div>
            <h1>This is where the editor goes</h1>
            <Button onClick={()=> props.viewCollections()}>View Collections</Button>
        </div>
        
    );
}


export default BuildEditor;
