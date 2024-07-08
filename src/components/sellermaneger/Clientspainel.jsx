import { useState, useEffect } from "react";
import { IconButton, Typography, Box, Button,  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import {AccountBalance, Delete, Edit, LinkedIn, Facebook, Instagram} from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import Formclient from "./Formclient";
import Deleteclient from "./Deleteclient";

const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "#ED1C07"
        },
    }
}); 

const slides = [
    {
        id: 1,
        name: 'Miguel Mateus',
        tipo: 'Individual',
        phone: '934 044 034',
        endereco: 'Luanda, viana, caop-b nº 23',
        link_insta: '',
        link_fb: '',
    },
    {
        id: 2,
        name: 'Paulo Mbanza',
        tipo: 'Individual',
        phone: '934 044 034',
        endereco: 'Luanda, viana, caop-b nº 23',
        link_insta: '',
        link_fb: '',
    },
    {
        id: 4,
        name: 'Shoop Midro',
        tipo: 'Jurídica',
        phone: '934 044 034',        
        endereco: 'Luanda, viana, caop-b nº 23',
        link_insta: '',
        link_fb: '',
    },
];


function Clientspainel(props) {

	const { primery, secudary } = props;
	const [clients, setClients] = useState(slides);

	const classes = useStyles();    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');

    const [client, setClient] = useState({
        id: '',
        name: '',
        tipo: '',
        phone: '',        
        endereco: '',
        link_insta: '',
        link_fb: '',
        link_ld: '',
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleAdd = () => {
        setOpcao('ADD');
        setTitle('ADD VENDAS');
        setOpenModel(true);
        setClient({
	        id: '',
	        name: '',
	        tipo: '',
	        phone: '',        
	        endereco: '',
	        link_insta: '',
	        link_fb: '',
	        link_ld: '',
        })

    };

    const handleSells = () => {
        setOpcao('SELLS');
        setTitle('COMPRAS');
        setOpenModel(true);
        
    };

    const handleEditar = (client) => {
        setOpcao('EDITAR');
        setTitle('EDITAR VENDAS');
        setOpenModel(true);
         setClient({
         	id: client.id,
	        name: client.name,
	        tipo: client.tipo,
	        phone: client.phone,
	        endereco: client.endereco,
	        link_insta: client.link_insta,
	        link_fb: client.link_fb,
	        link_ld: client.link_ld,
        })
    };

    const handleDelete = (client) => {  
        setOpcao('DELETE')     
        setTitle('EXCLUIR VENDAS');
        setOpenModel(true);
        setClient({
            id: client.id,
	        name: client.name,
	        tipo: client.tipo,
	        phone: client.phone,
	        endereco: client.endereco,
	       	link_insta: client.link_insta,
	        link_fb: client.link_fb,
	        link_ld: client.link_ld,
        })
    };

    const getComponent = () =>{
        switch (opcao) {
            case 'ADD':
                return <Formclient client={client} setClient={setClient} setOpenModel={setOpenModel} opcao={opcao}  primery={primery} secudary={secudary} />;
            case 'EDITAR':           
                return  <Formclient client={client} setClient={setClient} setOpenModel={setOpenModel}  opcao={opcao} primery={primery} secudary={secudary}/>;
            case 'DELETE':
                return <Deleteclient client={client} setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />
            case 'SELLS':
                return //<Banco iduser={"rwrrewrw"}  setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />
            default: 
                return null;
        }
    }

	useEffect(() => {

        /*fetch("http://localhost:8000/publicidadesdb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            setNotificacao(responseJson)
        })  */

    }, [])


	return(
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div>
					 <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '25px',                   
                            fontFamily: 'Arvo, serif',
                            '@media (max-width: 800px)': { fontSize: '15px' },
                        }}
                    >
                        CLIENTES
                    </Typography>
                    <Typography
                            sx={{                    
                                fontSize: '15px',                                       
                                fontFamily: 'Arvo, serif',
                                '@media (max-width: 800px)': { fontSize: '10px' },
                            }}
                        >
                        Cadastra aqui os clientes que realizaram compras
                    </Typography>   
				</div>
			</div>
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
      				{clients.length == 0? 
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
                                      NOME
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
                                     TELEFONE
                                  </TableCell>

                                  <TableCell                       
                                      align={'center'}
                                      style={{ minWidth: 150, fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px' }}
                                  >
                                      ENDEREÇO
                                  </TableCell>
                                   
                                  <TableCell                       
                                      align={'center'}
                                      style={{ minWidth: 150, fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px' }}
                                  >
                                      OPCÕES
                                  </TableCell>
                          
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {clients
                              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              .map((row) => {
                                  return (
                                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>        

                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.name}
                                      </TableCell>

                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.tipo}
                                      </TableCell>

                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.phone}
                                      </TableCell>

                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.endereco}
                                      </TableCell>
                                          
                                        <TableCell align={'center'}>
                                        	<IconButton 
                                                //onClick={() =>  handleEditar(row)} 
                                                size="small" 
                                                aria-label="show 4 new mails" 
                                                color="inherit"
                                            >
                                                <LinkedIn sx={{ color: `blue`, fontSize: '20px'}} />
                                            </IconButton>
                                            <IconButton 
                                                //onClick={() =>  handleEditar(row)} 
                                                size="small" 
                                                aria-label="show 4 new mails" 
                                                color="inherit"
                                            >
                                                <Facebook sx={{ color: `blue`, fontSize: '20px'}} />
                                            </IconButton>
                                            <IconButton 
                                                //onClick={() =>  handleEditar(row)} 
                                                size="small" 
                                                aria-label="show 4 new mails" 
                                                color="inherit"
                                            >
                                                <Instagram sx={{ color: `#fa7e1e`, fontSize: '20px'}} />
                                            </IconButton>
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
                          count={clients.length}
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
export default Clientspainel;