import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
    width: '100%',
    // To prevent characters from being placed below the sidebar.
    [theme.breakpoints.up('sm')]: {
      marginLeft: '240px',
    },
  },
}));
