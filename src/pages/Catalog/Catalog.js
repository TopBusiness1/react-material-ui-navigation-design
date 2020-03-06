import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
import CatalogItem from './CatalogItem';
import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));


export default function Catalog() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {tileData.map(tile => (
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <CatalogItem item={tile} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
