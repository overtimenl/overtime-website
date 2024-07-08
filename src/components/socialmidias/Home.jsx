import { Grid, Paper,Button, Box, IconButton, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import AnunciosAtivos from './AnunciosAtivos';
import FeedActive from './FeedActive';
import { makeStyles } from '@mui/styles';
import Model from "../Model";
import { AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useEffect, useState } from 'react';
import FormAnuncios from "./FormAnuncios";
import Deletarnuncios from "./Deletaranuncio";


function createData(id, name, produto, meios, vcampanha, duracao, conversao, dataIn, dataFim) {
  return {id, name, produto, meios, vcampanha, duracao, conversao, dataIn, dataFim};
}

const rows = [
    createData(1, 'Gestão De Farmáncia','APP Desktop', 'Redes Sociais', 500, 30, 0, '2023-05-12', '2024-03-10'),
    createData(2, 'Gestão De Escola','APP Desktop', 'Google Ads', 300, 30, 0, '2023-10-10', '2024-01-10'),
    createData(3, 'Gestão Mini-Mercado','APP Desktop', 'Google Ads', 200, 20, 0, '2023-12-10', '2024-04-11'),
    createData(4, 'Banner Compra','Multmidia', 'Redes Sociais', 500, 30, 0, '2023-10-12', '2024-11-14'),
    createData(5, 'Open Next','APP Web e Mobile', 'Redes Sociais', 100, 30, 0, '2023-10-15', '2024-12-14'),
    
    
];

const useStyles = makeStyles({

    root: {
    	fontFamily: 'Arvo, serif',
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "#ED1C07" 
        },
    }
});


