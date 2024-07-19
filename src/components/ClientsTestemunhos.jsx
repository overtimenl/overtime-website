import { useEffect, useState} from 'react';
import {Box, Divider, Grid, Card, CardContent, Typography, Button} from '@mui/material';
import Carousel from "react-elastic-carousel";
import ClientBox from "./ClientBox";
import Item from "./Item";
import classes from "./Clients.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const slids = [
	{
		id: 1,
		work: 'APP web e Mobile',
		name: 'Paulo Gustavo',
		conteudo: 'Incrivelmente satisfeito com a aplicação que a Overtime desenvolveu para nós! Facilitou muito nossas operações diárias. Obrigado pela inovação',
		data: '2021-03-25',
		more: 'saber mais'
	},
	{
		id: 2,
		work: 'Produção Multimidia',
		name: 'Restaurante Mbanzetu',
		conteudo: 'A produção multimídia da Overtime deu vida à nossa marca de uma maneira que nunca imaginamos. Estamos impressionados e agradecidos por sua visão criativa!',
		data: '2021-03-25',
		more: 'saber mais'
	},
	{
		id: 3,
		work: 'Marketing Digital',
		name: 'Colégio Miguel Mauel Mateus',
		conteudo: 'O marketing estratégico da Overtime trouxe resultados tangíveis para nossos negócios. Agradecemos pela abordagem proativa e pelos insights valiosos.',
		data: '2021-03-25',
		more: 'saber mais'
	},
	{
		id: 4,
		work: 'APP web e Mobile',
		name: 'Imperial Gestor',
		conteudo: 'Agradecemos à Overtime por traduzir nossas ideias em uma experiência web excepcional. A navegação intuitiva e o design atraente são elogiados por nossos clientes',
		data: '2021-03-25',
		more: 'saber mais'
	},
	{
		id: 5,
		work: 'APlicação Desktop',
		name: 'Afonso Ndimbala',
		conteudo: 'A aplicação desktop da Overtime simplificou nossos processos internos de maneira eficiente. Muito obrigado pela eficácia e profissionalismo.',
		data: '2021-03-25',
		more: 'saber mais'
	},
	{
		id: 6,
		work: 'APP web e Mobile',
		name: 'Ombala do Saber',
		conteudo: 'A equipe da Overtime não só entregou um site incrível, mas também foi excepcionalmente colaborativa durante todo o processo. Obrigado pela parceria',
		data: '2021-03-25',
		more: 'saber mais'
	},
];


function ClientsTestemunhos(props) {

	const { primery, secudary } = props;
	const [slides, setSlides] = useState(slids)
	const settings = {
	  dots: true,
	  infinite: false,
	  speed: 500,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  initialSlide: 0,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        initialSlide: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	}

	/*
		useEffect(() => {
			let tot = 0;  
	        fetch("http://localhost:8000/messagedb/")
	        .then((response)=>response.json())
	        .then((responseJson)=>{
	            //console.log(responseJson)            
	            setSlides(responseJson)

	        })  
	        
	        
	    }, [])
	*/

	return(
		<Box
			sx={{}}
		>
			<Box 
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
					//position: 'relative',
					color: `${primery}`,
					mt: 5

				}}
			>	
				<Typography
					variant="p"
					sx={{
						fontSize: '1rem',
						fontWeight: 700,
						'@media (max-width: 800px)': { fontSize: '.9rem' },
						'@media (max-width: 320px)': { fontSize: '.7rem' },
					}}
				>
					lêr nossos
				</Typography>
				<Typography					
					sx={{
						fontSize: '2.5rem',
						fontWeight: 700,
						fontFamily: 'Arvo, serif',
						'@media (max-width: 800px)': { fontSize: '1.8rem' },
						'@media (max-width: 400px)': { fontSize: '1.4rem' },
						'@media (max-width: 320px)': { fontSize: '1rem' },
					}}

				>
			       Testemunhos de Clientes
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
					//position: 'relative',
					justifyContent: 'center',
					alignItems: 'center',
					mt: 5,
					'@media (max-width: 800px)': { 
            			display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
            		},
				}}
			> 
				{slides.length == 0? 
					<Typography sx={{m:'1px auto'}}>Não há publicidades</Typography>
				:
					<div className={classes.carousel}>
						<Slider {...settings}>
							{slides.map((slide, index) => {
			         			return(			         				
			         					<Card
			         						key={index}			         					
				         					sx={{ maxWidth: 300, m: 1 }}
				         					elevation={0}
				         				>
											<Typography 
												sx={{
											 		fontSize: 10,
											 		fontFamily: 'Arvo, serif',
											 		float: 'right',
											 		mr: .5,
											 		p: 1
											 	}} 
											 >
								          	 {slide.work}
								        	</Typography>
											<CardContent>				
										        <Typography 
										        	sx={{
										        		mb: .5, 
										        		fontSize: '.8rem',
														fontWeight: 700,
														fontFamily: 'Arvo, serif',
														mt: 1
										        	}} 
										        >
										          {slide.data}
										        </Typography>
										        <Typography 
										        	sx={{
														fontSize: '.7rem',
														//fontWeight: 700,
														fontFamily: 'Arvo, serif',
														textAlign: 'justify',
														//textAlign: 'center',
														//width: 225,
													}}
										        >		          
										          {slide.conteudo}
										        </Typography>
										        <Typography 
										        	sx={{
														fontSize: '.7rem',
														fontWeight: 700,
														fontFamily: 'Arvo, serif',
														//'@media (max-width: 800px)': { fontSize: '1.5rem' },
														}}											
										        >
										          {slide.name}
										        </Typography>
										        
											</CardContent>
											<Button 
													sx={{
									                    ml: 1,
									                    p: .5,
									                    color: 'white',
									                    border: 'none',
									                    cursor: 'pointer',		
									                    textDecoration: 'none',
									                    fontWeight: 'bold',
									                    borderRadius: '5px 5px 5px 5px',
									                    fontSize: '10px',								                   
									                    backgroundColor: '#ED1C07',
									                    '&:hover': {
									                    color: '#171010',
									                    //backgroundColor: 'white',
									                    cursor: 'pointer',
									                    transition: '0.3s ease-in',
									                    },
									                }}	
												>
												contactar
											</Button>
											
										</Card>
			         				
			         			)
			         		})}
						</Slider>
		        	</div>
				}
			</Box> 
		</Box>
	)

}
export default ClientsTestemunhos;