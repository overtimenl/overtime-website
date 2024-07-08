import { useState, useEffect } from "react";
import { IconButton, Typography, Box, Button,  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import {AccountBalance, Delete, Edit} from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import Formvendas from "./Formvendas";
import Deletevendas from "./Deletevendas";
import Banco from "./Banco";
import Model from "../Model";

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
		valor: 215000,
		app: 'Gestão Financeira e RH',
		client: 'Paulo Mingos',
		image: 'check-sample.jpg',
	},
	{
		id: 2,
		valor: 225000,
		app: 'Gestão de Restaurante',
		client: 'Nelito Mpanza',
		image: 'check-sample.jpg',
	},
	{
		id: 4,
		valor: 250000,
		app: 'Gestão De Colégios (escolas)',
		client: 'Miguel Mateus',
		image: 'check-sample.jpg',
	},
];


function Vendaspainel(props) {

	const { primery, secudary } = props;
	const [notificacao, setNotificacao] = useState(slides);

	const classes = useStyles();    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');

	const [anuncio, setAnuncio] = useState({
        id: '',
        valor: '',
        app: '',
        client: '',
        image: '',  
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
        setAnuncio({
           	id: '',
        	valor: '',
        	app: '',
        	client: '',
        	image: '',
        })

    };

    const handleBank = () => {
        setOpcao('BANK');
        setTitle('DADOS BANCÁRIOS');
        setOpenModel(true);
        
    };


    const handleEditar = (anuncio) => {
        setOpcao('EDITAR');
        setTitle('EDITAR VENDAS');
        setOpenModel(true);
         setAnuncio({
         	id: anuncio.id,
	        valor: anuncio.valor,
	        app: anuncio.app,
	        client: anuncio.client,
	        image: anuncio.image,
        })
    };

    const handleDelete = (anuncio) => {  
        setOpcao('DELETE')     
        setTitle('EXCLUIR VENDAS');
        setOpenModel(true);
        setAnuncio({
            id: anuncio.id,
	        valor: anuncio.valor,
	        app: anuncio.app,
	        client: anuncio.client,
	        image: anuncio.image,
        })
    };

    const getComponent = () =>{
        switch (opcao) {
            case 'ADD':
                return <Formvendas anuncio={anuncio} setAnuncio={setAnuncio} setOpenModel={setOpenModel} opcao={opcao} foto="sem-foto.jpg" primery={primery} secudary={secudary} />;
            case 'EDITAR':           
                return  <Formvendas anuncio={anuncio} setAnuncio={setAnuncio} setOpenModel={setOpenModel} foto={anuncio.image} opcao={opcao} primery={primery} secudary={secudary}/>;
            case 'DELETE':
                return <Deletevendas anuncio={anuncio} setAnuncios={setNotificacao} setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />
            case 'BANK':
                return <Banco iduser={"rwrrewrw"}  setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />
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
                        MINHAS VENDAS
                    </Typography>
                    <Typography
                            sx={{                    
                                fontSize: '15px',                                       
                                fontFamily: 'Arvo, serif',
                                '@media (max-width: 800px)': { fontSize: '10px' },
                            }}
                        >
                        Cadastra aqui as suas vendas e acompanha seu crescimento.
                    </Typography>   
				</div>
				<IconButton 
                    aria-label="delete" 
                    sx={{borderRadius: 'none'}}
                    onClick={()=> handleBank()}
                >
				  <AccountBalance />
				</IconButton>
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
                {notificacao.length == 0? 
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
                                      VALOR
                                  </TableCell>
                                  
                                  <TableCell                       
                                      align={'center'}
                                      style={{ minWidth: 150, fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px' }}
                                  >
                                      APLICAÇÃO
                                  </TableCell>

                                  <TableCell                       
                                      align={'center'}
                                      style={{ minWidth: 150, fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px' }}
                                  >
                                      CLIENTE
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
                              {notificacao
                              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              .map((row) => {
                                  return (
                                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>        

                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.valor}
                                      </TableCell>

                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.app}
                                      </TableCell>

                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.client}
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
                          count={notificacao.length}
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
export default Vendaspainel;