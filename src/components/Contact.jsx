import { useState } from 'react';
import {Box, Typography, Divider, Grid, TextField, MenuItem, Button} from '@mui/material';
import classes from "./Contact.module.css";

const currencies = [
  {
    value: 'Aplicações Desktop',
    label: 'Aplicações Desktop',
  },
  {
    value: 'App Web e Mobile',
    label: 'App Web e Mobile',
  },
  {
    value: 'Marketing Digital',
    label: 'Marketing Digital',
  },
  {
    value: 'Produção Multimidia',
    label: 'Produção Multimidia',
  },
  {
    value: 'Outro',
    label: 'Outro',
  }
];

function Contact(props) {

	const { primery, secudary } = props;
	const [message, setMessage] = useState({
	    id: 0,
	    nome: '',
	    email: '',
	    assunto: '',
	    conteudo: '',
	    idUser: ''
	})

	const handleChannge =(e)=>{
        setMessage({...message,[e.target.name]: e.target.value})
    };

	const submitForm = (e)=>{
        e.preventDefault();
    };

	return(
		<>
			<Box 
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					color: `${primery}`,
					mt: 5

				}}
			>	
				<Typography
					variant="p"
					sx={{
						fontSize: '1rem',
						fontWeight: 700,
						//color: '#fff',
						'@media (max-width: 800px)': { fontSize: '.8rem' },
						
					}}
				>
					contate-nos
				</Typography>
				<Typography					
					sx={{
						fontSize: '2.5rem',
						fontWeight: 700,
						//color: '#fff',
						fontFamily: 'Arvo, serif',
						'@media (max-width: 800px)': { fontSize: '1.8rem' },
						'@media (max-width: 400px)': { fontSize: '1.4rem' },
						
					}}

				>
			       Fale Connosco
			    </Typography>
			    <Divider  
			    	sx={{
			    		fontWeight: 700,  
			    		mt: 2,
			    		fontSize: 15,
                		width: 120,
                		border: `2px solid #BDC1C9`
            		}}
                />
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					mt: 2,
					mb: 5,
					'@media (max-width: 800px)': { 
            			display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
            		},
				}}
			>
				<form 
					method='post' 
					onSubmit={submitForm}
					style={{width: '100%'}}
					className={classes.formContact}
				>

					<div className="input-box">
						<input 
							type="text" 
							placeholder="Informe seu nome"
							name="nome"
							onChange={handleChannge}
                        	value={message.nome} 
						/>
					</div>
					<div className="input-box">
						<input 
							type="email" 
							placeholder="Informe seu email"
							name="email"
							onChange={handleChannge}
                        	value={message.email} 
						/>
					</div>
					<div className="input-box">
						<select 							 
							id="pet-select"
							name="conteudo"							
							onChange={handleChannge}
						>
							<option value="">Selecione o assunto</option>
							<option value="Aplicações Desktop">Aplicações Desktop</option>
							<option value="App Web e Mobile">App Web e Mobile</option>
							<option value="Marketing Digital">Marketing Digital</option>
							<option value="Produção Multimidia">Produção Multimidia</option>
							<option value="Outro">Outro</option>							
						</select>
					</div>					
					<div className="input-box message-box">
						<textarea 
							cols={30}
							rows={10}
							name="conteudo"	
							placeholder="Insere a mensagem"						
							onChange={handleChannge} 
						>
							{message.conteudo} 
						</textarea>
					</div>
					<Button 
            type="submit"                   
            //onClick={}
            size="small"
            sx={{
                margin: '8px 0',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                //height: '25px',
                p:1,
                textDecoration: 'none',
                fontSize: '14px',
                borderRadius: '40px 40px 40px 40px',
                backgroundColor: `${secudary}`,
                '&:hover': {
                color: `${primery}`,                       
                cursor: 'pointer',
                transition: '0.3s ease-in',
                },
            }}			                        
            fullWidth
        > 
            Enviar
        </Button>
				</form>

			</Box>
		</>
	);

}

export default Contact;