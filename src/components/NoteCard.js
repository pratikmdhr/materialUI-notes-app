import React from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from '@material-ui/core';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { DeleteOutlined } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { yellow, green, pink, blue } from '@material-ui/core/colors';

// const useStyles = makeStyles({
// 	avatar: {
// 		color: (note) => {
// 			if (note.category == 'work') {
// 				return yellow[700];
// 			}
// 			if (note.category == 'money') {
// 				return green[500];
// 			}
// 			if (note.category == 'todos') {
// 				return pink[500];
// 			}
// 			return blue[500];
// 		},
// 	},
// });

const NoteCard = ({ note, onDelete }) => {
	// const classes = useStyles(note);

	const checkAvatarColor = (category) => {
		if (category == 'work') {
			return yellow[700];
		}
		if (note.category == 'money') {
			return green[500];
		}
		if (note.category == 'todos') {
			return pink[500];
		}
		return blue[500];
	};

	return (
		<div>
			<Card elevation={2}>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: checkAvatarColor(note.category) }}>
							{note.category[0].toUpperCase()}
						</Avatar>
					}
					action={
						<IconButton
							onClick={() => {
								onDelete(note.id);
							}}>
							<DeleteOutlined />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography variant='body2' color='textSecondary'>
						{note.details}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default NoteCard;
