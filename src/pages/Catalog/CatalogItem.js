import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  appleft: {
      textAlign: 'left',
  },
  appright: {
      textAlign: 'right',
  },
}));


const tile = {
  img: './static/images/grid-list/burgers.jpg',
  title: 'Tasty burger',
  author: 'director90',
  item: 194237,
  wholesalePrice: 55,
  retailPrice: 72.37,
  PV: 27.50,
  description: 'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
};

export default function CatalogItem(props) {
  const classes = useStyles();
  const item = props.item;

  return (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={item.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
              <Grid item>
                <Typography variant="inherit" color="textSecondary" className={classes.appleft}>{item.title} ID : </Typography>
                <Typography variant="inherit" color="textSecondary">{tile.item}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="inherit" gutterBottom className={classes.appleft}> Wholesale Price:</Typography>
                <Typography variant="inherit" className={classes.appright}>${tile.wholesalePrice}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="inherit" gutterBottom className={classes.appleft}>{item.author} Retail Price:</Typography>
                <Typography variant="inherit" className={classes.appright}>${tile.retailPrice}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="inherit" gutterBottom className={classes.appleft}>PV :</Typography>
                <Typography variant="inherit" className={classes.appright}>{tile.PV}</Typography>
              </Grid>
          </Grid>
        </Grid>
  );
}
