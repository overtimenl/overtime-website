import { Avatar, Box, Typography } from '@mui/material';
import Bitcoins from '../assets/About-Over.png';

function About() {
  return (
    <Box
      sx={{  
        display: 'flex', 
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Box 
        sx={{
          m: 'auto',
          '@media (max-width: 800px)': { 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          },
        }}

      >
        <Typography
          component={'div'}
          className="headerContainer"        
        >
          <Typography
            component={'h1'}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: '40px',
              pl: 1,
              mb: 1,
              color: 'white',
              fontFamily: 'Arvo, serif',
              '@media (max-width: 800px)': { fontSize: '30px' },
            }}
          >
            SOBRE NÓS
          </Typography>
          <Typography
            component={'div'}
            variant="caption"
            sx={{
              pl: 1,
              pr: 1,
              textAlign: 'justify',
              color: 'white',
              fontFamily: 'Arvo, serif',
              fontSize: '.8rem',
            
            }}
          >
            Na OVERTIME, estamos comprometidos em impulsionar o futuro através da tecnologia. Somos uma equipe apaixonada e inovadora, especializada no desenvolvimento de Aplicações Desktop, Web e Mobile, Marketing Digital e Produção Multimídia. Nossa missão é criar soluções digitais que não apenas atendam, mas superem as expectativas dos nossos clientes.            
            Criamos aplicações robustas e experiências digitais envolventes. Seja para desktop, web ou mobile, entregamos soluções personalizadas que atendem às suas necessidades específicas. <br/>

            <strong>Marketing Estratégico:</strong>
             <br/>
            Nossa abordagem de marketing digital é focada em resultados. Desde a construção da presença online até campanhas eficazes, trabalhamos para impulsionar sua marca e alcançar seu público-alvo.

            Estamos comprometidos em oferecer inovação e excelência. Vamos colaborar para levar o seu negócio para o próximo nível digital.
            <br/>
            <strong>Trabalhe Conosco:</strong>
            <br/>
            Na OVERTIME, não apenas construímos soluções digitais; construímos parcerias duradouras. Deixe-nos ser o catalisador para o sucesso digital da sua empresa. Juntos, vamos transformar ideias em inovação!
          </Typography>

          <Typography
            component={'h1'}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: '20px',
              pl: 1,
              mt: 1,
              textAlign: 'justify',
              color: 'white',
              fontFamily: 'Arvo, serif',
              '@media (max-width: 800px)': { fontSize: '15px' },
            }}
          >
            Seja Benvindo a OVERTIME  - Transformando Ideias em Inovação!
          </Typography>
        </Typography>
      </Box>
      <Box  sx={{ display: { xs: 'none', md: 'flex' } }}>
        <img          
          src={Bitcoins}
          width={400} height={400}
        />
      </Box>
      
    </Box>
  );
}

export default About;
