import FacilityList from '../facility/FacilityList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from './Header';
import './App.css'

const MuiTheme = createTheme();

function App() {
  return (
    document.title ="SF Parks & Rec",
    <div className='source'>
    <ThemeProvider theme={MuiTheme}>
    <BrowserRouter>    
      <Header>        
      </Header>
      <Routes>
        <Route path="/" element={<FacilityList/>} ></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
