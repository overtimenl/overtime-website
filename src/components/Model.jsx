import {Dialog, DialogTitle, DialogContent, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Controls from './controls/Controls';
import {Close} from '@mui/icons-material';

const useStyles = makeStyles(() =>({
	dialogWrapper:{
		padding: useTheme().spacing(1),
		position: 'absolute',
		top: useTheme().spacing(1)
	},
	dialogTitle:{
		paddingRight: '0px'
	}
}))
export default function Model(props){

	// eslint-disable-next-line react/prop-types
	const {title, children, openModel, setOpenModel} = props;
	const classes = useStyles();
	return(
		<Dialog 
			open={openModel}
			maxWidth="md"
			classes={{ paper: classes.dialogWrapper}}
			aria-labelledby="responsive-dialog-title"
		>
			<DialogTitle className={classes.dialogTitle}>
				<div style={{display: 'flex'}}>
					<Typography						
						component="div"
						sx={{
							flexGrow: 1,
							p: 0,
							fontWeight: 'bold',
							fontSize: '35px',	
							fontFamily: 'Arvo, serif',						
							'@media (max-width: 600px)': { fontSize: '20px' },
						}}
					>
						{title}
					</Typography>
					<Controls.ActionButton
						onClick={()=>{setOpenModel(false)}}						
						size="small"
					>
						<Close/>
					</Controls.ActionButton>
				</div>
			</DialogTitle>
			<DialogContent>
				{children}
			</DialogContent>
		</Dialog>
	)
}
