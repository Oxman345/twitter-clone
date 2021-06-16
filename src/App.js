import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LeftPanel } from './components';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <LeftPanel />
        <Switch>
          <Route path="/" exact>Home</Route>
          <Route path="/explore">Explore</Route>
          <Route path="/notifications">Notifications</Route>
          <Route path="/messages">Messages</Route>
          <Route path="/bookmarks">Bookmarks</Route>
          <Route path="/lists">Lists</Route>
          <Route path="/profile">Profile</Route>
        </Switch>
      </div>
      <div>Right Panel</div>
    </BrowserRouter>
    
  );
}

export default App;