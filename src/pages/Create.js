import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {
	Typography,
	Button,
	TextField,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@material-ui/core';
const axios = require('axios');

const useStyles = makeStyles({
	field: {
		marginTop: 20,
		marginBottom: 20,
		display: 'block',
	},
});

export default function Create() {
	const history = useHistory();
	const classes = useStyles();
	const [title, setTitle] = useState('');
	const [details, setDetails] = useState('');
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);
	const [category, setCategory] = useState('money');

	const handleSubmit = (e) => {
		e.preventDefault();

		title === '' ? setTitleError(true) : setTitleError(false);
		details === '' ? setDetailsError(true) : setDetailsError(false);

		if (title && details) {
			const postNotes = async () => {
				await axios.post('http://localhost:8000/notes', {
					title,
					details,
					category,
				});
				history.push('/');

				console.log('Notes successfully posted');
			};
			postNotes();
		}
	};

	return (
		<Container>
			<Typography variant='h6' component='h2' color='textSecondary'>
				Create New Note
			</Typography>

			<form noValidate autoComplete='off' onSubmit={handleSubmit}>
				<TextField
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					value={title}
					className={classes.field}
					label='Note Title'
					variant='outlined'
					color='secondary'
					fullWidth
					required
					error={titleError}></TextField>
				<TextField
					className={classes.field}
					onChange={(e) => {
						setDetails(e.target.value);
					}}
					value={details}
					label='Details'
					variant='outlined'
					color='secondary'
					multiline
					rows={4}
					fullWidth
					required
					error={detailsError}></TextField>

				<FormControl className={classes.field}>
					<FormLabel>Note Category</FormLabel>
					<RadioGroup
						value={category}
						onChange={(e) => {
							setCategory(e.target.value);
						}}>
						<FormControlLabel value='money' control={<Radio />} label='Money' />
						<FormControlLabel value='todos' control={<Radio />} label='Todos' />
						<FormControlLabel
							value='reminders'
							control={<Radio />}
							label='Reminders'
						/>
						<FormControlLabel value='work' control={<Radio />} label='Work' />
					</RadioGroup>
				</FormControl>
				<Button
					type='submit'
					variant='contained'
					color='secondary'
					endIcon={<SendIcon />}>
					Submit
				</Button>
			</form>
		</Container>
	);
}
