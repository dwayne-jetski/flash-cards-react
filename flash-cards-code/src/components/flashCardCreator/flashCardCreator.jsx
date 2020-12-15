import React from 'react';
import { Button } from 'reactstrap';



function CreateFlashCard(props){

    console.log('FCC Flash Card', props.collection.cards[props.currentFlashCardNumber])

    if(props.front === true){
        return(
          <div class="container-fluid"><h1>What makes you S.P.E.C.I.A.L?<span>(Click card to reveal perk!)</span></h1>
            <div class="row">
              <div class="col-sm-2" id="leftControl">
                <Button color="primary" onClick={()=> props.previousFlashCard()}>
                  Previous Flash Card
                </Button>
              </div>
              <div class="col-sm-6" id="collectionItem">
                <div className=""></div>
                <div>
                  <h1>{props.collection.cards[props.currentFlashCardNumber].word}</h1>
                  <Button onClick={()=> props.flip()}>View Definiton</Button>
                </div>
                <Button color="primary" onClick={()=> props.viewCollections()}>Collections</Button>
              </div>

              <div class="col-sm-2" id="rightControl">
                <Button color="primary" onClick={()=> props.nextFlashCard()}>
                  Next Flash Card
                </Button>
              </div>
            </div>
          </div>
        );
    } else if (props.front === false){
      return(
        <div class="container-fluid"><h1>What makes you S.P.E.C.I.A.L?<span>(Click card to reveal perk!)</span></h1>
          <div class="row">
            <div class="col-sm-2" id="leftControl">
              <Button color="primary" onClick={()=> props.previousFlashCard()}>
                Previous Flash Card
              </Button>
            </div>
            <div class="col-sm-6" id="collectionItem">
              <div className=""></div>
              <div>
                <h1>{props.collection.cards[props.currentFlashCardNumber].definition}</h1>
                <Button onClick={()=> props.flip()}>View Word</Button>
              </div>
              <Button color="primary" onClick={()=> props.viewCollections()}>Collections</Button>
            </div>

            <div class="col-sm-2" id="rightControl">
              <Button color="primary" onClick={()=> props.nextFlashCard()}>
                Next Flash Card
              </Button>
            </div>
          </div>
        </div>
      )
    }
    
}

export default CreateFlashCard;