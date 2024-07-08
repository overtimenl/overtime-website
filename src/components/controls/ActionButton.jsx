import {Button} from '@mui/material';
import {makeStyles} from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(()=>({
	root:{
		maxWidth: 0,
		margin: useTheme().spacing(0.5)
	},
	error: {
		backgroundColor: useTheme().palette.error.main,
		'& .MuiButton-label': {
			color: useTheme().palette.error.light,
		}
	},
	primary: {
		backgroundColor: useTheme().palette.primary.light,
		'& .MuiButton-label': {
			color: useTheme().palette.primary.main,
		}
	}
}))
export default function ActionButton(props){

	// eslint-disable-next-line react/prop-types
	const {color, children, onClick} = props;
	const classes = useStyles()
	return(
		<Button
			className={`${classes.root} ${classes[color]}`}
			onClick={onClick}
		>
			{children}
		</Button>
	)
}

