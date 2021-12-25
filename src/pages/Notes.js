import React, { useEffect, useState } from 'react';
const axios = require('axios');

export default function Notes() {
	const [notes, setNotes] = useState([]);

	useEffect(async () => {
		const res = await axios.get('http://localhost:8000/notes');
		if (res.data) {
			setNotes(res.data);
		}
	}, []);

	return (
		<div>
			{notes.map((note) => (
				<p key={note.id}>{note.title}</p>
			))}
		</div>
	);
}
