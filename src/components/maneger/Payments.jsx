import { Box, Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { ForwardToInbox, Visibility, Task, VisibilityOff, AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import Formpayment from './Formpayment';
import Deletepayment from './Deletepayment';

const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "#ED1C07"
        },
    }
}); 

function createData(id, name, valor, tipo, servico, data_create, id_estrageiro, image) { 
  return { id, name, valor, tipo, servico, data_create, id_estrageiro, image };
}

const rows = [
  createData(1, 'Paulo Miranda', 2492, 'VENDA', 'APP Desktop', '10 de julho de 2023', '1828372hdgdss', 'check-sample.jpg',),
  createData(2, 'Jacita Pedro', 1292, 'SERVIÇO', 'APP Desktop', '05 de junho de 2023',  '1828372hdgdss', 'check-sample.jpg',),
  createData(3, 'Armindo Militão', 1492, 'SERVIÇO', 'APP Desktop', '10 de Agosto de 2023', '1828372hdgdss', 'check-sample.jpg',),
  createData(4, 'Nilde Zango', 12892, 'VENDA', 'APP Desktop', '08 de Agosto de 2023', '1828372hdgdss', 'check-sample.jpg',),
];

function Payments(props) {

	const { primery, secudary } = props;
	const [payments, setPayments] = useState(rows);
    const [total, setTotal] = useState(0);

	const classes = useStyles();    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModel, setOpenModel] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
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

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleAdd = () => {
        setOpcao('ADD');
        setTitle('ADD PAGAMENTO');
        setOpenModel(true);
        setPayment({
            id: '',
	        name: '',
	        valor: 0,
	        tipo: '',
	        servico: '',
	        id_estrageiro: '', 
	        data_create: '', 
	        image: 'sem-foto.jpg'
        });     
    };

    const handleEditar = (payment) => {
        setOpcao('EDITAR');
        setTitle('EDITAR PAGAMENTO');
        //console.log(venda);
        setOpenModel(true);
        setPayment({
         	id: payment.id,
         	name: payment.name,
        	valor: payment.valor,
        	tipo: payment.tipo,
        	servico: payment.servico,
        	id_estrageiro: payment.id_estrageiro,
        	data_create: payment.data_create,
        	image: payment.image,        	
            
        })
        
    };

    const handleDelete = (payment) => {  
        setOpcao('DELETE')     
        setTitle('EXCLUIR VPAGAMENTO');
        setOpenModel(true);
        setPayment({
            id: payment.id,
            name: payment.name,
        	valor: payment.valor,
        	tipo: payment.tipo,
        	servico: payment.servico,
        	id_estrageiro: payment.id_estrageiro,
        	data_create: payment.data_create,
        	image: payment.image,        	
            
        })
    };


    useEffect(() => {
        let tot = 0; 
        payments.forEach((payment) => {
            tot += parseFloat(payment.valor)
            console.log(tot)
        })
        setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
        /*
            let tot = 0;  
        fetch("http://localhost:8000/anunciodb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson)
            responseJson.forEach((anuncio) => {
                tot += parseFloat(anuncio.vcampanha)
                console.log(tot)
            })
            setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
            setAnuncios(responseJson)

        })  
        */

    }, []);

    const getComponent = () =>{
        switch (opcao) {
            case 'ADD':
                return <Formpayment foto={payment.image} payment={payment} opcao={opcao} setPayment={setPayment}  setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />;
            case 'EDITAR':           
                return  <Formpayment foto={payment.image} payment={payment} opcao={opcao} setPayment={setPayment}  setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />;
            case 'DELETE':
                return <Deletepayment payment={payment} setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />
            case 'CHECK':
                return //<Recibo payment={payment} setOpenModel={setOpenModel} primery={primery} secudary={secudary} />
            default: 
                return null;
        }
    }


	return(
		<>
			<Grid container >
                <Grid item xs={12} sm={8}>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '25px',                   
                            fontFamily: 'Arvo, serif',
                            '@media (max-width: 800px)': { fontSize: '15px' },
                        }}
                    >
                        PAGAMENTOS
                    </Typography>
                    <Typography
                            sx={{                    
                                fontSize: '15px',                                       
                                fontFamily: 'Arvo, serif',
                                '@media (max-width: 800px)': { fontSize: '10px' },
                            }}
                        >
                        Cadastre os pagamentos de qualquer atividade remunerada
                    </Typography>     
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box
                        sx={{
                            p: 1,
                            //bgcolor: '#E6E6E6',
                            mb: 1,
                            minWidth: 200,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,

                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 'bold',               
                                fontSize: '12px',
                                pl: 1,
                                pt: 1,
                                fontFamily: 'Arvo, serif',
                                '@media (max-width: 800px)': { fontSize: '8px' },
                            }}
                        >
                            Total Custo
                        </Typography>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Typography
                                    sx={{
                                        pl: 1,
                                        fontWeight: 'bold',
                                        fontSize: '20px',                                
                                        fontFamily: 'Tiro Tamil, serif',
                                        '@media (max-width: 800px)': { fontSize: '15px' },
                                    }}
                                >
                                    {showPassword ? `${total.toLocaleString("en-US", {style:"currency", currency:"USD"})}`: '****'}
                                </Typography>
                                <IconButton
                                    size="small"
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}                           
                                    >
                                    {showPassword ? <VisibilityOff sx={{ color: 'black', fontSize: '20px'}} /> : <Visibility  sx={{ color: 'black', fontSize: '20px'}} />}
                                </IconButton>
                            </div>              
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ float: 'right' }}>
                <Button 
                    type="submit" 							
                    sx={{
                        m: '2px 0',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',		
                        textDecoration: 'none',
                        fontSize: '12px',
                        fontFamily: 'Arvo, serif',
                        backgroundColor: `${secudary}`,
                        '&:hover': {
                        color: `${primery}`,
                        cursor: 'pointer',
                        transition: '0.3s ease-in',
                        },
                    }}			
                    onClick={()=> handleAdd()}
                > 
                    +
                </Button>
            </Box>

            <Box>
                {payments.length == 0? 
                <Typography sx={{m:'1px auto'}}>Não há publicidades</Typography>
                :
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                      <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                          <TableRow className={classes.root}>
                          
                              <TableCell                       
                                  align={'center'}
                                  style={{ minWidth: 150, fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px' }}
                              >
                                NAME
                              </TableCell>

                              <TableCell                       
                                  align={'center'}
                                  style={{ minWidth: 150, fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px' }}
                              >
                                VALOR
                              </TableCell>

                              <TableCell                       
                                  align={'center'}
                                  style={{ minWidth: 150, fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px' }}
                              >
                                TIPO
                              </TableCell>

                              
                              <TableCell                       
                                  align={'center'}
                                  style={{ minWidth: 150, fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px' }}
                              >
                                  DATA
                              </TableCell>                                  
                               
                              <TableCell                       
                                  align={'center'}
                                  style={{ minWidth: 150, fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px' }}
                              >
                                  OPÇÕES
                              </TableCell>
                      
                          </TableRow>
                      </TableHead>
                      <TableBody>
                      {payments
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                          return (
                          	<TableRow hover role="checkbox" tabIndex={-1} key={row.id}>        

                          		<TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                  {row.name}
                              	</TableCell>

                                <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                  {row.valor}
                                </TableCell>

                                <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                  {row.tipo}
                                </TableCell>

                                <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                  {row.data_create}
                                </TableCell>

                              
                                  
                                <TableCell align={'center'}>
                                    <IconButton 
                                        onClick={() =>  handleEditar(row)} 
                                        size="small" 
                                        aria-label="show 4 new mails" 
                                        color="inherit"
                                    >
                                        <Edit sx={{ color: `${primery}`, fontSize: '20px'}} />
                                      </IconButton>
                                      
                                     <IconButton
                                        onClick={() =>  handleDelete(row)} 
                                        size="small" 
                                        aria-label="show 4 new mails"                     
                                    >
                                        <Delete sx={{ color: 'red', fontSize: '20px'}} />
                                    </IconButton>       
                              </TableCell>
                          
                          </TableRow>
                          );
                      })}
                      </TableBody>
                      </Table>
                  </TableContainer>
                  <TablePagination
                      rowsPerPageOptions={[10, 25, 100]}
                      component="div"
                      count={payments.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
            }
            </Box>
            <Model
                title={title}
                openModel = {openModel}
                setOpenModel = {setOpenModel}
            >
            {
               getComponent() 
            }
              
          </Model>   
		</>
	)

}
export default Payments;