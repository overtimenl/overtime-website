import { Box, Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { ForwardToInbox, Visibility, VisibilityOff, AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import FormAnuncios from "./FormAnuncios";
import Deletarnuncios from "./Deletaranuncio";
import dayjs from 'dayjs';


const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "#ED1C07"
        },
    }
});

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

function Anuncios(props) {

	const { primery, secudary } = props;
	const classes = useStyles();

    const [value, setValue] = useState(dayjs('02/10/2023'));
	const [anuncios, setAnuncios] = useState([])
	const [total, setTotal] = useState(0);
    const [convites, setConvites] = useState([])
    const [showPassword, setShowPassword] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [title, setTitle] = useState('');
    const [opcao, setOpcao] = useState('');

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [id, setId] = useState(0);
    const [anuncio, setAnuncio] = useState({
        id: 0, 
        name: '', 
        servico: '', 
        meio: '', 
        vcampanha: 0, 
        duracao: 0, 
        conversao: 0, 
        dataFim: value.format('dd/mm/yyyy'), 
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
      setTitle('ADD ANÚNCIO');
      setOpenModel(true);
    };
    //console.log(currencies)
    const handleEditarCountry = (anuncio) => {
      setOpcao('EDITAR');
      setTitle('EDITAR ANUNCIO');
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

    const getComponent = () =>{
      switch(opcao){
        case 'ADD': 
              return <FormAnuncios anunciar={anuncio} opcao={opcao}  setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />; 
        case 'EDITAR':           
              return <FormAnuncios anunciar={anuncio} opcao={opcao}  setOpenModel={setOpenModel}  primery={primery} secudary={secudary}  />; 
        case 'APAGAR':
              return <Deletarnuncios anuncio={anuncio} setOpenModel={setOpenModel} primery={primery} secudary={secudary}/>;   
        default: 
          return null;
      }
    }


    useEffect(() => {
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
        
        
    }, [])

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
                        NOSSOS ANÚNCIOS
                    </Typography>
                    <Typography
                            sx={{                    
                                fontSize: '15px',                                       
                                fontFamily: 'Arvo, serif',
                                '@media (max-width: 800px)': { fontSize: '10px' },
                            }}
                        >
                        Campanhas de anúncios online feitas referente a produtos ou serviços
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
                    onClick={handleAdd}
                > 
                    +
                </Button>
            </Box>	
			<Box>
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
export default Anuncios;