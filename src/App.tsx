import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './theme/global.style';
import theme from './theme';
import Layout from './routes/Layout';
import { NavigationLinks } from './configurations/settings';
import Home from './routes/Home';
import Error404 from './components/Error404';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: NavigationLinks.Home,
        element: <Home />
      },
      {
        path: NavigationLinks.Error404,
        element: <Error404 />
      }
    ]
  }
]);

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
