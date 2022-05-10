import Header from './reusable_components/Header';
import Footer from './reusable_components/Footer';
import Clients from './clients_tab/Clients';
import Projects from './projects_tab/Projects';
import TeamMembers from './team_members_tab/TeamMembers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
            <Header />
            <div className="wrapper">
            <section className="content">
              <Routes>
                <Route path='/clients' element={ <Clients/> } />
                <Route path='/projects' element={ <Projects/> } />
                <Route path='/team-members' element={ <TeamMembers/> } />
              </Routes>
            </section>
            </div>
            <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
