import { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { Web } from "@mui/icons-material";



function FeedActive(props) {

	const { primery, secudary } = props;
	const [total, setTotal] = useState(0);


    useEffect(() => {

        fetch("http://localhost:8000/publicidadesdb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            setTotal(responseJson.length)
        })  

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
                PUBLICIDADES ATIVAS
            </Typography>
			
			<Box
	            sx={{
	                mt: 1,
	                display: 'flex',
	                alignItems: 'center',
	                justifyContent: 'space-around',
	            }}
	        >
	        	
            <Web 
                sx={{
                    fontSize: '55px', 
                    color: `${secudary}`,
                    '@media (max-width: 400px)': { fontSize: '40px', mt: 2},
                }}
            />
            <Typography sx={{ mt: 3.5, fontSize: '.7rem', fontWeight: 'bold',   }}>{'Qtd:'}</Typography>
            <Typography 
                component={'h1'}    
                sx={{                            
                     mb: -2.6,
                     ml: .5,
                     mt: -.8,
                    textAlign: 'center',                                
                    color: 'black',
                    fontSize: '3.5rem',												
					fontFamily: 'Tiro Tamil, serif',
                    '@media (max-width: 800px)': { fontSize: '3rem', mt: .1,  },
                    '@media (max-width: 320px)': { fontSize: '1rem', mt: 1.4,  },
                   
                }}
            >
                {total}
            </Typography>
	        </Box>
		</Box>
	)
}
export default FeedActive;