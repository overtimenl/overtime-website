import { useEffect, useRef, useState } from "react";
import { PhotoCamera } from "@mui/icons-material";
import { Button, Divider, Paper, TextField,  Box, IconButton, Typography, Grid  } from "@mui/material";
import classes from "./Form.module.css";
import axios from 'axios';


function Formfuncionario(props) {

	const { foto, funcionaro, opcao, setFuncionaro, setOpenModel, primery, secudary } = props;
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

     /*const [funcionaro, setFuncionaro] = useState({
	    id: '',
	    name: '',
	    bi: '',
	    cell: '',
	    email: '',
      	endereco: '',
      	profissao: '',
      	data_create: '', 
      	image: '',
	 });*/

	 const submitForm = async (e)=>{
        e.preventDefault();
         if(opcao === "EDITAR"){
            if(anunciar.title != ''){
                const formData = new FormData();
                formData.append("id", funcionaro.id);
                formData.append("name", funcionaro.name);
                formData.append("bi", funcionaro.bi);
                formData.append("cell", funcionaro.cell);
                formData.append("emai", funcionaro.email);
                formData.append("endereco", funcionaro.endereco);
                formData.append("profissao", funcionaro.profissao);               
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
                    setFuncionaro({
                       	id: '',
					    name: '',
					    bi: '',
					    cell: '',
					    email: '',
				      	endereco: '',
				      	profissao: '',
				      	data_create: '', 
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
            if(funcionaro.name != '' && funcionaro.bi != '' && funcionaro.cell != '' && funcionaro.email != '' && funcionaro.endereco != '' && funcionaro.profissao != ''){
                const formData = new FormData();
               	formData.append("name", funcionaro.name);
                formData.append("bi", funcionaro.bi);
                formData.append("cell", funcionaro.cell);
                formData.append("emai", funcionaro.email);
                formData.append("endereco", funcionaro.endereco);
                formData.append("profissao", funcionaro.profissao); 
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
                setFuncionaro({
                    id: '',
				    name: '',
				    bi: '',
				    cell: '',
				    email: '',
			      	endereco: '',
			      	profissao: '',
			      	data_create: '', 
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
		//console.log(anuncio)
        if (opcao === "EDITAR") {
			
			
        }
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])

     const handleChannge=(e)=>{
		setFuncionaro({...funcionaro,[e.target.name]: e.target.value})
	};
    


	return(
		<Paper  elevation={0}>
			<form 
				className={classes.formanucio} 
				onSubmit={submitForm}
			>
				<div className="input-box">
					<input 
						className={classes.input_box}
						type="text" 
						placeholder="Informe o nome"
						name="name"
						onChange={handleChannge}
                    	value={funcionaro.name} 
					/>
				</div>
				<div className="input-box">
					<input 
						className={classes.input_box}
						type="text" 
						placeholder="Informe o nº do BI"
						name="bi"
						onChange={handleChannge}
                    	value={funcionaro.bi} 
					/>
				</div>
				<div className="input-box">
					<input 
						className={classes.input_box}
						type="text" 
						placeholder="Informe o telefone"
						name="cell"
						onChange={handleChannge}
                    	value={funcionaro.cell} 
					/>
				</div>
				<div className="input-box">
					<input 
						className={classes.input_box}
						type="email" 
						placeholder="Informe o email"
						name="email"
						onChange={handleChannge}
                    	value={funcionaro.email} 
					/>
				</div>
				<div className="input-box">
					<input 
						className={classes.input_box}
						type="text" 
						placeholder="Informe o endereco"
						name="endereco"
						onChange={handleChannge}
                    	value={funcionaro.endereco} 
					/>
				</div>
				<div className="input-box">
					<select 							 
						id="pet-select"
						name="profissao"							
						onChange={handleChannge}
						value={funcionaro.profissao}
					>
						<option value="">Selecione o Profissão</option>
						<option	value="DESENVOLVIDOR">
							DESENVOLVIDOR
						</option>
						<option value="GESTOR DE MIDIAS">GESTOR DE MIDIAS</option>
						<option value="GESTOR EMPRESARIAL">GESTOR EMPRESARIAL</option>
                        <option value="CONTABILISTA">CONTABILISTA</option>
                        <option value="ECONOMISTA">ECONOMISTA</option>
						<option value="VENDEDOR">VENDEDOR</option>
                        <option value="RECURSOS HUMANOS">RECURSOS HUMANOS</option>
                        <option value="ORGANIZACAO">ORGANIZACAO</option>
						<option value="Outro">Outro</option>							
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
                            FOTO
                        </Typography>	                       	
                </IconButton>  
                    
                    <Box style={{
                            marginTop: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <img							
                            src={(selectedImage === undefined) ? new URL(`../../assets/funcionarios/${img}`, import.meta.url) : URL.createObjectURL(selectedImage)}//{ foto : }
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
export default Formfuncionario;