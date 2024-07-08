import {Button as MuiButton} from '@mui/material';
import {makeStyles} from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(() =>({
	root:{
		margin: useTheme().spacing(1)
	},
	label:{
		textTransform: 'none'
	}

}))

export default function Button(props){

	// eslint-disable-next-line react/prop-types
	const{text, size, color, variant, onClick, ...other} = props
	const classes = useStyles();
	return(
		<MuiButton
			variant={variant || "contained"}
			size={size || "large"}
			color={color || "primary"}
			onClick={onClick}
			{...other}
			className={`${classes.root} ${classes.label}`}
		>
			{text}
		</MuiButton>
	)
}