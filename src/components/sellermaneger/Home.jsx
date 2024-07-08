import { Grid, Paper,Button, Box, IconButton, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import Qtdvendas from './Qtdvendas';
import Valorganho from './Valorganho';
import { makeStyles } from '@mui/styles';
import { Send, Facebook, Instagram } from '@mui/icons-material';
import { useEffect, useState } from 'react';

function createData(id, logo, name, tipo, valor, link_fb, link_inst) {
  return {id, logo, name, tipo, valor, link_fb, link_inst};
}

const rows = [
    createData(1, 'Logo_farmacia.png', 'Gestão De Farmáncia','APP Desktop', 'Redes Sociais', 500, 'Link fb', 'Link Insta'),
    createData(2, 'Logo_Restaurant.png','Gestão de Restaurante', 'APP Desktop', 300, 'Link fb', 'Link Insta'),
    createData(3, 'Logo_school.png','Gestão de Escolas', 'APP Desktop', 200,  'Link fb', 'Link Insta'),
    
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

	const [anuncios, setAnuncios] = useState(rows)

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

	return(
		<Grid container spacing={2}>
			<Grid item xs={12} sm={8} sx={{ display: { xs: 'flex', md: 'grid' } }}>
				<Grid container justifyContent="start" spacing={2}>

					<Grid item xs={12} md={6} sm={12}>					
	                    <Paper elevation={1} sx={{ p: 1,  maxWidth: '100%', maxHeight: '100%' }}>
	                        <Qtdvendas primery={primery} secudary={secudary} />
	                    </Paper>
	                </Grid>

	                <Grid item xs={12} md={6} sm={12}>
	                    <Paper elevation={1} sx={{ p: 1, maxWidth: '100%', maxHeight: '100%' }}>
	                           <Valorganho primery={primery} secudary={secudary} />
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
	                                      TIPO
	                                  </TableCell>
	                                  <TableCell                       
	                                      align={'start'}
	                                      sx={{fontFamily: 'Arvo, serif', fontWeight: 600, fontSize: '12px'}}
	                                      //style={{ minWidth: 150 }}
	                                  >
	                                      MÍDIAS SOCIAIS
	                                  </TableCell>
	                          

			                		</TableRow>
			                		</TableHead>
					                <TableBody>
			                              {anuncios
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
			                                          {row.tipo}
			                                      </TableCell>
			                                      
			                                          
			                                        <TableCell align={'start'}>
			                                            <IconButton 
			                                                onClick={() =>  handleEditarCountry(row)} 
			                                                size="small" 
			                                                aria-label="show 4 new mails" 
			                                                color="inherit"
			                                            >
			                                                <Facebook sx={{ color: 'blue', fontSize: '20px'}} />
			                                            </IconButton>
			                                            <IconButton 
			                                                onClick={() => handleApagarCountry(row)}
			                                                size="small" 
			                                                aria-label="show 4 new mails" 
			                                                color="inherit"
			                                            >
			                                                <Instagram sx={{ color: 'red', fontSize: '20px'}}/>
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
				 <div
				 	style={{
				 		display: 'flex',

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
				 	<div>
				 		<IconButton aria-label="delete">
						  <Send sx={{color: 'Blue'}} />
						</IconButton>
				 	</div>
	                
	            </div>    
			</Grid>				
		</Grid>

	)

}
export default Home;