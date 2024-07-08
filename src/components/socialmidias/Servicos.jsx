import { Box, Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { ForwardToInbox, Visibility, VisibilityOff, AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import Formservicos from "./Formservicos";
//import classes from "./Contact.module.css";
import Deleteservice from "./Deleteservice";


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
		work: 'APP Desktop',
		name: 'Gestão De Restaurantes',
		img: 'Gestao_restaurante.jpg',
		conteudo: 'Incrivelmente satisfeito com a aplicação que a Overtime desenvolveu para nós! Facilitou muito nossas operações diárias. Obrigado pela inovação',
		more: 'saber mais',
		whats: ''

	},
	{
		id: 2,
		work: 'APP Desktop',
		name: 'Gestão De Lojas',
		img: 'Lojas.jpg',
		conteudo: 'A produção multimídia da Overtime deu vida à nossa marca de uma maneira que nunca imaginamos. Estamos impressionados e agradecidos por sua visão criativa!',
		more: 'saber mais',
		whats: ''
	},
	{
		id: 3,
		work: 'APP Desktop',
		name: 'Gestão De Restaurantes',
		img: 'Gestao_restaurante.jpg',
		conteudo: 'O marketing estratégico da Overtime trouxe resultados tangíveis para nossos negócios. Agradecemos pela abordagem proativa e pelos insights valiosos.',
		more: 'saber mais',
		whats: '' 
	},
	{
		id: 4,
		work: 'APP Desktop',
		name: 'Gestão De Restaurantes',
		img: 'Gestao_restaurante.jpg',
		conteudo: 'Agradecemos à Overtime por traduzir nossas ideias em uma experiência web excepcional. A navegação intuitiva e o design atraente são elogiados por nossos clientes',
		more: 'saber mais',
		whats: ''
	},
	{
		id: 5,
		work: 'APP Desktop',
		name: 'Gestão De Lojas',
		img: 'Lojas.jpg',
		conteudo: 'A aplicação desktop da Overtime simplificou nossos processos internos de maneira eficiente. Muito obrigado pela eficácia e profissionalismo.',
		more: 'saber mais',
		whats: ''
	},
	{
		id: 6,
		work: 'APP Desktop',
		name: 'Gestão De Lojas',
		img: 'Lojas.jpg',
		conteudo: 'A equipe da Overtime não só entregou um site incrível, mas também foi excepcionalmente colaborativa durante todo o processo. Obrigado pela parceria',
		more: 'saber mais',
		whats: ''
	},
];

function Servicos(props) {

	const { primery, secudary } = props;
	const [notificacao, setNotificacao] = useState(slides);

	const classes = useStyles();    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');

    const [servico, setServico] = useState({
        id: '',
		work: '',
		name: '',
		image: '',
		conteudo: '',
		more: '',
		whats: ''
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
        setTitle('ADD SERVIÇO');
        setOpenModel(true);
        setServico({
           	id: '',
			work: '',
			name: '',
			image: '',
			conteudo: '',
			more: '',
			whats: ''

        })

    };


    const handleEditar = (servico) => {
        setOpcao('EDITAR');
        setTitle('EDITAR SERVIÇO');
        setOpenModel(true);
         setServico({
            id:  servico.id,
			work:  servico.work,
			name:  servico.name,
			image:  servico.image,
			conteudo:  servico.conteudo,
			more:  servico.more,
			whats:  servico.whats
        })
    };

    const handleDelete = (servico) => {  
        setOpcao('DELETE')     
        setTitle('EXCLUIR SERVIÇO');
        setOpenModel(true);
        setServico({
            id:  servico.id,
			work:  servico.work,
			name:  servico.name,
			image: servico.image,
			conteudo:  servico.conteudo,
			more:  servico.more,
			whats:  servico.whats
        })
    };


    const getComponent = () =>{
        switch (opcao) {
            case 'ADD':
                return <Formservicos servico={servico} setServico={setServico} opcao={opcao} foto="sem-foto.jpg" primery={primery} secudary={secudary} />;
            case 'EDITAR':           
                return  <Formservicos servico={servico} setServico={setServico} foto={servico.image} opcao={opcao} primery={primery} secudary={secudary}/>;
            case 'DELETE':
                return <Deleteservice servico={servico} setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />
            default: 
                return null;
        }
    }

	useEffect(() => {	
        fetch("http://localhost:8000/worksdb/")
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
                    TRABALHOS FEITOS
                </Typography>
                <Typography
                    sx={{                    
                        fontSize: '15px',                                       
                        fontFamily: 'Arvo, serif',
                        '@media (max-width: 800px)': { fontSize: '10px' },
                    }}
                >
                    Cadastre os trabalhos feitos postados nas mídias sociais
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
                                      Nome
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
                                                src={new URL(`../../assets/works/${row.image}`, import.meta.url)}
                                                width={100}
                                                height={40}
                                            />                                 
                                      </TableCell>
                                      
                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.work}
                                      </TableCell>

                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.name}
                                      </TableCell>

                                      <TableCell align={'center'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.conteudo}
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

export default Servicos;