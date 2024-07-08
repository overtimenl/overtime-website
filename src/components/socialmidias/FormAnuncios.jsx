import { Button, InputBase, Divider, Paper, TextField, Typography, Grid, MenuItem, Box } from "@mui/material";
import { useEffect, useState } from "react";
import MuiDateRangePicker from "../MuiDateRangePicker";
import dayjs from 'dayjs';
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import classes from "./Form.module.css";
import axios from 'axios';



function Formanuncio(props) {

	//const classes = useStyles();
	const [message, setMessage] = useState('');
    const [cor, setCor] = useState('#00809b');

	const { anunciar, opcao, setAnuncios, setOpenModel, primery, secudary } = props;

	const [value, setValue] = useState(dayjs('2023-10-02'));

	const [anuncio, setAnuncio] = useState({
       id: '', 
       name: '', 
       servico: '', 
       meio: '', 
       vcampanha: 0, 
       duracao: 0, 
       conversao: 0, 
       dataFim: "", 
    });

    const handleChannge=(e)=>{
		setAnuncio({...anuncio,[e.target.name]: e.target.value})
	};

	const submitForm = (e)=>{
        e.preventDefault();
        //console.log(anuncio)
        if (opcao === "EDITAR") {
            const formData = new FormData();
            formData.append("id", anuncio.id);
            formData.append("name", anuncio.name);
            formData.append("servico", anuncio.servico);
            formData.append("meio", anuncio.meio);
            formData.append("vcampanha", anuncio.vcampanha);
            formData.append("duracao", anuncio.duracao);
            formData.append("conversao", anuncio.conversao);
            formData.append("dataFim", anuncio.dataFim);
            //formData.append("conteudo", anunciar.conteudo);
            axios.put('http://localhost:8000/anunciodb/update', {
			    id: anuncio.id,
			    name: anuncio.name,
			    servico: anuncio.servico,
			    meio: anuncio.meio,
			    vcampanha: anuncio.vcampanha,
			    duracao: anuncio.duracao,
			    conversao: anuncio.conversao,
			    dataFim: anuncio.dataFim
		    })
			  .then(function (response) {
			  	
                setAnuncio({
			        id: '', 
			       	name: '', 
			      	servico: '', 
			       	meio: '', 
			       	vcampanha: 0, 
			       	duracao: 0, 
			       	conversao: 0, 
			       	dataFim: "", 
                });
                setCor('#00809b')
                setMessage('Anúncio cadastrado com sucesso!');

			    ///console.log(response);
			  })
			  .catch(function (error) {
			  	setCor('red');
				setMessage(error.response.data.detail)
			    //console.log(error);
			  });


            //setOpenModel(false)

        } else {
            if(anuncio.name != '' && anuncio.servico != '' && anuncio.meio != '' && anuncio.meio != '' && anuncio.vcampanha > 0 && anuncio.duracao > 0){
                const formData = new FormData();
                formData.append("id", anuncio.id);
            	formData.append("name", anuncio.name);
            	formData.append("servico", anuncio.servico);
            	formData.append("meio", anuncio.meio);
            	formData.append("vcampanha", anuncio.vcampanha);
            	formData.append("duracao", anuncio.duracao);
            	formData.append("conversao", anuncio.conversao);
            	formData.append("dataFim", anuncio.dataFim);
            	//console.log(JSON.stringify(anuncio))
            	//console.log(anuncio)
            	//console.log(formData)

            	axios.post('http://localhost:8000/anunciodb/create', {
				    id: anuncio.id,
				    name: anuncio.name,
				    servico: anuncio.servico,
				    meio: anuncio.meio,
				    vcampanha: anuncio.vcampanha,
				    duracao: anuncio.duracao,
				    conversao: anuncio.conversao,
				    dataFim: anuncio.dataFim
			    })
				  .then(function (response) {
				    	setCor('#00809b')
                        setMessage('Anúncio cadastrado com sucesso!');
                        setAnuncio({
					        id: '', 
					       	name: '', 
					      	servico: '', 
					       	meio: '', 
					       	vcampanha: 0, 
					       	duracao: 0, 
					       	conversao: 0, 
					       	dataFim: "", 
                        });  
				  })
				  .catch(function (error) {
				  	setCor('red');
				  	setMessage(error.response.data.detail)
				    //console.log(error);
				  });

               
            } else {
                setCor('red');
                setMessage("Tem algum campo vazio. VERIFICA!")
            }
        }


    };

	useEffect(() => {
		//console.log(anunciar)
		if(opcao == "EDITAR"){
			setAnuncio({
		        id: anunciar.id, 
		        name: anunciar.name, 
		        servico: anunciar.servico, 
		        meio: anunciar.meio, 
		        vcampanha:anunciar.vcampanha, 
		        duracao:anunciar.duracao, 
		        conversao:anunciar.conversao, 
		        dataFim: anunciar.dataFim, 
		     })
		}
		console.log(anuncio)

	}, [])

	return(
		<Paper elevation={0} sx={{p: 1}}>
			<form 
				className={classes.formanucio}
				onSubmit={submitForm}
				
			>
				<div className="input-box">
					<input 
						type="text" 
						placeholder="Informe o nome"
						name="name"
						onChange={handleChannge}
                    	value={anuncio.name} 
					/>
				</div>

				<div className="input-box">
					<select 							 
						id="pet-select"
						name="meio"							
						onChange={handleChannge}
						value={anuncio.meio}
					>
						<option value="">Selecione o Meio</option>
						<option	value="Redes Sociais">
							Redes Sociais
						</option>
						<option value="Google Ads">Google Ads</option>
						<option value="Podcasts e Vídeos">Podcasts e Vídeos</option>
						<option value="Native Advertising">Native Advertising</option>
						<option value="Marketplaces">Marketplaces</option>
						<option value="Aplicativos Móveis">Aplicativos Móveis</option>
						<option value="Influenciadores">Influenciadores</option>							
					</select>
				</div>		
				
		        <div className="input-box">
					<select 							 
						id="pet-select"
						name="servico"							
						onChange={handleChannge}
						value={anuncio.servico}
					>
						<option value="">Selecione o servico</option>
						<option	value="APP Desktop">
							Aplicações Desktop
						</option>
						<option value="App Web e Mobile">App Web e Mobile</option>
						<option value="Marketing Digital">Marketing Digital</option>
						<option value="Produção Multimidia">Produção Multimidia</option>
						<option value="Outro">Outro</option>							
					</select>
				</div>		
		        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
		        	<Grid item xs={12}>
		        		<Grid container justifyContent="space-between" spacing={2}>
		        		 	 <Grid item xs={12} sm={6}>
		        		 	 	<div className="input-box">
									<input 
										type="number" 
										placeholder="Valor da campanha"
										name="vcampanha"
										min={0}
										onChange={handleChannge}
				                    	value={anuncio.vcampanha == 0? "": anuncio.vcampanha} 
									/>
								</div>
	                        </Grid>

	                        <Grid item xs={12} sm={6}>
                        		<input 
									type="number" 
									placeholder="Informe a duração"
									name="duracao"
									min={0}
									onChange={handleChannge}
			                    	value={anuncio.duracao  == 0? "" : anuncio.duracao} 
								/>
	                        </Grid>

	                        <Grid item xs={12} sm={6}>
	                        	<input 
									type="number" 
									placeholder="Informe a conversão"
									name="conversao"
									min={0}
									onChange={handleChannge}
			                    	value={anuncio.conversao == 0? "": anuncio.conversao} 
								/>
	                            
	                        </Grid>
	                        <Grid item xs={12} sm={6}>
	                        	<input 
									type="date" 
									placeholder="Termino"
									name="dataFim"
									onChange={handleChannge}
			                    	value={anuncio.dataFim} 
								/>
	                        	
	                        </Grid>

		        		</Grid>
		        	</Grid>
		        </Grid>
		        <Typography
	              component="p"
	                sx={{
	                    color: `${cor}`,
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 'bold', 
	                    fontSize: '10px',
	                    fontFamily: 'Roboto, sans-serif',
	                    '@media (max-width: 600px)': { fontSize: '8px' },
	                  }}
	                >
	                  {message}
	              </Typography>
		        <Box
		        	sx={{
		        		mt: 2,
		        		display: 'flex',
		        		justifyContent: 'space-between',
		        		'@media (max-width: 375px)': { 
		        			 display: 'flex',
		        			 flexDirection: 'column',
		        			 justifyContent: 'space-evenly',
		        		},
		        	}}
		        >
		        	<Button 
			            type="submit"                   
			            //onClick={}
			            size="small"
			            sx={{
			                margin: '8px 0',
			                color: 'white',
			                border: 'none',
			                cursor: 'pointer',
			                mt: 1,
			                //height: '25px'
			                minWidth: 100,
			                p:1,
			                textDecoration: 'none',
			                fontSize: '12px',
			                fontFamily: 'Arvo, serif',
			                borderRadius: '40px 40px 40px 40px',
			                backgroundColor: `${secudary}`,
			                '&:hover': {
				                color: `${primery}`,                       
				                cursor: 'pointer',
				                transition: '0.3s ease-in',
			                },
			            }}			                        
			           
			        > 
			            {opcao}
			        </Button>

			        <Button 
			            //type="submit"                   
			            onClick={() => setOpenModel(false)}
			            size="small"
			            sx={{
			                margin: '8px 0',
			                color: 'white',
			                border: 'none',
			                cursor: 'pointer',
			                mt: 1,
			                //height: '25px'
			                minWidth: 100,
			                p:1,
			                textDecoration: 'none',
			                fontSize: '12px',
			                fontFamily: 'Arvo, serif',
			                borderRadius: '40px 40px 40px 40px',
			                backgroundColor: `${primery}`,
			                '&:hover': {
				                color: `${secudary}`,                       
				                cursor: 'pointer',
				                transition: '0.3s ease-in',
			                },
			            }}			                        
			           
			        > 
			            Fechar
			        </Button>						
		        	
		        </Box>		
			</form>
		</Paper>
	)

}
export default Formanuncio;