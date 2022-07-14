import { createTheme, ThemeProvider } from '@mui/material';
import { useCookies } from 'react-cookie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, NotFound, Travel, Resume } from './pages';

const App = () => {
  const [cookies] = useCookies(['theme']);

  const theme = createTheme({
    palette: {
      mode: cookies.theme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
