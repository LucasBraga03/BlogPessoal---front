import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import useLocalStorage from 'react-use-localstorage';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
          toast.error('É necessário estar logado', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined,
          });
            history.push("/login")
    
        }
    }, [token])

    return (
        <Grid container className="back2">
            <Grid item xs={12}>

                <Box display="flex" justifyContent="start" alignItems="center" height="80vh">
                    <Box>
                        <Box>
                            <Typography className='bemvindo' variant="h3" gutterBottom color="textPrimary" component="h3" align="center" >Seja bem vindo(a)!</Typography>
                            <Typography className='expresse' variant="h5" gutterBottom color="textPrimary" component="h5" >expresse aqui os seus pensamentos e opiniões!</Typography>
                        </Box>

                        <Box display="flex" justifyContent="center">
                            <Box marginRight={1}>
                                <ModalPostagem />
                            </Box>
                            <Link to="/posts" className='texto' >
                                <Button variant="outlined" className='botaopostagem'>Ver Postagens</Button>
                            </Link>
                        </Box>

                    </Box>

                </Box>

                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home