function Home(props) {

		const { primery, secudary } = props;

		const classes = useStyles();

		const [anuncios, setAnuncios] = useState([])

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');
     const currentDate = new Date()
    const nextDate = new Date(currentDate)
    nextDate.setDate(currentDate.getDate() + 1)

    const getMes = (mes) => {
       let m = mes+ 1;
      if (m > 9){
        return `${m}`
      } else {
        return `0${m}`
      }
    };

    let data_in = `${nextDate.getFullYear()}-${getMes(nextDate.getMonth())}-${nextDate.getDate()}`


    
    //const d1 = Date.parse(data_in);
    //const d2 = Date.parse("2012-11-04");

   

    //console.log(nextDate);
    
    
    const [id, setId] = useState(0);
    const [anuncio, setAnuncio] = useState({
       id: 0, 
       name: '', 
       servico: '', 
       meio: '', 
       vcampanha: 0, 
       duracao: 0, 
       conversao: 0, 
       dataFim: '', 
    });

    


		const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    //console.log(currencies)
    const handleEditarCountry = (anuncio) => {
      setOpcao('EDITAR');
      setTitle('EDITAR ANUNCIO');
      //setStatus('MOEDA');
      //setId(moeda.id);
      setOpenModel(true);
      setAnuncio({
        id: anuncio.id, 
        name: anuncio.name, 
        servico: anuncio.servico, 
        meio: anuncio.meio, 
        vcampanha:anuncio.vcampanha, 
        duracao:anuncio.duracao, 
        conversao:anuncio.conversao, 
        dataFim: anuncio.dataFim, 
      })
    };

    const handleApagarCountry = (anuncio) => {
      setOpcao('APAGAR');
      setTitle('APAGAR ANUNCIO');      
      setOpenModel(true);
      setAnuncio({
        id: anuncio.id, 
        name: anuncio.name, 
        servico: anuncio.servico, 
        meio: anuncio.meio, 
        vcampanha:anuncio.vcampanha, 
        duracao:anuncio.duracao, 
        conversao:anuncio.conversao, 
        dataFim: anuncio.dataFim, 
      })
    };

    
     useEffect(() => {
        let tot = 0; 
        let ativos = [] 
        fetch("http://localhost:8000/anunciodb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson)
            responseJson.forEach((anuncio) => {
                if (data_in < anuncio.dataFim) {
                  ativos.push(anuncio)
                }
            })
            console.log(ativos)
            //setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
            setAnuncios(ativos)

        })  
        
        
    }, [])


    const getComponent = () =>{
      switch(opcao){
       case 'EDITAR':           
              return <FormAnuncios anunciar={anuncio} opcao={opcao}  setOpenModel={setOpenModel}  primery={primery} secudary={secudary}  />; 
        case 'APAGAR':
              return <Deletarnuncios anuncio={anuncio} setOpenModel={setOpenModel} primery={primery} secudary={secudary}/>;   
        default: 
          return null;
      }
    }


	return(
		<>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={8} sx={{ display: { xs: 'flex', md: 'grid' } }}>
					<Grid container justifyContent="start" spacing={2}>
						<Grid item xs={12} md={6} sm={12}>
		                    <Paper elevation={1} sx={{ p: 1,  maxWidth: '100%', maxHeight: '100%' }}>
		                        <AnunciosAtivos primery={primery} secudary={secudary} />
		                    </Paper>
		                </Grid>

		                <Grid item xs={12} md={6} sm={12}>
		                    <Paper elevation={1} sx={{ p: 1, maxWidth: '100%', maxHeight: '100%' }}>
		                           <FeedActive primery={primery} secudary={secudary} />
		                    </Paper>
		                </Grid>
		                <Grid item xs={12} md={12} sm={12}>
		                	{anuncios.length == 0 ?
		                		<Typography
			                        sx={{ 
			                                textAlign: 'center',
			                                fontSize: '15px', 
			                                mt: 10,                                      
			                                fontFamily: 'Arvo, serif',
			                                '@media (max-width: 800px)': { fontSize: '10px' },
			                            }}
			                        >
			                        Não existe nenhuma moeda!
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
                                      NOME
                                  </TableCell>
                                  <TableCell                       
                                      align={'start'}
                                      sx={{fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px'}}
                                      //style={{ minWidth: 150 }}
                                  >
                                      SERVIÇO
                                  </TableCell>
                                  
                                  <TableCell                       
                                      align={'start'}
                                      sx={{fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px'}}
                                      //style={{ minWidth: 150 }}
                                  >
                                      MEIOS
                                  </TableCell>
                                  
                                  <TableCell                  
                                      align={'start'}
                                      sx={{fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px'}}
                                      //style={{ minWidth: 150 }}
                                  >
                                      CUSTO
                                  </TableCell>

                                  <TableCell                       
                                      align={'start'}
                                      sx={{fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px'}}
                                      //style={{ minWidth: 150 }}
                                  >
                                      DURAÇÃO
                                  </TableCell>

                                  <TableCell                       
                                      align={'start'}
                                      sx={{fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px'}}
                                      //style={{ minWidth: 150 }}
                                  >
                                      CONVERSÃO
                                  </TableCell>
                                  
                                  <TableCell                       
                                      align={'start'}
                                      sx={{fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px'}}
                                      //style={{ minWidth: 150 }}
                                  >
                                      OPCÕES
                                  </TableCell>
                          

                			</TableRow>
                		</TableHead>
		                <TableBody>
                              {anuncios
                              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              .map((row) => {
                                  return (
                                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>        
                                  
                                      <TableCell align={'start'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.name}                             
                                      </TableCell>

                                      <TableCell align={'start'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.servico}                             
                                      </TableCell>
                                      
                                      <TableCell align={'start'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.meio}
                                      </TableCell>
                                      
                                      <TableCell align={'start'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.vcampanha}
                                      </TableCell>

                                      <TableCell align={'start'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.duracao}
                                      </TableCell>

                                      <TableCell align={'start'} sx={{fontFamily: 'Arvo, serif', fontSize: '12px', fontWeight: 600}}>
                                          {row.conversao}
                                      </TableCell>
                                          
                                        <TableCell align={'start'}>
                                            <IconButton 
                                                onClick={() =>  handleEditarCountry(row)} 
                                                size="small" 
                                                aria-label="show 4 new mails" 
                                                color="inherit"
                                            >
                                                <Edit sx={{ color: '#171010', fontSize: '20px'}} />
                                            </IconButton>
                                            <IconButton 
                                                onClick={() => handleApagarCountry(row)}
                                                size="small" 
                                                aria-label="show 4 new mails" 
                                                color="inherit"
                                            >
                                                <Delete sx={{ color: 'red', fontSize: '20px'}}/>
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
                        count={anuncios.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
              </Paper>
       			
          	}
          </Grid>
					</Grid>					 
				</Grid>

				<Grid item xs={12} sm={4}>
					 <div>
		                <Typography
		                    sx={{
		                        fontWeight: 'bold',
		                        fontSize: '25px',                   
		                        fontFamily: 'Arvo, serif',
		                        '@media (max-width: 800px)': { fontSize: '15px' },
		                    }}
		                >
		                    NOTIFICAÇÕES
		                </Typography>
		                <Typography
		                    sx={{                    
		                        fontSize: '15px',                                       
		                        fontFamily: 'Arvo, serif',
		                        '@media (max-width: 800px)': { fontSize: '10px' },
		                    }}
		                >
		                    Novas atualizações da empresa
		                </Typography>     
		            </div>    
				</Grid>				
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
	);

}
export default Home;