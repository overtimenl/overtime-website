import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CreditCard, CreditScore } from '@mui/icons-material';
import Formbanco from "./Formbanco";
import Showbanco from "./Showbanco";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Banco(props) {

  const { primery, secudary, iduser, setOpenModel } = props;
  const [value, setValue] = React.useState(0);
  const [account, setAccount] = React.useState({
    id: '', 
    name: '',
    banco: '',  
    agencia: '',    
    conta: '', 
    ibam: '', 
});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab 
            label={<CreditCard />} 
            {...a11yProps(0)} 
          />
          <Tab 
            label={<CreditScore />} 
            {...a11yProps(1)} 
            />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Formbanco anuncio={account} opcao={'ADD'} setAnuncio={setAccount} setOpenModel={setOpenModel} primery={primery} secudary={secudary} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <Showbanco anuncio={account} setValue={setValue} opcao={'ADD'} setAnuncio={setAccount} setOpenModel={setOpenModel} primery={primery} secudary={secudary} />
      </CustomTabPanel>
    </Box>
  );
}