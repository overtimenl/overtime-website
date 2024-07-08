import { useState } from 'react';
import {Box, Card, CardContent, Typography, Button} from '@mui/material';

function ClientBox(props) {

	const { message, primery, secudary } = props;

	return(
		<Card>
			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          	 {message.work}
        	</Typography>
			<CardContent>				
		        <Typography sx={{ mb: 1.5 }} color="text.secondary">
		          {message.data}
		        </Typography>
		        <Typography variant="body2">		          
		          {message.conteudo}
		        </Typography>
		        <Typography variant="h5" component="div">
		          {message.name}
		        </Typography>
		        <Button 
				sx={{
                    mt: .5,
                    p: .5,
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',		
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    borderRadius: '10px 10px 10px 10px',
                    fontSize: '10px',								                   
                    backgroundColor: '#ED1C07',
                    '&:hover': {
                    color: '#171010',
                    //backgroundColor: 'white',
                    cursor: 'pointer',
                    transition: '0.3s ease-in',
                    },
                }}	
			>
				contactar
			</Button>
			</CardContent>
			
		</Card>
	);
}

export default ClientBox;