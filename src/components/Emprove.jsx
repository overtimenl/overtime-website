import { useState } from 'react';
import {Box, Typography, Divider, Grid} from '@mui/material';
import { DesktopWindows, Devices, SmartDisplayRounded } from '@mui/icons-material';
//import Marketing from '../assets/Marketing.png';


function Emprove(props) {

	const { primery, secudary } = props;

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
						color: '#fff',
						fontFamily: 'Arvo, serif',
						'@media (max-width: 800px)': { fontSize: '.8rem' },
						
					}}
				>
					Nossos números
				</Typography>
				<Typography					
					sx={{
						fontSize: '2.5rem',
						fontWeight: 700,
						color: '#fff',
						fontFamily: 'Arvo, serif',
						'@media (max-width: 800px)': { fontSize: '1.8rem' },
						'@media (max-width: 400px)': { fontSize: '1.2rem' },
						
					}}

				>
			       Clientes e Serviços
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
				<Grid sx={{ flexGrow: 1 }} container spacing={2}>
					<Grid item xs={12}>
						<Grid container justifyContent="space-between" spacing={2}>
							<Grid  item xs={12} sm={6}  md={4} lg={3}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										flexDirection: 'column',
										alignItems: 'center',
										mt: 5

									}}
								>
									<Box
										sx={{
											color: 'white',
											display: 'flex',
											justifyContent: 'center',											
											alignItems: 'center',
											border: `2px solid #fff`,							                
							                height: 180,
							                width: 180,
							                borderRadius: '50%',
							                mb: 2

										}}
									>
										<Typography
									    	sx={{
												fontSize: '3.5rem',												
												fontFamily: 'Tiro Tamil, serif',
												textAlign: 'center',
												
											}}
									    >
									    	15
									    </Typography>
										
									</Box>								
									<Typography 
										sx={{
											fontSize: '1.2rem',
											fontWeight: 700,
											color: '#fff',
											fontFamily: 'Arvo, serif',
											'@media (max-width: 800px)': { fontSize: '1.5rem' },

										}}
									>
								        Clientes
								    </Typography>
								</Box>
							</Grid>
							<Grid  item xs={12} sm={6} md={4} lg={3}>

								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										flexDirection: 'column',
										alignItems: 'center',
										mt: 5

									}}
								>
									<Box
										sx={{
											color: 'white',
											display: 'flex',
											justifyContent: 'center',											
											alignItems: 'center',
							               	border: `2px solid #fff`,							                
							                height: 180,
							                width: 180,
							                borderRadius: '50%',
							                mb: 2

										}}
									>
										<Typography
									    	sx={{
												fontSize: '3.5rem',												
												fontFamily: 'Tiro Tamil, serif',
												textAlign: 'center',
												
											}}
									    >
									    	07
									    </Typography>
									</Box>								
									<Typography 
										sx={{
											fontSize: '1.2rem',
											fontWeight: 700,
											color: '#fff',
											fontFamily: 'Arvo, serif',
											'@media (max-width: 800px)': { fontSize: '1.5rem' },

										}}
									>
										Aplicações Desktop								        
								    </Typography>								 
								</Box>

								
							</Grid>
							<Grid  item xs={12} sm={6} md={4} lg={3}>
								
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										flexDirection: 'column',
										alignItems: 'center',
										mt: 5

									}}
								>
									<Box
										sx={{
											color: 'white',
											display: 'flex',
											justifyContent: 'center',											
											alignItems: 'center',
							                border: `2px solid #fff`,							                
							                height: 180,
							                width: 180,
							                borderRadius: '50%',
							                mb: 2

										}}
									>
										<Typography
									    	sx={{
												fontSize: '3.5rem',												
												fontFamily: 'Tiro Tamil, serif',
												textAlign: 'center',
												
											}}
									    >
									    	10
									    </Typography>
										
									</Box>
									<Typography 
										sx={{
											fontSize: '1.2rem',
											fontWeight: 700,
											color: '#fff',
											fontFamily: 'Arvo, serif',
											'@media (max-width: 800px)': { fontSize: '1.5rem' },

										}}
									>
								       App Web e Mobile
								    </Typography>						
									
								</Box>
								
							</Grid>

							<Grid  item xs={12} sm={6} md={4} lg={3}>
								
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										flexDirection: 'column',
										alignItems: 'center',
										mt: 5

									}}
								>
									<Box
										sx={{
											color: 'white',
											display: 'flex',
											justifyContent: 'center',											
											alignItems: 'center',
											border: `2px solid #fff`,							                						                
							                height: 180,
							                width: 180,
							                borderRadius: '50%',
							                mb: 2

										}}
									>
										
										<Typography
									    	sx={{
												fontSize: '3.5rem',												
												fontFamily: 'Tiro Tamil, serif',
												textAlign: 'center',
												
											}}
									    >
									    	10
									    </Typography>
									</Box>						
									<Typography 
										sx={{
											fontSize: '1.2rem',
											fontWeight: 700,
											color: '#fff',
											fontFamily: 'Arvo, serif',
											'@media (max-width: 800px)': { fontSize: '1.3rem' },

										}}
									>
								        Produção Multimidia
								    </Typography>
								</Box>
								
							</Grid>

						</Grid>
					</Grid>
				</Grid>
			</Box>
		</>
	)

}
export default Emprove