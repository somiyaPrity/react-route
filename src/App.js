import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Details from './component/Details/Details';
import Friends from './component/Friends/Friends';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Page from './component/Page/Page';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/friends'>
            <Friends></Friends>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route>
            <Page></Page>
          </Route>
          <Route path='/friend/:friendId'>
            <Details></Details>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
