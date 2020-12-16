import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './editor.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function renderTableData(props) {
    let currentCollection = [] 
    currentCollection = props.collection;
    return(
        currentCollection.cards.map((collection, index)=>{
            const {id, word, definition} = collection
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



function newFlashCardSubmit(props){

    return(
       
        <Form onSubmit={props.handleThatFlashCardSubmit()}>
            <input type = "text" name = 'word' placeholder='New Word' onChange={props.handleThatChange()}/>
            <input type = "text" name = 'definition' placeholder='New Definition' onChange={props.handleThatChange()}/>
            <Button type='submit'>Submit</Button>
        </Form>

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
                    <Table variant="dark" id='collection'> 
                        <thead>
                            <tr>
                                <th>Word</th>
                                <th>Definition</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData(props)}
                            
                        </tbody>
                    </Table>
                </div>
                <div className = 'col-md-2'><Button onClick={()=>props.nextCollection()} >Next Collection</Button></div>
            </div>
            <Row>
                <Col className="col-md-2"></Col>
                <Col>
                    {newFlashCardSubmit(props)}
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className='col-md-2'></Col>
                <Col>
                    <Form onSubmit={props.handleThatCollectionSubmit()}>
                        <input type='text' name='newCollection' placeholder='New Collection Name' onChange={props.handleThatChange()}/>
                        <Button type='submit'>Add Collection</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            
            <Button onClick={()=> props.viewCollections()}>View Collections</Button>
        </div>
    );
}


export default BuildEditor;
