import React from 'react';
import { Button } from 'reactstrap';



function CreateFlashCard(props){

    return(
    <div class="container-fluid"><h1>What makes you S.P.E.C.I.A.L?<span>(Click card to reveal perk!)</span></h1>
      <div class="row">
        <div class="col-sm-2" id="leftControl">
          <Button color="primary">
            Previous Flash Card
          </Button>
        </div>
        <div class="col-sm-6" id="collectionItem">
          <div className=""></div>
          <h1>{props.collection}</h1>
          <Button color="primary" onClick={()=> props.viewCollections()}>Collections</Button>
        </div>

        <div class="col-sm-2" id="rightControl">
          <Button color="primary">
            Next Flash Card
          </Button>
        </div>
      </div>
    </div>
  );
    
}

export default CreateFlashCard;