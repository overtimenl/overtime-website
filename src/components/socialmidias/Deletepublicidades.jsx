import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState } from "react";
import axios from 'axios';

function Deletepublicidades({ anuncio, setAnuncios, setOpenModel, primery, secudary }) {

    const [message, setMessage] = useState('');
     const [cor, setCor] = useState('#00809b');
   
    const handleDelete = (e) => { 
        e.preventDefault();
        axios.delete(`http://localhost:8000/publicidadesdb/${anuncio.id}`)
        .then(response => {
            setCor('#00809b')
            setMessage('Publicidade excluida com sucesso!');
            setOpenModel(false);
            //console.log(`Deleted post with ID ${anuncio.name}`);
        })
        .catch(error => {
            setCor('red')
             setOpenModel(false);
        });
       
    }
    
    return (
        <Box
            sx={{
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Paper
                elevation={0}
            >
                <Box sx={{mb: 2}}>
                    <Typography
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold', 
                            fontSize: '15px',                       
                            
                            '@media (max-width: 600px)': { fontSize: '10px' },
                        }}  
                    >
                        {`Tem certeza que dezeja exluir o Anúncio ${anuncio.subtitle} ?`}
                    </Typography>
                    <Typography
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold', 
                            fontSize: '10px',
                            color: 'red',
                            fontFamily: 'Arvo, serif',
                            '@media (max-width: 600px)': { fontSize: '8px' },
                        }}  
                    >
                        {message}
                    </Typography>
                </Box >
                <Divider/>
                <Box sx={{mt: 0.2}}>
                <Button 
                        type="submit"                           
                        sx={{
                            m: '2px 0',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',      
                            textDecoration: 'none',
                            fontSize: '12px',
                            fontFamily: 'Arvo, serif',
                            backgroundColor: `${secudary}`,
                            '&:hover': {
                            color: '#013039',
                            cursor: 'pointer',
                            transition: '0.3s ease-in',
                            },
                        }}          
                        onClick={handleDelete}
                    > 
                            {'EXCLUIR'}
                    </Button>
                    <Button
                        onClick={() => setOpenModel(false)}
                        type="submit" 
                        sx={{
                            ml: 0.5,
                            color: 'black',
                            fontFamily: 'Arvo, serif',
                            fontSize: '12px',
                            '&:hover': {
                            color: `${primery}`,
                            transition: 'all 400ms',
                            },
                        }}
                        > 
                        SAIR
                    </Button>   
                </Box>       
            </Paper>
        </Box>
    );
}

export default Deletepublicidades;