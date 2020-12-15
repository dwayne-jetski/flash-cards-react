//import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar/Navbar.js";
import Collection from "./components/collection/collection.jsx";
import CreateFlashCard from './components/flashCardCreator/flashCardCreator'

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
    let collectionLength = this.state.collection[this.state.collectionNumber].length;
    tempFlashCard++
    if(tempFlashCard === collectionLength){
        tempFlashCard = 0;
    }
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

    viewingFlashCards(){
      this.setState({
        lookingAtFlashcards: true
      })
    }
    
    viewingCollections(){
      this.setState({
        lookingAtFlashcards: false
      })
    }


    render(){
      console.log('collections: ', this.state.collections[this.state.collectionNumber])
      console.log('loading: ', this.state.loading)
      console.log('viewing flash cards: ', this.state.lookingAtFlashcards)

      if (this.state.lookingAtFlashcards === false){

      return(this.state.loading ? <h1>Loading...</h1> :
      

        <div>
            <Navbar />
            {<Collection 
            collections = {this.collections} 
            collection={this.state.collections[this.state.collectionNumber]} 
            nextCollection={()=> this.goToNextCollection()} 
            previousCollection={()=> this.goToPreviousCollection()} viewing={this.state.lookingAtFlashcards} 
            viewFlashCards={() =>this.viewingFlashCards()} />}
        </div>
      )} else if(this.state.lookingAtFlashcards === true){
        return(this.state.loading ? <h1>Loading...</h1> :
      

          <div>
              <Navbar />
              <CreateFlashCard
               collections = {this.collections} 
               collection={this.state.collections[this.state.collectionNumber]} 
               viewing={this.state.lookingAtFlashcards} 
               viewCollections={() => this.viewingCollections()}
               front={this.state.lookingAtFront} flashCard={this.state.flashCardNumber}
              />
              
          </div>
        )
      }

    }


} 
export default App;
