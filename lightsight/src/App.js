import './App.css';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { HeroBullets } from './HeroBullets';
import { HeaderMegaMenu } from './HeaderMegaMenu';
import { ContactUs } from './ContactUs';
import { ContactIcons } from './ContactIcons';
import { Route, Routes } from 'react-router-dom';


const theme = createTheme({
  /** Put your mantine theme override here */
});


function App() {
  return (
    <MantineProvider
    defaultColorScheme='dark'
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        colors: {
          // override dark colors to change them for all components and the 
          // 8th colour is my colour to change the whole background
          dark: [
            '#d5d7e0',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#2b2c3d',
            '#092022',
            '#0c0d21',
            '#01010a'
          ],
        },
      }}
    >
      <HeaderMegaMenu/>
      <Routes>  
        <Route path='/' element= {<HeroBullets/>} ></Route>
        <Route path='/contact' element= {<ContactUs/>} ></Route>
      </Routes>
    </MantineProvider>
    
  );
}

export default App;

