import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import AddCampaign from './screens/AddCampaign';
import AddCandidates from './screens/AddCandidates';
import Home from './screens/Home';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <div>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/addCampaign"><AddCampaign /></Route>
            <Route path="/addCandidates"><AddCandidates /></Route>
          </Switch>
        </div>
      </div>
    </Router>    
  );
}

export default App;
