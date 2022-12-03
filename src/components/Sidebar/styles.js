import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: '70%',
  },
  links: {
    // https://mui.com/system/palette/
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImage: {
    // https://developer.mozilla.org/ja/docs/Web/CSS/filter-function/invert
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
  },
}));
