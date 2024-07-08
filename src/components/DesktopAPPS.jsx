import {React, useEffect, useState} from 'react';
import {Box, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button} from '@mui/material';
import Carousel from "react-elastic-carousel";
import ClientBox from "./ClientBox";
import Item from "./Item";
import classes from "./Clients.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { WhatsApp } from '@mui/icons-material';

const sli = [
	{
		id: 1,
		work: 'APP Desktop',
		name: 'GESTÃO DE RESTAURANTE',
		img: 'restaurantApp.png',
		conteudo: 'Incrivelmente satisfeito com a aplicação que a Overtime desenvolveu para nós! Facilitou muito nossas operações diárias. Obrigado pela inovação',
		more: 'saber mais',
		whats: ''

	},
	{
		id: 2,
		work: 'APP Desktop',
		name: 'GESTÃO DE LOJAS',
		img: 'storeApp.png',
		conteudo: 'A produção multimídia da Overtime deu vida à nossa marca de uma maneira que nunca imaginamos. Estamos impressionados e agradecidos por sua visão criativa!',
		more: 'saber mais',
		whats: ''
	},
	{
		id: 3,
		work: 'APP Desktop',
		name: 'GESTÃO DE RESTAURANTE',
		img: 'restaurantApp.png',
		conteudo: 'O marketing estratégico da Overtime trouxe resultados tangíveis para nossos negócios. Agradecemos pela abordagem proativa e pelos insights valiosos.',
		more: 'saber mais',
		whats: '' 
	},
	{
		id: 4,
		work: 'APP Desktop',
		name: 'GESTÃO DE RESTAURANTE',
		img: 'restaurantApp.png',
		conteudo: 'Agradecemos à Overtime por traduzir nossas ideias em uma experiência web excepcional. A navegação intuitiva e o design atraente são elogiados por nossos clientes',
		more: 'saber mais',
		whats: ''
	},
	{
		id: 5,
		work: 'APP Desktop',
		name: 'GESTÃO DE LOJAS',
		img: 'storeApp.png',
		conteudo: 'A aplicação desktop da Overtime simplificou nossos processos internos de maneira eficiente. Muito obrigado pela eficácia e profissionalismo.',
		more: 'saber mais',
		whats: ''
	},
	{
		id: 6,
		work: 'APP Desktop',
		name: 'GESTÃO DE LOJAS',
		img: 'storeApp.png',
		conteudo: 'A equipe da Overtime não só entregou um site incrível, mas também foi excepcionalmente colaborativa durante todo o processo. Obrigado pela parceria',
		more: 'saber mais',
		whats: ''
	},
];


function DesktopAPPS(props) {

	const { primery, secudary } = props;
	const [slides, setSlides] = useState([]);

	const settings = {
	  dots: true,
	  infinite: false,
	  speed: 500,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  initialSlide: 0,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
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

	useEffect(() => {
    	//setCurrentSlide(0);
    	fetch("http://localhost:8000/worksdb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
           setSlides(responseJson)
        })  

  	}, []);

	return(
		<Box
		>
          <Box
			sx={{
				display: 'flex',
				//position: 'relative',
				justifyContent: 'center',
				alignItems: 'center',
				'@media (max-width: 800px)': { 
        			display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
        		},
			}}
		> 
			{slides.length == 0? 
				<Typography sx={{m:'1px auto'}}>Não há Aplicações Desktop</Typography>
			:
				<div className={classes.carousel}>
					<Slider {...settings}>
						{slides.map((slide, index) => {
		         			return(
		         				<Card  key={index} elevation={0} sx={{ maxWidth: 300, m: 1 }}>
							      	<Box
										sx={{
											display: 'flex',	
											//mt: 3,
											//ml: .5,
										}}
									>
										<Typography
											component={'div'}
											sx={{mt: 1}}
										>
											<img src={new URL(`../assets/works/${slide.image}`, import.meta.url)} width={30} height={25}/>
										</Typography>

										<Box
							            	sx={{
							            		display: 'flex', 
							            		flexDirection: 'column',
							            		justifyContent: 'start',
							            		alignItems: 'start',
							    				textAlign: 'start',
							            	}}
							            >
							              	<Typography			                 
								                variant="p" 
								                component={'div'}
								                sx={{
								              		fontWeight: 800,
								              		mt: 1,
										            fontSize: '18px',
										            fontFamily: 'Mulish, sans',
								              		color: `${primery}`,
								              		ml: .5,
								              		'@media (max-width: 500px)': { 
								            			//fontSize: '2.5rem',	
								            			//mt: -2,	 
							            			},
							              		}}

							            	>
							              
							                  {slide.name}
							              	</Typography>  
								     	</Box>									
									</Box>
							      <CardContent>							       			
							        <Typography 
							        	sx={{
											fontSize: '.8rem',
											//fontWeight: 700,
											fontFamily: 'Arvo, serif',
											textAlign: 'justify',
											//width: 225,
										}}
							        >		          
							          {slide.conteudo}
							        </Typography>
							      </CardContent>
							      <CardActions>
							        <Button 
							        	size="small"
							        	sx={{							                   
						                    color: 'white',
						                    border: 'none',
						                    cursor: 'pointer',		
						                    textDecoration: 'none',
						                    fontWeight: 'bold',
						                    borderRadius: '5px 5px 5px 5px',
						                    fontSize: '9px',								                   
						                    backgroundColor: '#ED1C07',
						                    '&:hover': {
							                    color: '#171010',
							                    //backgroundColor: 'white',
							                    cursor: 'pointer',
							                    transition: '0.3s ease-in',
						                    },
						                }}	
							        >
							        	Saber Mais..
							        </Button>
							        <IconButton>
									  <WhatsApp 
									  	sx={{
									  		color: 'green',
									  		fontSize: '15px',	
									  	}}
									 />
									</IconButton>
							   
							      </CardActions>
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
export default DesktopAPPS;