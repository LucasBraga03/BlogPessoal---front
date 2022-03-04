import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import "./Footer.css"
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';

function Footer() {


    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='footer'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography className="fonte-footer" variant="h5" align="center" gutterBottom>Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box className="fonte" display="flex" alignItems="center" justifyContent="center">

                        <a className='fonte-footer2' href="https://www.instagram.com/lbragaa_/" target="_blank">
                            <InstagramIcon />
                        </a>
                        <a className='fonte-footer2' href="https://www.linkedin.com/in/lucas-braga-25b250205/" target="_blank">
                            <LinkedInIcon />
                        </a>
                    </Box>
                </Box>

            </Grid>
        </Grid>
    }

        return (
            <>
                {footerComponent}
            </>
        )


    }

    export default Footer;