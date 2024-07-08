import { useState, useEffect } from "react";
import {Box, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button} from '@mui/material';
import { Delete, Edit } from "@mui/icons-material";
import Model from "../Model";

function Paymentbox(props) {

	const {payment} = props;
	const [openModel, setOpenModel] = useState(false);
  const [opcao, setOpcao] = useState('');
  const [title, setTitle] = useState('');

	const handleEditarCountry = () => {
      setOpcao('EDITAR');
      setTitle('EDITAR PAGAMENTO');
      setOpenModel(true);
      setUser({
      	id: payment.id,
      	name: payment.name,
      	valor: payment.valor,
      	tipo: payment.tipo,
      	servico: payment.servico,
      	id_estrageiro: payment.id_estrageiro, 
      	data_create: payment.data_create, 
      	image: payment.image,
      })
    };

    const handleApagarCountry = () => {
      setOpcao('APAGAR');
      setTitle('APAGAR PAGAMENTO');      
      setOpenModel(true);
      setUser({
      	id: payment.id,
      	name: payment.name,
      	valor: payment.valor,
      	tipo: payment.tipo,
      	servico: payment.servico,
      	id_estrageiro: payment.id_estrageiro, 
      	data_create: payment.data_create, 
      	image: payment.image,
      })
    };

    const getComponent = () =>{
        switch (opcao) {
            case 'ADD':
                return //<Formpublicidades anuncio={anuncio} setAnuncio={setAnuncio} setOpenModel={setOpenModel} opcao={opcao} foto="sem-foto.jpg" primery={primery} secudary={secudary} />;
            case 'EDITAR':           
                return  //<Formpublicidades anuncio={anuncio} setAnuncio={setAnuncio} setOpenModel={setOpenModel} foto={anuncio.image} opcao={opcao} primery={primery} secudary={secudary}/>;
            case 'DELETE':
                return //<Deletepublicidades anuncio={anuncio} setAnuncios={setNotificacao} setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />
            default: 
                return null;
        }
    }

	return(
	  	<>
	  		<Card  elevation={1} sx={{ maxWidth: 300, m: 1 }}>
			  <CardContent>
			    <Typography 
					sx={{
				 		fontSize: 8,
				 		fontFamily: 'Arvo, serif',
				 		float: 'right',
				 		mr: .5,
				 		
				 	}} 
				 >
			  	 {payment.servico}
				</Typography>				
			        <Typography 
			        	sx={{
			        		mb: .1, 
				        	fontSize: '.6rem',
							fontWeight: 700,
							fontFamily: 'Arvo, serif',
							mt: 1
				        }} 
				       >
			          {payment.name}
			        </Typography>
			        <Typography 
			        	sx={{
			        		mb: .5, 
			        		fontSize: '.6rem',
							fontWeight: 700,
							fontFamily: 'Arvo, serif',
							mt: 2
			        	}} 
			        >
			          {payment.valor}
			        </Typography>
			        <Typography 
			        	sx={{
							fontSize: '.5rem',
							//fontWeight: 700,
							fontFamily: 'Arvo, serif',
							//textAlign: 'center',
							//width: 225,
						}}
			        >		          
			          {payment.tipo}
			        </Typography>
			        <Typography 
			        	sx={{
							fontSize: '.5rem',
							//fontWeight: 700,
							fontFamily: 'Arvo, serif',
							//textAlign: 'center',
							//width: 225,
						}}
			        >		           
			          {payment.data_create}
			        </Typography>
			  </CardContent>
			  <CardActions>
			    <IconButton 
			    	size="small"
			    	sx={{							                   
			            color: 'white',
			            border: 'none',
			            cursor: 'pointer',		
			            textDecoration: 'none',
			            fontWeight: 'bold',
			            //borderRadius: '5px 5px 5px 5px',
			            fontSize: '5px',								                   
			            //backgroundColor: '#ED1C07',
			            '&:hover': {
			            color: '#171010',
			            //backgroundColor: 'white',
			            cursor: 'pointer',
			            transition: '0.3s ease-in',
			            },
			        }}	
			    >
			    	 <Edit 
					  	sx={{
					  		color: 'blue',
					  		fontSize: '10px',	
					  	}}
					 />
			    </IconButton>
			    <IconButton>
				  <Delete 
				  	sx={{
				  		color: 'red',
				  		fontSize: '10px',	
				  	}}
				 />
				</IconButton>

			  </CardActions>
			</Card>
			 <Model
          title={title}
          openModel = {openModel}
          setOpenModel = {setOpenModel}
         >
              {
              getComponent()
              }
          </Model>  
	  	</>
	    
	)

}

export default Paymentbox;