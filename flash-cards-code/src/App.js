//import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import TitleBar from "./components/TitleBar/TitleBar.jsx";
import Collection from "./components/collection/collection.jsx";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collections: [],
      collectionNumber: 0,
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
        })
    }

    nextCollection(props){
      let tempCollectionNumber = this.state.collectionNumber;
      tempCollectionNumber++
      if(tempCollectionNumber === this.collections.length){
          tempCollectionNumber = 0;
      }
      this.setState({
          collectionNumber: tempCollectionNumber
      });
  }

  previousCollection(props){
    let tempCollectionNumber = this.state.collectionNumber;
    tempCollectionNumber--
    if(tempCollectionNumber < 0){
        tempCollectionNumber = this.collections.length -1;
    }
    this.setState({
        collectionNumber: tempCollectionNumber
    });
}


    render(){
      console.log('collections: ', this.state.collections[this.state.collectionNumber])
      console.log('loading: ', this.state.loading)
      return(this.state.loading ? <h1>Loading...</h1> :
        <div>
            <TitleBar/>
            <Collection collections = {this.collections} previousCollection={()=> this.previousCollection()} nextCollection={()=> this.nextCollection()} collection={this.state.collections[this.state.collectionNumber]} />
        </div>
      )

    }


} 
export default App;
