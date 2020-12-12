import React from "react";
import { Button } from "reactstrap";
import "./collection.css";

function displayCollection(props) {
  console.log(props.collection.title);
  return (
    <div>
      <div>
        <h1>{props.collection.title}</h1>
      </div>
    </div>
  );
}

function Collection(props) {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2" id="leftControl">
          <Button color="primary" onClick={() => props.previousCollection()}>
            Previous Collection
          </Button>{" "}
        </div>
        <div class="col-sm-6" id="collectionItem">
          <div class="card">{displayCollection(props)}</div>
        </div>

        <div class="col-sm-2" id="rightControl">
          <Button color="primary" onClick={() => props.nextCollection()}>
            Next Collection
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Collection;
