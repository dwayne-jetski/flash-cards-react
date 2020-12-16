import React from 'react';


function CardPlayer(props) {  
        
  
  if (props.viewing === false){
  return (
    <div>
        <div class="card-scene col-md4">
          <div id="card" class="card">
            <div class="card-face card-backing">
              <div class="grain-overlay"></div>
              <div class="bump"></div>
              <div class="top-banner"><h1>{props.collection.title}</h1></div>
              <div class="back-main">
                <div class="pipboy">
                  {/* <div class="twelve-point-star"></div> */}
                  <img src="https://vignette.wikia.nocookie.net/fallout/images/c/c0/VaultBoyFO3.png/revision/latest?cb=20110809182235" />
                </div>
                <div class="vault-tec">
                  <div class="center"></div>
                  <div class="lines">
                    <div class="line line--left">
                      <div class="line-inner"></div>
                      <div class="line-inner"></div>
                      <div class="line-inner"></div>
                    </div>
                    <div class="line line--right">
                      <div class="line-inner"></div>
                      <div class="line-inner"></div>
                      <div class="line-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-face card-front">
              <h1>
                  <span class="bump">
                    <b class="outer">
                      <b class="inner">1</b>
                    </b>
                  </span>
                
              </h1>
              <div class="main-pane">
                
              </div>
              <div class="desc">
                <p>Your two-handed melee weapons now do +10% damage.</p>
                <div class="special" data-category="strength">S</div>
                <div id="level" class="level" data-level-cap="3" data-level-current="1"></div>
              </div>
              <div class="grain-overlay"></div>
            </div>
          </div>
        </div>
        
            <link rel="stylesheet" href="../component/card/card.css"></link> 
            <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
            <script src="conic-gradient.js"></script>
            <script src="../component/card/card.js" async defer></script>
                
        
                </div>
            )
  } else if (props.viewing === true && props.front === true){
    return(
    <div>
        <div class="card-scene col-md4">
          <div id="card" class="card">
            <div class="card-face card-backing">
              <div class="grain-overlay"></div>
              <div class="bump"></div>
              <div class="top-banner">
                <h3></h3>
                
                
                <h2>{props.currentFlashCardNumber + 1}/{props.collection.cards.length}<br></br>
                  {props.collection.cards[props.currentFlashCardNumber].word}
                </h2>
              </div>
              <div class="back-main">
                <div class="pipboy">
                  {/* <div class="twelve-point-star"></div> */}
                  <img src="https://vignette.wikia.nocookie.net/fallout/images/c/c0/VaultBoyFO3.png/revision/latest?cb=20110809182235" />
                </div>
                <div class="vault-tec">
                  <div class="center"></div>
                  <div class="lines">
                    <div class="line line--left">
                      <div class="line-inner"></div>
                      <div class="line-inner"></div>
                      <div class="line-inner"></div>
                    </div>
                    <div class="line line--right">
                      <div class="line-inner"></div>
                      <div class="line-inner"></div>
                      <div class="line-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-face card-front">
              <h1>
                  <span class="bump">
                    <b class="outer">
                      <b class="inner">1</b>
                    </b>
                  </span>
                  {props.collection.cards[props.currentFlashCardNumber].word}
                  
              </h1>
              <div class="main-pane">
                
              </div>
              <div class="desc">
                <p></p>
                <div class="special" data-category="strength">S</div>
                <div id="level" class="level" data-level-cap="3" data-level-current="1"></div>
              </div>
              <div class="grain-overlay"></div>
            </div>
          </div>
        </div>
        
            <link rel="stylesheet" href="../component/card/card.css"></link> 
            <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
            <script src="conic-gradient.js"></script>
            <script src="../component/card/card.js" async defer></script>
                
        
    </div>
            
    )
  } else {
    return(
    <div className="card-scene">
      <div class="card-face card-front">
      <h1>
          <span class="bump">
            <b class="outer">
              <b class="inner">{props.currentFlashCardNumber + 1}/{props.collection.cards.length}</b>
            </b>
          </span>
          {props.collection.cards[props.currentFlashCardNumber].word}
      </h1>
      <div class="main-pane">
        <img class="slugger" src="https://vignette.wikia.nocookie.net/fallout/images/6/69/Fo76_Slugger.png/revision/latest/scale-to-width-down/353?cb=20181125171021"/>
      </div>
      <div class="desc">
         <h3>{props.collection.cards[props.currentFlashCardNumber].definition}</h3>
         <div class="special" data-category="strength">D</div>
         <div id="level" class="level" data-level-cap="3" data-level-current="1"></div>
       </div>
      <div class="grain-overlay"></div>
    </div>
  </div>

            
    )
  }


  }


export default CardPlayer;