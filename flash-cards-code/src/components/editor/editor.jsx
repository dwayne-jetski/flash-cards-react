import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './editor.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


function renderTableData(props) {
    let currentCollection = [] 
    currentCollection = props.collection;
    console.log('editor collection: ', props.collection);
    return(
        currentCollection.cards.map((collection, index)=>{
            const {id, word, definition} = collection
            console.log('word: ', word)
            console.log('definition: ', definition)
            return(
                <tr key={id}>
                        <td>{word}</td>
                        <td>{definition}</td>
                        <td><Button>Remove</Button></td>    
                </tr>
                
            )
        })
    )
}
function newFlashCardSubmit(){

    return(
        <tr>
            <td><input type = "text" placeholder = "new word"/></td>
            <td><input type = "text" placeholder = "new definition"/></td>
            <td><Button>Submit</Button></td>
        </tr>
    )

}


function BuildEditor(props){

    return(
         <div>
            <h1 id='title'>React Dynamic Table</h1>
            <h3>NOW EDITING COLLECTION: {props.collection.title.toUpperCase()}</h3>
            <div className="row">
                <div className='col-md-2'><Button onClick={()=>props.previousCollection()} >Previous Collection</Button></div>
                <div className='col-md-4'>
                    <Table id='collection'> 
                        <thead>
                            <tr>
                                <th>Word</th>
                                <th>Definition</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData(props)}
                            {newFlashCardSubmit(props)}
                        </tbody>
                    </Table>
                </div>
                <div className = 'col-md-2'><Button onClick={()=>props.nextCollection()} >Next Collection</Button></div>
            </div>
            <Button onClick={()=> props.viewCollections()}>View Collections</Button>
        </div>
    );
}


export default BuildEditor;
