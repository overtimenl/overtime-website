import { Box, Button, Paper, Typography } from "@mui/material";

function Vendabox({total, data, app, client, comprovante, setOpenModel,  primery, secudary}) {
  return (
    <Paper elevation={0} sx={{p: 1}}>
        <Box
          sx={{ 
          mt: 1,
          mb: 1,                
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', 
          justifyItems: 'center',
          }}
      	>
          <Typography
              variant="caption"
              sx={{  
                  fontWeight: 'bold',
                  fontFamily: 'Arvo, serif',
                  fontSize: '.5rem',               
              }}
              >
              TOTAL $:
          </Typography>
          <Typography
              component={'div'}
              sx={{  
                  fontWeight: 700,
                  color:  `${primery}`,                        
                  fontFamily: 'Arvo, serif',
                  fontSize: '.8rem',  
                  
              }}
              >
              {total}                    
          </Typography>
      	</Box>
		  <Box
		      sx={{ 
		      mt: 1,
		      mb: 1,                
		      color: 'black',
		      display: 'flex',
		      flexDirection: 'column',
		      justifyContent: 'center', 
		      justifyItems: 'center',
		      }}
		  >

		      <Typography
		          variant="caption"
		          sx={{  
		              fontWeight: 'bold',
		              fontFamily: 'Arvo, serif',
		              fontSize: '.5rem',               
		          }}
		          >
		          APLICAÇÃO:
		      </Typography>
		      <Typography
		          component={'div'}
		          sx={{  
		              fontWeight: 'bold',
		              color: `${primery}`,                        
		              fontFamily: 'Arvo, serif',
		              fontSize: '.8rem',  
		              
		          }}
		          >
		          {app}                    
		      </Typography>
		  </Box>

		  <Box
		      sx={{ 
		      mt: 1,
		      mb: 1,                
		      color: 'black',
		      display: 'flex',
		      flexDirection: 'column',
		      justifyContent: 'center', 
		      justifyItems: 'center',
		      }}
		  >

		      <Typography
		          variant="caption"
		          sx={{  
		              fontWeight: 'bold',
		              fontFamily: 'Arvo, serif',
		              fontSize: '.5rem',               
		          }}
		          >
		          CLIENTE:
		      </Typography>
		      <Typography
		          component={'div'}
		          sx={{  
		              fontWeight: 'bold',
		              color: `${primery}`,                        
		              fontFamily: 'Arvo, serif',
		              fontSize: '.8rem',  
		              
		          }}
		          >
		          {client}                    
		      </Typography>
		  </Box>
      
      
        <Box
            sx={{ 
            mt: 1,
            mb: 1,                
            color: 'black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', 
            justifyItems: 'center',
            }}
        >

          <Typography
              variant="caption"
              sx={{  
                  fontWeight: 'bold',
                 fontFamily: 'Arvo, serif',
                  fontSize: '.5rem',               
              }}
              >
              DATA:
          </Typography>
          <Typography
              component={'div'}
              sx={{  
                  fontWeight: 'bold',
                  color: `${primery}`,                        
                  fontFamily: 'Arvo, serif',
                  fontSize: '.8rem',  
                  
              }}
              >
              {data}                    
          </Typography>
      </Box>
      <Box>
          <img    
            src={new URL(`../../assets/sellchecks/${comprovante}`, import.meta.url)}//{ foto : }
            //style={styles.image}
            width={225}
            height={250}
            alt="Thumb"
          />
      </Box>
      <Button 
		//type="submit" 							
          sx={{
            m: '2px 0',
            color: 'white',
            border: 'none',
            cursor: 'pointer',		
            textDecoration: 'none',
            fontSize: '12px',
            fontFamily: 'Roboto, sans-serif',
            backgroundColor: '#00809b',
            '&:hover': {
            color: '#013039',
            cursor: 'pointer',
            transition: '0.3s ease-in',
            },
          }}			
          onClick={()=> setOpenModel(false)}
        > 
          OK
      </Button>
    </Paper>
  )
}

export default Vendabox;