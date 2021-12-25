import React from 'react';
import { Typography, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import SendIcon from '@mui/icons-material/Send';


export default function Create() {
	return (
		<Container>
			<Typography
				variant='h6'
				component='h2'
				color='textSecondary'
				align='center'
				gutterbottom>
				Create New Note
			</Typography>
			<Button
				type='submit'
				variant='contained'
				color='secondary'
				align='center'
				endIcon={<SendIcon />}>
				Submit
			</Button>
		</Container>
	);
}
