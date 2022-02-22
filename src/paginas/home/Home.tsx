import React from 'react';
import { Typography, Box, Grid, Button, TextField } from '@material-ui/core';
import './Home.css';


function Home() {
    return (
        <Grid container className="back2">
            <Grid item xs={12}>

                <Box display="flex" justifyContent="start" alignItems="center" height="80vh">
                    <Box>
                        <Box>
                            <Typography className='bemvindo' variant="h3" gutterBottom color="textPrimary" component="h3" align="center" >Seja bem vindo(a)!</Typography>
                            <Typography className='expresse' variant="h5" gutterBottom color="textPrimary" component="h5" >expresse aqui os seus pensamentos e opiniões!</Typography>
                        </Box>
                        <Box>
                            <Button className='postagem'>Ver Postagens</Button>
                        </Box>


                    </Box>

                    


                </Box>

            </Grid>
        </Grid>
    )
}

export default Home