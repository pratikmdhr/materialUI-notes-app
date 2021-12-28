import React, { useEffect, useState } from 'react';
import { Grid, Paper, Container } from '@mui/material';
import NoteCard from '../components/NoteCard';
const axios = require('axios');

export default function Notes() {
	const [notes, setNotes] = useState([]);

	useEffect(async () => {
		const res = await axios.get('http://localhost:8000/notes');
		if (res.data) {
			setNotes(res.data);
		}
	}, []);

	const handleDelete = async (deleteId) => {
		await axios.delete(`http://localhost:8000/notes/${deleteId}`);

		const newNotes = notes.filter((note) => note.id !== deleteId);
		setNotes(newNotes);
	};

	return (
		<Container>
			<Grid container spacing={3}>
				{notes.map((note) => (
					<Grid item key={note.id} xs={12} md={6} lg={4}>
						<NoteCard note={note} onDelete={handleDelete} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
