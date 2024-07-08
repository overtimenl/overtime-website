import { Box,  Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { Facebook, Instagram, ForwardToInbox, MonetizationOn, ToggleOn, ToggleOff,Visibility, VisibilityOff, AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import Formapp from "./Formapp";
import Deleteapp from './Deleteapp';

const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "#ED1C07"
        },
    }
});


function createData(id, logo, name, tipo, valor, link_fb, link_inst) {
  return {id, logo, name, tipo, valor, link_fb, link_inst};
}

const rows = [
    createData(1, 'Logo_farmacia.png', 'Gestão De Farmáncia','APP Desktop', 500, 'Link fb', 'Link Insta'),
    createData(2, 'Logo_Restaurant.png','Gestão de Restaurante', 'APP Desktop', 300, 'Link fb', 'Link Insta'),
    createData(3, 'Logo_school.png','Gestão de Escolas', 'APP Desktop', 200,  'Link fb', 'Link Insta'),
    
];


function Dekstopapp(props) {

	const { primery, secudary } = props;
	const classes = useStyles();

    //const [value, setValue] = useState(dayjs('02/10/2023'));
	const [aplicacoes, setaplicacoes] = useState(rows)
	const [total, setTotal] = useState(0);
    const [convites, setConvites] = useState([])
    //const [showPassword, setShowPassword] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [title, setTitle] = useState('');
    const [opcao, setOpcao] = useState('');

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [aplicacao, setAplicacao] = useState({
        id: '',
        name: '',
        tipo: '',
        valor: '',
        link_fb: '', 
        link_inst: '',
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
        setTitle('ADD APLICAÇÃO');
        setOpenModel(true);
        setAplicacao({
           	id: '',
        	name: '',
        	tipo: '',
        	valor: '',
        	link_fb: '', 
        	link_inst: '',
        	image: '', 
        })

    };

    const handleEditar = (aplicacao) => {
        setOpcao('EDITAR');
        setTitle('EDITAR APLICAÇÃO');
        setOpenModel(true);
         setAplicacao({
         	id: aplicacao.id,
         	name: aplicacao.name,
	        tipo: aplicacao.tipo,
	        valor: aplicacao.valor,
	        link_fb: aplicacao.link_fb,
	        link_inst: aplicacao.link_inst,
	        image: aplicacao.logo,
        })
    };

    const handleDelete = (aplicacao) => {  
        setOpcao('DELETE')     
        setTitle('EXCLUIR APLICAÇÃO');
        setOpenModel(true);
        setAplicacao({
            id: aplicacao.id,
	        name: aplicacao.name,
	        tipo: aplicacao.tipo,
	        valor: aplicacao.valor,
	        link_fb: aplicacao.link_fb,
	        link_inst: aplicacao.link_inst,
	        image: aplicacao.logo,
        })
    };

    const getComponent = () =>{
        switch (opcao) {
            case 'ADD':
                return <Formapp aplicacao={aplicacao} setAplicacao={setAplicacao} setOpenModel={setOpenModel} opcao={opcao} foto="sem-foto.jpg" primery={primery} secudary={secudary} />;
            case 'EDITAR':           
                return  <Formapp aplicacao={aplicacao} setAplicacao={setAplicacao} setOpenModel={setOpenModel} foto={aplicacao.image} opcao={opcao} primery={primery} secudary={secudary}/>;
            case 'DELETE':
                return <Deleteapp aplicacao={aplicacao}  setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />
            case 'BANK':
                return //<Banco iduser={"rwrrewrw"}  setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />
            default: 
                return null;
        }
    }


	return(
		<>
			<div style={{marginBottom: 50}}>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '25px',                   
                        fontFamily: 'Arvo, serif',
                        '@media (max-width: 800px)': { fontSize: '15px' },
                    }}
                >
                    APP Desktop
                </Typography>
                <Typography
                    sx={{                    
                        fontSize: '15px',                                       
                        fontFamily: 'Arvo, serif',
                        '@media (max-width: 800px)': { fontSize: '10px' },
                    }}
                >
                    Cadastre as Aplicações Desktop prontas para a venda
                </Typography>     
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
	           <Grid item xs={12} md={12} sm={12}>
            	{aplicacoes.length == 0 ?
            		<Typography
                        sx={{ 
                                textAlign: 'center',
                                fontSize: '15px', 
                                mt: 10,                                      
                                fontFamily: 'Arvo, serif',
                                '@media (max-width: 800px)': { fontSize: '10px' },
                            }}
                        >
                        Não existe nenhuma applicação!
                    </Typography>
	               :
	                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
		                <TableContainer sx={{ maxHeight: 440 }}>
		                	<Table stickyHeader aria-label="sticky table">
		                		<TableHead>
		                			<TableRow className={classes.root}>					                				
			                          <TableCell                       
			                              align={'start'}
			                              sx={{fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px'}}
			                              //style={{ minWidth: 150 }}
			                          >
			                              IMAGE
			                          </TableCell>
			                          <TableCell                       
			                              align={'start'}
			                              sx={{fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px'}}
			                              //style={{ minWidth: 150 }}
			                          >
			                              NOME
			                          </TableCell>
			                          
			                          <TableCell                       
			                              align={'start'}
			                              sx={{fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px'}}
			                              //style={{ minWidth: 150 }}
			                          >
			                              VALOR
			                          </TableCell>
			                          <TableCell                       
			                              align={'start'}
			                              sx={{fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px'}}
			                              //style={{ minWidth: 150 }}
			                          >
			                              TIPO
			                          </TableCell>
			                          <TableCell                       
			                              align={'start'}
			                              sx={{fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px'}}
			                              //style={{ minWidth: 150 }}
			                          >
			                              OPÇÕES
			                          </TableCell>
            					</TableRow>
            				</TableHead>
	                	<TableBody>
                          {aplicacoes
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row) => {
                              return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>        
                              		<TableCell align={'center'}>
                                    <img                  
                                        src={new URL(`../../assets/applogos/${row.logo}`, import.meta.url)}
                                        width={40}
                                 	    height={40}
                                    />                                 
                              	</TableCell>
                                  

                                  <TableCell align={'start'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                      {row.name}                             
                                  </TableCell>

                                  <TableCell align={'start'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                      {row.valor}                             
                                  </TableCell>
                                  
                                  <TableCell align={'start'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                      {row.tipo}
                                  </TableCell>
                                  
                                      
                                    <TableCell align={'start'}>
                                        <IconButton 
                                            //onClick={() =>  handleEditarCountry(row)} 
                                            size="small" 
                                            aria-label="show 4 new mails" 
                                            color="inherit"
                                        >
                                            <Facebook sx={{ color: 'blue', fontSize: '20px'}} />
                                        </IconButton>
                                        <IconButton 
                                            //onClick={() => handleApagarCountry(row)}
                                            size="small" 
                                            aria-label="show 4 new mails" 
                                            color="inherit"
                                        >
                                            <Instagram sx={{ color: 'red', fontSize: '20px'}}/>
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
                        count={aplicacoes.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
              </Paper>
       			
          	}
        </Grid>
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
export default Dekstopapp;