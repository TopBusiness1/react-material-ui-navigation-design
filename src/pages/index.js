import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Header from '../containers/header/header';
import Footer from '../containers/footer/footer';
import Menus from '../containers/menu/menu';

import Catalog from './Catalog/Catalog';
import Category from './Category/category';
import Papers from './paper/paper';



const PageCustomers = () => <Typography variant="h3" component="h1">Customers Page</Typography>
const PageReports = () => <Typography variant="h3" component="h1">Reports Page</Typography>

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  positions:{
    marginTop: 20,
    marginBottom: 70,
  },
}));
function Pages() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

return (
    <div className={classes.root}>
      <BrowserRouter>
        <CssBaseline />
        <Header handleDrawerToggle={handleDrawerToggle} />
        
        <Menus mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
        
        <Container className={classes.positions}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/" exact component={Papers} />
            <Route path="/orders" component={Category} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/customers" component={PageCustomers} />
            <Route path="/reports" component={PageReports} />
          </Switch>

        </Container>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}
Pages.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default Pages;