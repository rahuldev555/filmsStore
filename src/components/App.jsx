import { CancelTwoTone } from '@mui/icons-material';
import { CssBaseline } from '@mui/material';
import { Switch, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Profile, NavBar } from './';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path='/movie/:id'>
            <MovieInformation />
          </Route>
          <Route exact path='/actors/:id'>
            <Actors />
          </Route>
          <Route exact path='/'>
            <Movies />
          </Route>
          <Route exact path='/profile/:id'>
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
