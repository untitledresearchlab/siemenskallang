
import './App.css';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Grid } from '@mui/material';

const SystemButton = () => {

    return (

        <div
            style={{
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >



        <Grid container>
            <Grid item>
               

                    
                        <h1 >Siemens System Control</h1>
                        
                            <h3 >Entire Network</h3>
                            <ButtonGroup variant="contained"
                                aria-label="outlined primary button group"
                                >
                                

                                <Button onClick={onsystem}>TURN ON SYSTEM</Button>
                                <Button onClick={offsystem}>TURN OFF SYSTEM</Button>

                            </ButtonGroup>
                        
                       

                        

                            <h3 >Watchout Control</h3>
                            <ButtonGroup variant="contained"
                                aria-label="outlined primary button group"
                                justifycontent="center">
                                

                                <Button onClick={wakewo}>TURN ON WATCHOUT</Button>
                                <Button onClick={shutwo}>TURN OFF WATCHOUT</Button>

                            </ButtonGroup>

                            

                                <h3 >Watchout Playback</h3>
                                <ButtonGroup variant="contained"
                                    aria-label="outlined primary button group"
                                    justifycontent="center">
                                    

                                    <Button onClick={presentation}>Play Presentation</Button>
                                    <Button onClick={capture1}>Play Capture</Button>

                                </ButtonGroup>


                            
                        
                        

                            <h3 >TV Control</h3>
                            <ButtonGroup variant="contained"
                                aria-label="outlined primary button group"
                                justifycontent="center">
                                

                                <Button onClick={wakeMad}>TURN ON TV</Button>
                                <Button onClick={shutMad}>TURN OFF TV</Button>

                            </ButtonGroup>

                           

                                <h3 >TV Playback</h3>
                                <ButtonGroup variant="contained"
                                    aria-label="outlined primary button group"
                                    justifycontent="center">
                                    

                                    <Button onClick={playLoopvideo}>Play Loop</Button>
                                    <Button onClick={playMadcapture}>Play Presentation</Button>

                                </ButtonGroup>


                           
                       


                    



                
            </Grid>
        </Grid>
        </div>
    );

}

//---- Call Functions ----//

function onsystem() {
    fetch('http://192.168.1.128:9000/wakesys')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function offsystem() {
    fetch('http://192.168.1.128:9000/shutSystem')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function wakewo() {
    fetch('http://192.168.1.128:9000/wakeWO')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function shutwo() {
    fetch('http://192.168.1.128:9000/shutWO')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function wakeMad() {
    fetch('http://192.168.1.128:9000/wakeMad')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function shutMad() {
    fetch('http://192.168.1.128:9000/shutMad')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}



function presentation() {
    fetch('http://192.168.1.128:9000/presentation')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function capture1() {
    fetch('http://192.168.0.2:9000/capture1')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function playMadcapture() {
    fetch('http://192.168.1.128:9000/playMadcapture')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function playLoopvideo() {
    fetch('http://192.168.1.128:9000/playLoopvideo')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

//-----------------------//.

function App() {
  return (
      <div>


          


              <SystemButton />

          








      </div>

  );
}

export default App;
