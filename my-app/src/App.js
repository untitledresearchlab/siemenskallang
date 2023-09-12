/* eslint-disable jsx-a11y/alt-text */

import './App.css';
import logo from './logo_resized_resized.png'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#009999',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
    }
});

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
                    <img src={logo} />

                    <h3 >Entire Network</h3>
                    <h4 >*This setting will toggle both TV Wall and Individual TVs</h4>
                    <ThemeProvider theme={theme}>
                    <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
                                

                                <Button onClick={onsystem}>TURN ON SYSTEM</Button>
                                <Button onClick={offsystem}>TURN OFF SYSTEM</Button>

                        </ButtonGroup>
                            </ThemeProvider>
                        

                    <h3 >TV Wall Control</h3>
                    <ThemeProvider theme={theme}>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                

                             <Button onClick={wakewo}>TURN ON WATCHOUT</Button>
                             <Button onClick={shutwo}>TURN OFF WATCHOUT</Button>

                            </ButtonGroup>
                    </ThemeProvider>

                    <h3 >TV Wall Playback</h3>
                    <ThemeProvider theme={theme}>
                                <ButtonGroup variant="contained" aria-label="outlined primary button group" justifycontent="center">
                                    
                                 <Button onClick={presentation}>Play Presentation</Button>
                                 <Button onClick={capture1}>Right Stage Capture</Button>
                                 <Button onClick={capture2}>Left Stage Capture</Button>

                                </ButtonGroup>
                    </ThemeProvider>

                    <h3 >TV Control</h3>
                    <ThemeProvider theme={theme}>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group" justifycontent="center">

                                <Button onClick={wakeMad}>TURN ON TV</Button>
                                <Button onClick={shutMad}>TURN OFF TV</Button>

                            </ButtonGroup>
                    </ThemeProvider>
                           

                    <h3 >TV Playback</h3>
                    <ThemeProvider theme={theme}>
                                <ButtonGroup variant="contained" aria-label="outlined primary button group" justifycontent="center">
                                    
                                    <Button onClick={playLoopvideo}>Play Loop</Button>
                                    <Button onClick={playMadcapture}>Play Presentation</Button>

                                </ButtonGroup>
                    </ThemeProvider>

                           
                       


                    



                
            </Grid>
        </Grid>
        </div>
    );

}

//---- Call Functions ----//

function onsystem() {
    fetch('http://192.168.0.2:9000/wakesys')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function offsystem() {
    fetch('http://192.168.0.2:9000/shutSystem')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function wakewo() {
    fetch('http://192.168.0.2:9000/wakeWO')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function shutwo() {
    fetch('http://192.168.0.2:9000/shutWO')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function wakeMad() {
    fetch('http://192.168.0.2:9000/wakeMad')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function shutMad() {
    fetch('http://192.168.0.2:9000/shutMad')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}



function presentation() {
    fetch('http://192.168.0.2:9000/presentation')
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

function capture2() {
    fetch('http://192.168.0.2:9000/capture2')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function playMadcapture() {
    fetch('http://192.168.0.2:9000/playMadcapture')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function playLoopvideo() {
    fetch('http://192.168.0.2:9000/playLoopvideo')
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
