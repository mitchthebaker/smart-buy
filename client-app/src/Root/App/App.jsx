import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// layout 
import StandardLayout from '../../layout/StandardLayout';

// pages
import Landing from '../../pages/Landing';
import Dashboard from '../../pages/Dashboard';
import NoMatch from '../../pages/NoMatch';

const routes = [
  {
    path: '/',
    layout: StandardLayout,
    page: Landing
  },
  {
    path: '/dashboard',
    layout: StandardLayout,
    page: Dashboard
  },
  {
    path: '*',
    layout: StandardLayout,
    page: NoMatch
  }
];

// Routing config 
// Within each route a layout contains a page, i.e. Landing, Dashboard, etc. 
const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, layout: Layout, page: Page }) => (
          <Route key={path} path={path} element={
            <Layout>
              <Page />
            </Layout>
          } />  
        ))}
      </Routes>
    </Router>
  );
};

export default App;
