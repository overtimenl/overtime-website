import { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { LocalGroceryStore } from "@mui/icons-material";

function Totalvendas(props) {

	const { primery, secudary } = props;
	const [total, setTotal] = useState(0);

	const currentDate = new Date()
    const nextDate = new Date(currentDate)
    nextDate.setDate(currentDate.getDate() + 1)

    

	useEffect(() => {
        let tot = 100; 
        let ativos = [] 
        /*fetch("http://localhost:8000/anunciodb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson)
            responseJson.forEach((anuncio) => {
                tot += anuncio.vcampanha;
            })
            //console.log(ativos)
            setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
            //setTotal(ativos.length)

        })  
        */
        setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
    }, [])
	return(
		<Box
			sx={{            
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'start',
            }}
		>
			<Typography
	                variant="caption"
	                sx={{                    
	                    fontWeight: 'bold',
	                    fontFamily: 'Arvo, serif',
	                    fontSize: '1rem',
	                     '@media (max-width: 400px)': { fontSize: '.8rem', mb: -2},
	                }}
                >
                VALOR VENDAS
            </Typography>
			
			<Box
	            sx={{
	                mt: 1,
	                display: 'flex',
	                alignItems: 'center',
	                justifyContent: 'space-around',
	            }}
	        >
	        	
            <LocalGroceryStore 
            	sx={{
            		fontSize: '55px', 
            		color: `${secudary}`,
            		'@media (max-width: 400px)': { fontSize: '40px', mt: 2},
            	}}
            />            
            <Typography 
                component={'h1'}    
                sx={{                            
                     mb: -2.6,
                     ml: .5,
                     mt: -.8,
                    textAlign: 'center',                                
                    color: 'black',
                    fontSize: '2.1rem',												
					fontFamily: 'Tiro Tamil, serif',
                    '@media (max-width: 800px)': { fontSize: '1,8rem', mt: .1,  },
                    '@media (max-width: 320px)': { fontSize: '1rem', mt: 1.4,  },
                   
                }}
            >
                {total}
            </Typography>
	        </Box>
		</Box>
	)
}
export default Totalvendas;