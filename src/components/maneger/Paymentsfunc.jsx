import { Box, List, Divider, Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { ForwardToInbox, MonetizationOn, ToggleOn, ToggleOff,Visibility, VisibilityOff, AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Formfuncionario from './Formfuncionario';
import Deletefuncionario from './Deletefuncionario';
import Paymentbox from './Paymentbox';
import Model from "../Model";

function createData(id, name, valor, tipo, servico, id_estrageiro, data_create, image) {
  return {id, name, tipo, valor, servico, id_estrageiro, data_create, image};
}


const rows = [
    createData(1, 'Pedro Mzongi', 2000, 'VENDA','MIDIAS SOCIAIS', '826432FETR45435', '10 de julho de 2023', 'check-sample.jpg'),
    createData(2, 'Nzimba Pedro', 1500, 'SALÁRIO','DESIGN', '826432FETR45435', '10 de julho de 2023', 'check-sample.jpg'),
    createData(3, 'Florinda Miranda', 1000, 'SERVIÇO','DEV', '826432FETR45435', '10 de julho de 2023', 'check-sample.jpg'),
    createData(4, 'Jacito Milto', 2225, 'VENDA','MIDIAS SOCIAIS', '826432FETR45435', '10 de julho de 2023', 'check-sample.jpg'),
    createData(5, 'Mzinga Phanzo', 1200, 'SERVIÇO','MIDIAS SOCIAIS', '826432FETR45435', '10 de julho de 2023', 'check-sample.jpg'),

    
];

function Paymentsfunc(props) {

  const { funcionario } = props;
  const [payments, setPayments] = useState(rows)
  const [total, setTotal] = useState(0);
  const [openModel, setOpenModel] = useState(false);
  const [opcao, setOpcao] = useState('');
  const [title, setTitle] = useState('');

  const [payment, setPayment] = useState({
      id: '',
      name: '',
      valor: 0,
      tipo: '',
      servico: '',
      id_estrageiro: '', 
      data_create: '', 
      image: ''
  });

  const handleAdd = () => {
        setOpcao('ADD');
        setTitle('ADD PUBLICIDADE');
        setOpenModel(true);
        setPayment({
          id: '',
          name: '',
          valor: 0,
          tipo: '',
          servico: '',
          id_estrageiro: '', 
          data_create: '', 
          image: ''

        })

    };
  

  useEffect(() => { 
    let tot = 0; 
     payments.forEach((deposito) => {

        tot += parseFloat(deposito.valor)
        //console.log(tot)
        
    })
    setTotal(tot.toFixed(2).toLocaleString("en-US", {style:"currency", currency:"USD"}));

  }, [])


  return(
    <>
      <Box
        sx={{ 
        mt: 1,                               
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
                fontFamily: 'Roboto, sans-serif',
                fontSize: '.8rem',               
            }}
            >
            FUNCIONÁRIO:
        </Typography>
        <Typography
            component={'div'}
            sx={{  
                fontWeight: 'bold',
                color: 'green',                        
                fontFamily: 'Roboto, sans-serif',
                fontSize: '1rem',  
                
            }}
            >
            {`${funcionario.name}`}                    
        </Typography>
      </Box>
      <Divider />
      <List sx={{ width: '100%', minWidth: 360, bgcolor: 'white' }}>
          {payments.length == 0 ?
              <Typography
                  sx={{ 
                          textAlign: 'center',
                          fontSize: '15px',                                                                     
                          fontFamily: 'Arvo, serif',
                          '@media (max-width: 800px)': { fontSize: '10px' },
                      }}
                  >
                  NENHUM DEPOSITO NO MOMENTO
              </Typography>
              :
              payments.map(saque =>
                  <Paymentbox key={saque.id} payment={saque} />
              )        
          }        
      </List>
      <Divider />
      <Paper>
          <Typography 
              component={'h1'}    
              sx={{                            
                  ml: 1,
                  textAlign: 'center',                            
                  display: 'flex',
                  alignItems: 'center',                      

              }}
          >
              <Typography sx={{ mt: 2, mr: 1, fontSize: '0.5', fontWeight: 'bold',   }}>{'TOTAL:'}</Typography>
              <Typography sx={{                                                                            
                      fontSize: '2rem',
                      color: 'black',
                      fontFamily: 'Arvo, serif',
                      '@media (max-width: 800px)': { fontSize: '1rem' },
                  }}
              >
                 $ {total}
              </Typography> 
          </Typography>
      </Paper>
       <Model
          title={title}
          openModel = {openModel}
          setOpenModel = {setOpenModel}
        >
              {
              //getComponent()
              }
        </Model>  
    </>
  )

}


export default Paymentsfunc;