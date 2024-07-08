import { useEffect, useRef, useState } from "react";
import { PhotoCamera } from "@mui/icons-material";
import { Button, Divider, Paper, TextField,  Box, IconButton, Typography, Grid  } from "@mui/material";
import classes from "./Vendas.module.css";
import axios from 'axios';

const apps = [
    {
        id: 1,
        valor: 215000,
        app: 'Gestão Financeira e RH',
        client: 'Paulo Mingos',
        image: 'Fundo_GestApp01.png',
    },
    {
        id: 2,
        valor: 225000,
        app: 'Gestão de Restaurante',
        client: 'Nelito Mpanza',
        image: 'Fundo_GestApp02.jpg',
    },
    {
        id: 4,
        valor: 250000,
        app: 'Gestão De Colégios (escolas)',
        client: 'Miguel Mateus',
        image: 'Fundo_GestApp02.jpg',
    },
];

const clients = [
    {
        id: 1,
        name: 'Miguel Mateus',
        tipo: 'Individual',
        endereco: 'Luanda, viana, caop-b nº 23',
        link_insta: '',
        link_fb: '',
    },
    {
        id: 2,
        name: 'Paulo Mbanza',
        tipo: 'Individual',
        endereco: 'Luanda, viana, caop-b nº 23',
        link_insta: '',
        link_fb: '',
    },
    {
        id: 4,
        name: 'Shoop Midro',
        tipo: 'Jurídica',        
        endereco: 'Luanda, viana, caop-b nº 23',
        link_insta: '',
        link_fb: '',
    },
];


function Formvendas(props) {


	//const classes = useStyles();
	const { foto, anuncio, opcao, setAnuncio, setOpenModel, primery, secudary } = props;
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
        valor: '',
        app: '',
        client: '',
        image: '',  
    });


    const submitForm = async (e)=>{
        e.preventDefault();
         if(opcao === "EDITAR"){
            if(anunciar.title != ''){
                const formData = new FormData();
                formData.append("id", anuncio.id);
                formData.append("valor", anuncio.valor);
                formData.append("app", anuncio.app);
                formData.append("client", anuncio.client);                
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
                    setAnuncio({
                        id: '',
                        valor: '',
                        app: '',
                        client: '',
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
            if(anuncio.title != '' && anuncio.subtitle != '' && anuncio.descricao != '' && anuncio.more != ''){
                const formData = new FormData();
                formData.append("valor", anuncio.valor);
                formData.append("app", anuncio.app);
                formData.append("client", anuncio.client);       
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
                setAnuncio({
                    id: '',
                    valor: '',
                    app: '',
                    client: '',
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
		console.log(anuncio)
        if (opcao === "EDITAR") {
			setAnunciar({
                id: anuncio.id,
                valor: anuncio.valor,
                app: anuncio.app,
                client: anuncio.client,
                image: anuncio.image,
			})
			
        }
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])

     const handleChannge=(e)=>{
		setAnuncio({...anuncio,[e.target.name]: e.target.value})
	};

	return(
		<Paper  elevation={0}>
			<form 
				className={classes.formContact} 
				onSubmit={submitForm}
			>
                <div className="input-box">
                    <input 
                        className={classes.input_box}
                        type="number" 
                        placeholder="Informe o valor"
                        name="valor"
                        onChange={handleChannge}
                        value={anuncio.valor} 
                    />
                </div>

				<div className="input-box">
					<select 							 
						id="pet-select"
						name="app"							
						onChange={handleChannge}
						value={anuncio.app}
					>
						<option value="">Selecione a aplicação</option>
                        {apps.map((applicacao, index) => {
                            return(
                                <option key={index} value={applicacao.app}>
                                    {applicacao.app}
                                </option>
                            )
                        })}							
					</select>
				</div>		

                <div className="input-box">
                    <select                              
                        id="pet-select"
                        name="client"                          
                        onChange={handleChannge}
                        value={anuncio.client}
                    >
                        <option value="">Selecione a aplicação</option>
                        {clients.map((cliente, index) => {
                            return(
                                <option key={index} value={cliente.name}>
                                    {cliente.name}
                                </option>
                            )
                        })}                         
                    </select>
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
                            COMPROVANTE
                        </Typography>	                       	
                </IconButton>  
                    
                    <Box style={{
                            marginTop: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <img							
                            src={(selectedImage === undefined) ? new URL(`../../assets/sellchecks/${img}`, import.meta.url) : URL.createObjectURL(selectedImage)}//{ foto : }
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
export default Formvendas;