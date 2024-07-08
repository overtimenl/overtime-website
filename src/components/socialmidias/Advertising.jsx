import { Box, Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { ForwardToInbox, Visibility, VisibilityOff, AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import Formpublicidades from "./Formpublicidades";
//import classes from "./Contact.module.css";
import Deletepublicidades from "./Deletepublicidades";


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
		title: 'APP Desktop',
		subtitle: 'Gestão Financeira e RH',
		descricao: 'Controle de fluxo de caixa, folhas de salários, cadastros de Funcionários ...',
		image: 'Fundo_GestApp01.png',
		more: 'saber mais'
	},
	{
		id: 2,
		title: 'APP Desktop',
		subtitle: 'Gestão de Restaurante',
		descricao: 'Controle de Entradas estoque, cardapio, folhas de salários, cadastros de Funconários ...',
		image: 'Fundo_GestApp02.jpg',
		more: 'saber mais'
	},
	{
		id: 3,
		title: 'Marketing Digital',
		subtitle: 'Cuidamos Da Sua Presença Digital',
		descricao: 'cadastramos as compras, produtoss em estoque,  fornecedores, relatorios de produtos vendidos, do mais vendido ao menos.',
		image: 'fundo_Gest07.png',
		more: 'saber mais'
	},
	{
		id: 4,
		title: 'APP Desktop',
		subtitle: 'Gestão De Colégios (escolas)',
		descricao: 'Cadastro de alunos, turmas, hostoricos, Funcionários, controle Financeiro e mais   ...',
		image: 'fundo_GestApp03.jpg',
		more: 'saber mais'
	},
];


function Advertising(props) {

	const { primery, secudary } = props;
	const [notificacao, setNotificacao] = useState([]);

	const classes = useStyles();    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');

    const [anuncio, setAnuncio] = useState({
        id: '',
        title: '',
        subtitle: '',
        descricao: '',
        image: '',
        more: ''  
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
        setTitle('ADD PUBLICIDADE');
        setOpenModel(true);
        setAnuncio({
            id: '',
            title: '',
            subtitle: '',
            descricao: '',
            image: '',
            more: ''

        })

    };


    const handleEditar = (anuncio) => {
        setOpcao('EDITAR');
        setTitle('EDITAR PUBLICIDADE');
        setOpenModel(true);
         setAnuncio({
            id: anuncio.id,
            title: anuncio.title,
            subtitle: anuncio.subtitle,
            descricao: anuncio.descricao,
            image: anuncio.image,
            more: anuncio.more
        })
    };

    const handleDelete = (anuncio) => {  
        setOpcao('DELETE')     
        setTitle('EXCLUIR PUBLICIDADE');
        setOpenModel(true);
        setAnuncio({
            id: anuncio.id,
            title: anuncio.title,
            subtitle: anuncio.subtitle,
            descricao: anuncio.descricao,
            image: anuncio.image,
            more: anuncio.more
        })
    };

    const getComponent = () =>{
        switch (opcao) {
            case 'ADD':
                return <Formpublicidades anuncio={anuncio} setAnuncio={setAnuncio} setOpenModel={setOpenModel} opcao={opcao} foto="sem-foto.jpg" primery={primery} secudary={secudary} />;
            case 'EDITAR':           
                return  <Formpublicidades anuncio={anuncio} setAnuncio={setAnuncio} setOpenModel={setOpenModel} foto={anuncio.image} opcao={opcao} primery={primery} secudary={secudary}/>;
            case 'DELETE':
                return <Deletepublicidades anuncio={anuncio} setAnuncios={setNotificacao} setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />
            default: 
                return null;
        }
    }

	useEffect(() => {

        fetch("http://localhost:8000/publicidadesdb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            setNotificacao(responseJson)
        })  

    }, [])

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
                    PUBLICIDADES DO SITE
                </Typography>
                <Typography
                    sx={{                    
                        fontSize: '15px',                                       
                        fontFamily: 'Arvo, serif',
                        '@media (max-width: 800px)': { fontSize: '10px' },
                    }}
                >
                    Cadastre aqui os banneres publicitarios do site da empresa
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
                                      BANNER
                                  </TableCell>
                                  
                                  <TableCell                       
                                      align={'center'}
                                      style={{ minWidth: 150, fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px' }}
                                  >
                                      SERVIÇO
                                  </TableCell>

                                  <TableCell                       
                                      align={'center'}
                                      style={{ minWidth: 150, fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px' }}
                                  >
                                      SUBTITULO
                                  </TableCell>
                                  
                                  <TableCell                       
                                      align={'center'}
                                      style={{ minWidth: 150, fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px' }}
                                  >
                                      DESCRIÇÃO
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

                                      <TableCell align={'center'}>
                                            <img                  
                                                src={new URL(`../../assets/marketing/${row.image}`, import.meta.url)}
                                                width={100}
                                                height={40}
                                            />                                 
                                      </TableCell>
                                      
                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.title}
                                      </TableCell>

                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.subtitle}
                                      </TableCell>

                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.descricao}
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
export default Advertising;