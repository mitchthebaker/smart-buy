import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// layout 
import StandardLayout from '../../layout/StandardLayout';

// pages
import Landing from '../../pages/Landing';
import NoMatch from '../../pages/NoMatch';

const routes = [
  {
    path: '/',
    layout: StandardLayout,
    page: Landing
  },
  {
    path: '*',
    layout: StandardLayout,
    page: NoMatch
  }
];

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
