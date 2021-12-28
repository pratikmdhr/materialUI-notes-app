import React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import {
	AddCircleOutlineOutlined,
	Block,
	SubjectOutlined,
} from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router';
import { format } from 'date-fns';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
	return {
		root: {
			display: 'flex',
		},
		title: {
			padding: theme.spacing(2),
			textAlign: 'center',
		},

		page: {
			background: '#f9f9f9',
			width: '100%',
			height: '100vh',
			padding: theme.spacing(3),
		},
		drawer: {
			width: drawerWidth,
		},
		drawerPaper: {
			width: drawerWidth,
		},

		toolbar: theme.mixins.toolbar,

		date: {
			flexGrow: 1,
			paddingLeft: drawerWidth,
		},
		avatar: {
			marginLeft: theme.spacing(2),
		},
	};
});

const Layout = ({ children }) => {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();

	const [selectedIndex, setSelectedIndex] = React.useState(
		location.pathname === '/' ? 0 : 1
	);

	const menuItems = [
		{
			text: 'My Notes',
			icon: <SubjectOutlined color='primary' />,
			path: '/',
			id: 0,
		},
		{
			text: 'Create Note',
			icon: <AddCircleOutlineOutlined color='primary' />,
			path: '/create',
			id: 1,
		},
	];

	const handlerListItemClick = (item) => {
		history.push(item.path);
		setSelectedIndex(item.id);
	};

	return (
		<div className={classes.root}>
			<AppBar
				className={classes.appBar}
				component='div'
				elevation={0}
				color='primary'
				position='fixed'>
				<Toolbar>
					<Typography className={classes.date}>
						Today is the {format(new Date(), 'do MMMM Y')}
					</Typography>
					<Typography>Mario</Typography>
					<Avatar src='/mario-av.png' className={classes.avatar} />
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				anchor='left'
				classes={{ paper: classes.drawerPaper }}>
				<div>
					<Typography variant='h5' className={classes.title}>
						M.UI Notes
					</Typography>
				</div>
				<List>
					{menuItems.map((item) => (
						<ListItemButton
							key={item.text}
							onClick={() => {
								handlerListItemClick(item);
							}}
							selected={selectedIndex === item.id}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItemButton>
					))}
				</List>
			</Drawer>

			<div className={classes.page}>
				<div className={classes.toolbar}></div>
				{children}
			</div>
		</div>
	);
};

export default Layout;
