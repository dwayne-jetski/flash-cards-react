import React from "react";
import { Button } from "reactstrap";
import "./collection.css";
import CardPlayer from '../card_player/card_player'


function Collection(props) {
  return (
    <div class="container-fluid"><h1>What makes you S.P.E.C.I.A.L?<span>(Click card to reveal perk!)</span></h1>
      <div class="row">
        <div class="col-sm-2" id="leftControl">
          <Button color="primary" onClick={() => props.previousCollection()}>
            Previous Collection
          </Button>{" "}
        </div>
        <div class="col-sm-6" id="collectionItem">
          <div className="">{CardPlayer(props)}</div>
          <Button color="primary" onClick={() => props.viewFlashCards()}>Flash Cards</Button>
        </div>

        <div class="col-sm-2" id="rightControl">
          <Button color="primary" onClick={() => props.nextCollection()}>
            Next Collection
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Collection;
