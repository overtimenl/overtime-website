import { useEffect, useRef, useState } from "react";
import { PhotoCamera } from "@mui/icons-material";
import { Button, Divider, Paper, TextField,  Box, IconButton, Typography, Grid  } from "@mui/material";
import classes from "./publicidades.module.css";
import axios from 'axios';

function Formservicos(props) {


	//const classes = useStyles();
	const { foto, servico, opcao, setServico, setOpenModel, primery, secudary } = props;
	const [selectedImage, setSelectedImage] = useState();
    const [img, setImg] = useState(foto)
    const selectFile = useRef();

    const [message, setMessage] = useState('');
    const [cor, setCor] = useState('#00809b');

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
           setSelectedImage(e.target.files[0]);
        }
    };


    const submitForm = async (e)=>{
        e.preventDefault();
        if(servico.work != '' && servico.name != '' && servico.conteudo != '' && servico.more != '' && servico.whats != ''){
        	if(opcao == 'EDITAR'){
        		const formData = new FormData();
	            formData.append("id", servico.id);
	            formData.append("work", servico.work);
	            formData.append("name", servico.name);
	            formData.append("conteudo", servico.conteudo);
	            formData.append("more", servico.more);
	            formData.append("image", selectFile.current.files[0])

	            axios({
	                method: 'put',
	                url: 'http://localhost:8000/worksdb/update',
	                data: formData,
	                config: { headers: {'Content-Type': 'multipart/form-data' }}
	            })
	            .then(function (response) {
	                //handle success
	                console.log(response)
	                setCor('#00809b')
	                setMessage('Serviço atulizado com sucesso!');
	                setServico({
	                   	id: '',
						work: '',
						name: '',
						conteudo: '',
						image: '',
						more: '',
						whats: ''
			        });     
	                setSelectedImage()
	                setImg('sem-foto.jpg');
	                setOpenModel(false)
	                //console.log(user)
	                
	                //console.log(Number(user.idcountry))
	                
	            })
	            .catch(function (response) {
	                //handle error
            		console.log(response)
			    });


        	} else {
        		const formData = new FormData();
	            formData.append("work", servico.work);
	            formData.append("name", servico.name);
	            formData.append("conteudo", servico.conteudo);
	            formData.append("more", servico.more);
	            formData.append("whats", servico.whats);
	            formData.append("image", selectFile.current.files[0])
	            axios({
	                method: 'post',
	                url: 'http://localhost:8000/worksdb/create',
	                data: formData,
	                config: { headers: {'Content-Type': 'multipart/form-data' }}
		        })
		        .then(function (response) {
		         //handle success
		            //console.log(response)
		            setCor('#00809b')
		            setMessage('Serviço cadastrada com sucesso!');
		            setServico({
		                id: '',
						work: '',
						name: '',
						conteudo: '',
						image: '',
						more: '',
						whats: ''
		        	});     
		            setSelectedImage()
		            setImg('sem-foto.jpg');
		            setOpenModel(false)
		            //console.log(user)
		                
		            //console.log(Number(user.idcountry))
		                
		        }).catch(function (response) {
		            //handle error
		            //console.log(response)
		        });

        	}
        } else {
        	setCor('red');
		    setMessage("Tem algum campo vazio. VERIFICA!")
        }
    };

    useEffect(() => { 
		console.log(servico)
        if (opcao === "EDITAR") {			
			
        }
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])

     const handleChannge=(e)=>{
		setServico({...servico,[e.target.name]: e.target.value})
	};

	return(
		<Paper  elevation={0}>
			<form 
				className={classes.formContact} 
				onSubmit={submitForm}
			>
				<div className="input-box">
					<select 							 
						id="pet-select"
						name="work"							
						onChange={handleChannge}
						value={servico.work}
					>
						<option value="">Selecione o seviço</option>
						<option	value="APP Desktop">
							Aplicações Desktop
						</option>
						<option value="APP Web e Mobile">App Web e Mobile</option>
						<option value="Marketing Digital">Marketing Digital</option>
						<option value="Produção Multimidia">Produção Multimidia</option>
						<option value="Outro">Outro</option>							
					</select>
				</div>		

				<div className="input-box">
					<input 
						className={classes.input_box}
						type="text" 
						placeholder="Informe o nome"
						name="name"
						onChange={handleChannge}
                    	value={servico.name} 
					/>
				</div>

				<div >
					<input 
						className={classes.input_box}
						type="text" 
						placeholder="Link redes sociais"
						name="more"
						onChange={handleChannge}
                    	value={servico.more} 
					/>
				</div>

				<div >
					<input 
						className={classes.input_box}
						type="text" 
						placeholder="Link Whats"
						name="whats"
						onChange={handleChannge}
                    	value={servico.whats} 
					/>
				</div>

				<div className="input-box message-box">
					<textarea 
						cols={20}
						rows={10}
						name="conteudo"	
						placeholder="Insere a descrição"						
						onChange={handleChannge} 
					>
						{servico.conteudo} 
					</textarea>
				</div>

				<Box sx={{mb: 1}}>
                <IconButton size="small" sx={{borderRadius: 0, color: '#00809b'}}  aria-label="upload picture" component="label">
                    <input 
                        hidden
                        accept="image/*" 
                        type="file" 
                        ref={selectFile}  
                        onChange={imageChange}                          
                        required 
                    />
                        <PhotoCamera />
                        <Typography variant="overline" display="block" sx={{fontFamily: 'Arvo, serif',}} gutterBottom margin={1}>
                            BANNER
                        </Typography>	                       	
                </IconButton>  
                    
                    <Box style={{
                            marginTop: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <img							
                            src={(selectedImage === undefined) ? new URL(`../../assets/works/${img}`, import.meta.url) : URL.createObjectURL(selectedImage)}//{ foto : }
                            style={{ maxWidth: "40%", maxHeight: 175 }}
                            alt="Thumb"
                        />
                    </Box>
            </Box>
             <Grid align="center" sx={{ mt: 1 }}>
                <Typography
                    component="p"
                    sx={{
                        color: `${cor}`,
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold', 
                        fontSize: '10px',
                        fontFamily: 'Arvo, serif',
                        '@media (max-width: 600px)': { fontSize: '8px' },
                        }}
                    >
                    {message}
                </Typography>
            </Grid>
            <Button
                type="submit" 
                sx={{
                    mt: 1,
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',		
                    textDecoration: 'none',
                    fontSize: '10px',
                    fontFamily: 'Arvo, serif',
                    backgroundColor: `${secudary}`,
                    '&:hover': {
                    color: '#013039',
                    cursor: 'pointer',
                    transition: '0.3s ease-in',
                    },
                }}			
                fullWidth
                //onClick={submitForm}
			> 
				{opcao}
			</Button>
			</form>
		</Paper>	
	)

}
export default Formservicos;