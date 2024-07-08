import { useCallback, useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography} from "@mui/material";
import classes from "./Publicidades.module.css";

/*const slides = [
	{
		id: 1,
		title: 'APlicação Desktop',
		subtitle: 'Gestão Financeira e RH',
		descricao: 'Controle de fluxo de caixa, folhas de salários, cadastros de Funcionários ...',
		image: 'Fundo_GestApp01.png',
		more: 'saber mais'
	},
	{
		id: 2,
		title: 'APlicação Desktop',
		subtitle: 'Gestão de Restaurante',
		descricao: 'Controle de Entradas estoque, cardapio, folhas de salários, cadastros de Funconários ...',
		image: 'Fundo_GestApp02.jpg',
		more: 'saber mais'
	},
	{
		id: 3,
		title: 'Marketing Digital',
		subtitle: 'Cuidamos Da Sua Presença Digital',
		descricao: 'Criamos a sua identidade virtual, redes sociais anúncios e mais ...',
		image: 'fundo_Gest07.png',
		more: 'saber mais'
	},
	{
		id: 4,
		title: 'APlicação Desktop',
		subtitle: 'Gestão De Colégios (escolas)',
		descricao: 'Cadastro de alunos, turmas, hostoricos, Funcionários, controle Financeiro e mais   ...',
		image: 'fundo_GestApp03.jpg',
		more: 'saber mais'
	},
];
*/
function Publicidades() {
	//const classes = useStyles();
	const [slides, setSlides] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
  	const slideLength = slides.length;

  	const autoScroll = true;
  	let slideInterval;
  	let intervalTime = 5000;

  	const nextSlide = () => {
    	setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    	//console.log("next");
  	};

  	const prevSlide = () => {
    	setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    	//console.log("prev");
  	};

  	function auto() {
  	  slideInterval = setInterval(nextSlide, intervalTime);
  	}

  	useEffect(() => {
    	setCurrentSlide(0);
    	fetch("http://localhost:8000/publicidadesdb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
           setSlides(responseJson)
        })  

  	}, []);


  	useEffect(() => {
    	if (autoScroll) {
      		auto();
    	}
    	return () => clearInterval(slideInterval);
  	}, [currentSlide]);


	return (
		<>
			{slides.length == 0? 
                <Typography sx={{m:'1px auto'}}>Não há publicidades</Typography>
                :
				<div className={classes.slider}>

					<a className={classes.prev} onClick={prevSlide}>&#10094;</a>
					<a className={classes.next} onClick={nextSlide}>&#10095;</a>
					
					{slides.map((slide, index) => {
						return (
							<div  key={index} className={index === currentSlide ?
								`${classes.myslider} ${classes.current}` : `${classes.myslider}`} >
								{index === currentSlide && (
									<>
										
											<img src={new URL(`../assets/marketing/${slide.image}`, import.meta.url)}  alt="Slide"/>
											<div 
												className={classes.sombra}
											>
												<div className={classes.content}>
													<h2>{slide.title}</h2>
													<h4>{slide.subtitle}</h4>
													<p>{slide.descricao}</p>
													<Button 
														sx={{
										                    mt: .5,
										                    color: 'white',
										                    border: 'none',
										                    cursor: 'pointer',		
										                    textDecoration: 'none',
										                    fontWeight: 'bold',
										                    borderRadius: '40px 40px 40px 40px',
										                    fontSize: '12px',								                   
										                    backgroundColor: '#ED1C07',
										                    '&:hover': {
										                    color: '#171010',
										                    //backgroundColor: 'white',
										                    cursor: 'pointer',
										                    transition: '0.3s ease-in',
										                    },
										                }}			
													>
														Saber mais
													</Button>
												</div>
											</div>
									</>
									
								)}								
							</div>
						)
	                })

					}
					
				</div>
	
			}
			
		</>
	)
}

export default Publicidades