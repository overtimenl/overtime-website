import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";


function Sellerbox(props) {

	const { seller, setASeller, setOpenModel, primery, secudary } = props;
	const [account, setAccount] = useState({
	    id: '', 
	    name: '',
	    banco: '',  
	    agencia: '',    
	    conta: '', 
	    ibam: '', 
	});

	useEffect(() => {
		setAccount({
			id: 'ettretr253255', 
	    	name: 'Osmar Ndibala',
	    	banco: 'BANCO SOL',  
	    	agencia: '0032-2',    
	    	conta: '0000342382', 
	    	ibam: '235628635247R852384585384524845', 
		})
	}, [])

	return(
		<>
			<Box
	            sx={{
	                display: 'flex', 
	                flexDirection: 'column',
	                alignItems: 'start',
	                justifyContent: 'start',

	            }}
	        >
	        	<Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    //fontWeight: 'bold',	
	                    fontSize: '9px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '6px' },
	                }}  
	            >
	               VENDEDOR:
	            </Typography>
	        	<Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 'bold',	
	                    fontSize: '13px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                {seller.username}
	            </Typography>
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    //fontWeight: 'bold',	
	                    fontSize: '9px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '6px' },
	                }}  
	            >
	               EMAIL:
	            </Typography>
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 'bold',	
	                    fontSize: '13px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	               {seller.email}
	            </Typography>
	           
	            <Typography
	                sx={{
	                	mt: 1,
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 'bold',	
	                    fontSize: '15px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                DADOS PARA TRANSFERÊNCIA
	            </Typography>
	            <Divider light/>
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    //fontWeight: 'bold',	
	                    fontSize: '9px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '6px' },
	                }}  
	            >
	               NOME:
	            </Typography>
		        <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 'bold',	
	                    fontSize: '13px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	              {account.name}
	            </Typography>
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    //fontWeight: 'bold',	
	                    fontSize: '9px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '6px' },
	                }}  
	            >
	               BANCO:
	            </Typography>
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 'bold',	
	                    fontSize: '13px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                {account.banco}
	            </Typography>
	            
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    //fontWeight: 'bold',	
	                    fontSize: '9px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '6px' },
	                }}  
	            >
	               AGÉNCIA:
	            </Typography>
	        	<Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 'bold',	
	                    fontSize: '15px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	               {account.agencia}
	            </Typography>	            
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    //fontWeight: 'bold',	
	                    fontSize: '9px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '6px' },
	                }}  
	            >
	              Nº DA CONTA:
	            </Typography>

	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 'bold',	
	                    fontSize: '15px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                {account.conta}
	            </Typography>
	            
	             <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    //fontWeight: 'bold',	
	                    fontSize: '9px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '6px' },
	                }}  
	            >
	              IBAM:
	            </Typography>
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 'bold',	
	                    fontSize: '15px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                {account.ibam}
	            </Typography>
	            <Button 
		            type="submit"                   
		            onClick={() => setOpenModel(false)}
		            size="small"
		            sx={{
		                margin: '8px 0',
		                color: 'white',
		                border: 'none',
		                cursor: 'pointer',
		                mt: 1,
		                //height: '25px'
		                //minWidth: 100,
		               
		                textDecoration: 'none',
		                fontSize: '12px',
		                fontFamily: 'Arvo, serif',
		                borderRadius: '5px 5px 5px 5px',
		                backgroundColor: `${secudary}`,
		                '&:hover': {
			                color: `${primery}`,                       
			                cursor: 'pointer',
			                transition: '0.3s ease-in',
		                },
		            }}	
		            fullWidth		                        
		           
		        > 
		           OK
		        </Button>

	        </Box>
		</>
	)
}
export default Sellerbox;