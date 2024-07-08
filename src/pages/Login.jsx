import {useState} from 'react';
import axios from 'axios';
import classes from'./Login.module.css';
import { Person, Lock } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';

function Login(props) {

	const { primery, secudary } = props;
	const [user, setUsere] = useState({ email: '', password: '' });
	const [message, setMessage] = useState('');
	const [show, setShow] = useState('password');
	let navigate = useNavigate();


	const handleChannge =(e)=>{
		setUsere({...user,[e.target.name]: e.target.value})
	};

	const submitForm = (e)=>{
		e.preventDefault();

		console.log(user.password)
		console.log(user.email)

		const formData = new FormData();
		formData.append("username", user.email);
		formData.append("password", user.password);

		//console.log(formData)

		axios({
			method: 'POST',
			url: 'http://localhost:8000/jwtauth/login',
			data: formData,
			config: { headers: {'content-type': 'application/x-www-form-urlencoded'}}
		}).then(response => {
			//console.log(response.data.access_token)
			if(response.data.type_user === "SOCIALMIDIAS"){
				navigate(`/SocialManager/${response.data.access_token}`);
			} else if(response.data.type_user === "SELLER") {
				navigate(`/Sellers/${response.data.access_token}`);
			} else if(response.data.type_user === "ADM"){
				navigate(`/Manegerpage/${response.data.access_token}`);
			}
		}).catch(response => {
			setMessage(response.response.data.detail)
			//console.log(response.response.data.detail)
		})

	};

	return(
		<Box className={classes.box}>
			<div className={classes.wrapper}>
				<form onSubmit={submitForm}>
					<h1>Login</h1>
					<div className={classes.inputBox}>
						<input 
							type="email" 
							placeholder="Informe seu email"
							name="email"
							value={user.email}
							onChange={handleChannge}
							required
						/>
						<Person className={classes.icon} />
					</div>
					<div className={classes.inputBox}>
						<input 
							type={show} 
							placeholder="Sua senha"
							name="password"
							value={user.password} 
							onChange={handleChannge}	 
							required
						/>
						<Lock className={classes.icon} />
					</div>

					<div className={classes.rememberForgot}>
						<label>
							<input 
								type="checkbox" 
								onClick={() => {show == 'password'? setShow('text') : setShow('password')}}
							/>
							Lembrar senha
						</label>
						<a href="#">Esqueceu a senha?</a>
					</div>

					<button onClick={submitForm} type="submit">Login</button>

					<Grid align="center" sx={{ mt: 1 }}>
						<Typography
							component="p"
								sx={{
										color: `${primery}`,
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

					<div className={classes.registerLink}>
						<p>Não tem uma conta? <a href="#">Criar conta</a></p>
					</div>
				</form>			
			</div>
		</Box>
	)
}
export default Login;