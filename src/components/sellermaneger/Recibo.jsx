import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";


function Recibo(props) {

	const { setValue, payment, setOpenModel, primery, secudary } = props;
	const [venda, setVenda] = useState({
		id: '',
        valor: '',
        app: '',
        client: '',
        image: '',
        data_create: ''  
	})

	useEffect(() => { 
		//console.log(anuncio)
		setVenda({
           	id: 1,
			valor: 215000,
			app: 'Gestão Financeira e RH',
			client: 'Paulo Mingos',
			image: 'check-sample.jpg',
			data_create: '10:25 12 Agosto de 2023'
		})
        
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])
	return(
		<>
			<Box
	            sx={{
	                display: 'flex',
	                flexDirection: 'column',	                
	            }}
	        >
	        	<Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    mb: 1,
	                    fontWeight: 'bold',	
	                    fontSize: '15px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                PAGAMENTO REFERENTE A VENDA
	            </Typography>

	            <Typography
	                sx={{
	                    justifyContent: 'start',
	                    alignItems: 'start',
	                    //fontWeight: 'bold',	
	                    fontSize: '12px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                VENDA
	            </Typography>
	            <Divider />
	            <Typography
	                sx={{
	                	mt: .5,
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    //fontWeight: 'bold',	
	                    fontSize: '10px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                APP: {venda.app}
	            </Typography>
	        	<Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    //fontWeight: 'bold',	
	                    fontSize: '10px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                VALOR: {venda.valor}
	            </Typography>
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    //fontWeight: 'bold',	
	                    fontSize: '10px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	               DATA: {venda.data_create}
	            </Typography>
	             <Typography
	                sx={{
	                	mt: 1,
	                    justifyContent: 'start',
	                    alignItems: 'start',
	                    //fontWeight: 'bold',	
	                    fontSize: '12px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                PAGAMENTO
	            </Typography>
	            <Divider />
	            <Typography
	                sx={{
	                	mt: .5,
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    //fontWeight: 'bold',	
	                    fontSize: '11px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                VALOR: {payment.valor}
	            </Typography>
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    //fontWeight: 'bold',	
	                    fontSize: '11px',                       
	                    fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                DATA: {payment.data}
	            </Typography>
	            <img                  
                    src={new URL(`../../assets/payments/${payment.image}`, import.meta.url)}
                    width={150}
                    height={100}
                />  

	        </Box>
		</>
	)
}
export default Recibo;