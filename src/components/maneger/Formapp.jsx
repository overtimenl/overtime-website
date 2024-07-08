import { useEffect, useRef, useState } from "react";
import { PhotoCamera } from "@mui/icons-material";
import { Button, Divider, Paper, TextField,  Box, IconButton, Typography, Grid  } from "@mui/material";
import classes from "./Form.module.css";
import axios from 'axios';

function Formapp(props) {


	//const classes = useStyles();
	const { foto, aplicacao, opcao, setAplicacao, setOpenModel, primery, secudary } = props;
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

    const [anunciar, setAnunciar] = useState({
        id: '',
        name: '',
        tipo: '',
        valor: '',
        link_fb: '', 
        link_inst: '',
        image: '',
    });

    const submitForm = async (e)=>{
        e.preventDefault();
         if(opcao === "EDITAR"){
            if(anunciar.title != ''){
                const formData = new FormData();
                formData.append("id", aplicacao.id);
                formData.append("name", aplicacao.name);
                formData.append("tipo", aplicacao.tipo);
                formData.append("valor", aplicacao.valor);
                formData.append("link_fb", aplicacao.link_fb);
                formData.append("link_inst", aplicacao.link_inst);
                formData.append("image", selectFile.current.files[0])
                axios({
                    method: 'put',
                    url: 'http://localhost:8000/publicidadesdb/update',
                    data: formData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
                .then(function (response) {
                    //handle success
                    console.log(response)
                    setCor('#00809b')
                    setMessage('Publicidade atulizado com sucesso!');
                    setAplicacao({
                       	id: '',
				        name: '',
				        tipo: '',
				        valor: '',
				        link_fb: '', 
				        link_inst: '',
				        image: '',  
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
                setCor('red');
                setMessage("Tem algum campo vazio. VERIFICA!")
            }
        } else {
            if(aplicacao.name != '' && aplicacao.tipo != '' && aplicacao.valor > 0 && aplicacao.link_fb != '' && aplicacao.link_inst != ''){
                const formData = new FormData();
                formData.append("name", aplicacao.name);
                formData.append("tipo", aplicacao.tipo);
                formData.append("valor", aplicacao.valor);
                formData.append("link_fb", aplicacao.link_fb);
                formData.append("link_inst", aplicacao.link_inst);
                formData.append("image", selectFile.current.files[0])
              
                axios({
                    method: 'post',
                    url: 'http://localhost:8000/publicidadesdb/create',
                    data: formData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
            .then(function (response) {
             //handle success
                //console.log(response)
                setCor('#00809b')
                setMessage('Publicidade cadastrada com sucesso!');
                setAplicacao({
                    id: '',
			        name: '',
			        tipo: '',
			        valor: '',
			        link_fb: '', 
			        link_inst: '',
			        image: '',  
            	});     
                setSelectedImage()
                setImg('sem-foto.jpg');
                setOpenModel(false)
                //console.log(user)
                    
                //console.log(Number(user.idcountry))
                    
            }).catch(function (response) {
                //handle error
                console.log(response)
            });

        } else {
            setCor('red');
            setMessage("Tem algum campo vazio. VERIFICA!")
        }
        //console.log(anuncio)
    }   

    };

    useEffect(() => {

        if (opcao === "EDITAR") {
			
			
        }
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])

     const handleChannge=(e)=>{
		setAplicacao({...aplicacao,[e.target.name]: e.target.value})
	};

	return(
		<Paper  elevation={0}>
			<form 
				className={classes.formanucio} 
				onSubmit={submitForm}
			>
				<div className="input-box">
					<select 							 
						id="pet-select"
						name="tipo"							
						onChange={handleChannge}
						value={aplicacao.tipo}
					>
						<option value="">Selecione o tipo</option>
						<option	value="APP Desktop">
							Aplicações Desktop
						</option>
						<option value="App Web e Mobile">App Web e Mobile</option>
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
                    	value={aplicacao.name} 
					/>
				</div>

				<div >
					<input 
						className={classes.input_box}
						type="number" 
						placeholder="Informe o valor"
						name="valor"
						onChange={handleChannge}
                    	value={aplicacao.valor} 
					/>
				</div>

				<div >
					<input 
						className={classes.input_box}
						type="text" 
						placeholder="Link redes facebook"
						name="link_fb"
						onChange={handleChannge}
                    	value={aplicacao.link_fb} 
					/>
				</div>

				<div >
					<input 
						className={classes.input_box}
						type="text" 
						placeholder="Link redes instagram"
						name="link_insta"
						onChange={handleChannge}
                    	value={aplicacao.link_inst} 
					/>
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
                            LOGO
                        </Typography>	                       	
                </IconButton>  
                    
                    <Box style={{
                            marginTop: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <img							
                            src={(selectedImage === undefined) ? new URL(`../../assets/applogos/${img}`, import.meta.url) : URL.createObjectURL(selectedImage)}//{ foto : }
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
export default Formapp;