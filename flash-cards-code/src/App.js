//import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar/Navbar.js";
import Collection from "./components/collection/collection.jsx";
import CreateFlashCard from './components/flashCardCreator/flashCardCreator';
import BuildEditor from './components/editor/editor';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collections: [],
      collectionNumber: 0,
      flashCardNumber: 0,
      loading: true,
      lookingAtFlashcards: false,
      lookingAtFront: true,
      lookingAtEditor: false,
      lookingAtCollections: true,
      word: '',
      definition: '',
      newCollection: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitFlashCard = this.handleSubmitFlashCard.bind(this);
    this.handleSubmitCollection = this.handleSubmitCollection.bind(this);
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
        })
    }

    handleChange(event){
      
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});

    }

    handleSubmitFlashCard(event){

      event.preventDefault();

      console.log('colleciton _id: ', this.state.collections[this.state.collectionNumber]._id)

      const flashCard = {
        word: this.state.word,
        definition: this.state.definition
      }

      let apiURL= 'http://localhost:5000/api/collections/' + this.state.collections[this.state.collectionNumber]._id + '/cards/';

      axios.post(apiURL, flashCard).then(res => {
        console.log(res);
        console.log(res.data);
      })

      axios.get(`http://localhost:5000/api/collections`)  // need to change the connection string
        .then(res => {
            const collections = res.data;
            this.setState({
                collections: collections,
                loading: false
            });
        })

    }

    handleSubmitCollection(event){

      event.preventDefault();

      const collection = {
        title: this.state.newCollection,
      }

      let apiURL= 'http://localhost:5000/api/collections/';

      axios.post(apiURL, collection).then(res => {
        console.log(res);
        console.log(res.data);
      })

      axios.get(`http://localhost:5000/api/collections`)  // need to change the connection string
        .then(res => {
            const collections = res.data;
            this.setState({
                collections: collections,
                loading: false
            });
        })

    }

  

    
   goToNextCollection(){
      let tempCollectionNumber = this.state.collectionNumber;
      let collectionLength = this.state.collections.length;
      tempCollectionNumber++
      if(tempCollectionNumber === collectionLength){
          tempCollectionNumber = 0;
      }
      this.setState({
          collectionNumber: tempCollectionNumber
      });
  }

  goToNextFlashCard(){
    
    let tempFlashCard = this.state.flashCardNumber;
    let collectionLength = this.state.collections[this.state.collectionNumber].cards.length;
    tempFlashCard++
    if(tempFlashCard === collectionLength){
        tempFlashCard = 0;
    }

    this.setState({
      flashCardNumber: tempFlashCard,
      lookingAtFront: true
    })
}

    goToPreviousCollection(){
      let tempCollectionNumber = this.state.collectionNumber;
      let collectionLength = this.state.collections.length;
      tempCollectionNumber--
      if(tempCollectionNumber < 0){
          tempCollectionNumber = collectionLength -1;
      }
      this.setState({
          collectionNumber: tempCollectionNumber
      });
    }

    goToPreviousFlashCard(){
      let tempFlashCard = this.state.flashCardNumber;
      let collectionLength = this.state.collections[this.state.collectionNumber].cards.length;
      tempFlashCard--
      if(tempFlashCard < 0){
          tempFlashCard = collectionLength -1;
      }
      this.setState({
          flashCardNumber: tempFlashCard,
          lookingAtFront: true
      });
    }

    viewingFlashCards(){
      this.setState({
        lookingAtFlashcards: true,
        lookingAtCollections: false, 
        lookingAtEditor: false
      })
    }
    
    viewingCollections(){
      this.setState({
        lookingAtCollections: true,
        lookingAtFlashcards: false, 
        lookingAtFront: true,
        lookingAtEditor: false
      })
    }

    flipCard(){
      if(this.state.lookingAtFront === true){
        this.setState({
          lookingAtFront: false
        })
      } else if (this.state.lookingAtFront === false){
        this.setState({
          lookingAtFront: true
        })
      }
    }

    toggleEditor(){
      if(this.state.lookingAtEditor === false){
        this.setState({
          lookingAtEditor: true,
          lookingAtCollections: false,
          lookingAtFlashcards: false
        })
      } else if (this.state.lookingAtEditor === true){
        this.setState({
          lookingAtEditor: false
        })
      }
    }


    render(){
      console.log('collections: ', this.state.collections)
      console.log('Collection Number: ', this.state.collectionNumber)
      console.log('Flash Card Number: ', this.state.flashCardNumber)
      console.log('loading: ', this.state.loading)
      console.log('looking At Collections: ', this.state.lookingAtCollections)
      console.log('viewing flash cards: ', this.state.lookingAtFlashcards)
      console.log('viewing Editor: ', this.state.lookingAtEditor)
      console.log('new Word: ', this.state.word)
      console.log('new Definition', this.state.definition)
      console.log('new Collection: ', this.state.newCollection)
     
      console.log('---------------------------------')
      
      if (this.state.lookingAtEditor === true){ //EDITOR

        return(this.state.loading ? <h1>Loading...</h1> :
        
  
          <div>
              <Navbar />
              <BuildEditor 
              collections = {this.collections} 
              collection={this.state.collections[this.state.collectionNumber]} 
              nextCollection={()=> this.goToNextCollection()} 
              previousCollection={()=> this.goToPreviousCollection()} viewing={this.state.lookingAtFlashcards} 
              viewFlashCards={() =>this.viewingFlashCards()}
              viewCollections={()=> this.viewingCollections()} 
              handleThatChange={()=> this.handleChange}
              handleThatFlashCardSubmit={()=>this.handleSubmitFlashCard}
              handleThatCollectionSubmit={()=>this.handleSubmitCollection}
              />
          </div>
        )}
      
      if (this.state.lookingAtFlashcards === false && this.state.lookingAtCollections === true && this.state.lookingAtEditor === false){
        //COLLECTIONS
      return(this.state.loading ? <h1>Loading...</h1> :
      

        <div>
            <Navbar />
            <Collection 
            collections = {this.collections} 
            collection={this.state.collections[this.state.collectionNumber]} 
            nextCollection={()=> this.goToNextCollection()} 
            previousCollection={()=> this.goToPreviousCollection()} viewing={this.state.lookingAtFlashcards} 
            viewFlashCards={() =>this.viewingFlashCards()}
            viewEditor={()=> this.toggleEditor()} />
        </div>
      )} else if(this.state.lookingAtFlashcards === true && this.state.lookingAtCollections === false && this.state.lookingAtEditor === false){
        //FLASHCARDS
        return(this.state.loading ? <h1>Loading...</h1> :
      

          <div>
              <Navbar />
              <CreateFlashCard
               collections = {this.collections} 
               collection={this.state.collections[this.state.collectionNumber]} 
               viewing={this.state.lookingAtFlashcards} 
               nextFlashCard={()=> this.goToNextFlashCard()}
               previousFlashCard={()=> this.goToPreviousFlashCard()}
               currentFlashCardNumber={this.state.flashCardNumber}
               viewCollections={() => this.viewingCollections()}
               flip = {()=>this.flipCard()}
               front={this.state.lookingAtFront}
               viewEditor={()=> this.toggleEditor()}
              />
              
          </div>
        )
      }

    }


} 
export default App;
