import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        
          <Tabs  className="sobre"  centered indicatorColor="secondary" onChange={handleChange}>
            <Tab  label="Todas as postagens" value="1"/>
            <Tab   label="Sobre-nós" value="2" />
          </Tabs>
        
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography className="sobre" variant="body1" gutterBottom color="textPrimary" align="center">Em 1 ano e 4 meses que trabalho na SumUp eu aprendi que proatividade e trabalho em equipe são características fundamentais em uma fintech de tecnologia Global e foi esses pontos que mais desenvolvi nesse tempo. Sempre busquei dar o meu melhor, e graças ao meu foco e dedicação, em 6 meses (tempo mínimo para ser promovido) eu fui promovido de Agent I para Agent II. O meu primeiro contato com tecnologia na SumUp foi com chat boot, onde em pouco tempo eu pude perceber o quanto a tecnoligia pode nos ajudar no nosso dia-a-dia</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;