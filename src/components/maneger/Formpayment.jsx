import { useEffect, useRef, useState } from "react";
import { PhotoCamera } from "@mui/icons-material";
import { Button, Divider, Paper, TextField,  Box, IconButton, Typography, Grid  } from "@mui/material";
import classes from "./Form.module.css";
import axios from 'axios';


function Formpayment(props) {

	const { foto, payment, opcao, setPayment, setOpenModel, primery, secudary } = props;
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
    const handleChannge=(e)=>{
        setPayment({...payment,[e.target.name]: e.target.value})
    };
    

    const submitForm = async (e)=>{
        e.preventDefault();
         if(opcao === "EDITAR"){
            if(anunciar.title != ''){
                const formData = new FormData();
                formData.append("id", payment.id);
                formData.append("name", payment.name);
                formData.append("valor", payment.valor);
                formData.append("tipo", payment.tipo);
                formData.append("servico", payment.servico);
                formData.append("id_estrageiro", payment.id_estrageiro);
                formData.append("data_create", payment.data_create);                 
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
                    setPayment({
                        id: '',
				        name: '',
				        valor: 0,
				        tipo: '',
				        servico: '',
				        id_estrageiro: '', 
				        data_create: '', 
				        image: ''
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
            if(payment.name != '' && payment.valor > 0 && payment.tipo != '' && payment.servico != ''){
                const formData = new FormData();
                formData.append("name", payment.name);
                formData.append("valor", payment.valor);
                formData.append("tipo", payment.tipo);
                formData.append("servico", payment.servico);
                formData.append("id_estrageiro", payment.id_estrageiro);
                formData.append("data_create", payment.data_create);        
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
                setPayment({
                    id: '',
			        name: '',
			        valor: 0,
			        tipo: '',
			        servico: '',
			        id_estrageiro: '', 
			        data_create: '', 
			        image: ''
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
                    	value={payment.name} 
					/>
				</div>
                <div className="input-box">
                    <input 
                        className={classes.input_box}
                        type="number" 
                        placeholder="Informe o valor"
                        name="valor"
                        onChange={handleChannge}
                        value={payment.valor} 
                    />
                </div>
				<div className="input-box">
					<input 
						className={classes.input_box}
						type="text" 
						placeholder="Informe a finalidade do pagamento"
						name="tipo"
						onChange={handleChannge}
                    	value={payment.tipo} 
					/>
				</div>
				<div className="input-box">
					<select 							 
						id="pet-select"
						name="servico"							
						onChange={handleChannge}
						value={payment.servico}
					>
						<option value="">Selecione o seviço</option>
						<option	value="APP Desktop">
							Aplicações Desktop
						</option>
						<option value="App Web e Mobile">App Web e Mobile</option>
						<option value="Marketing Digital">Marketing Digital</option>
						<option value="Produção Multimidia">Produção Multimidia</option>
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
                            src={(selectedImage === undefined) ? new URL(`../../assets/payments/${img}`, import.meta.url) : URL.createObjectURL(selectedImage)}//{ foto : }
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
export default Formpayment;