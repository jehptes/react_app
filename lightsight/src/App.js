import './App.css';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { HeroTitle } from './Landingpage';
import { HeroImageRight } from './HeroImageRight';
import { HeroBullets } from './HeroBullets';


const theme = createTheme({
  /** Put your mantine theme override here */
});


function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <HeroBullets/>
    </MantineProvider>
  );
}

export default App;
