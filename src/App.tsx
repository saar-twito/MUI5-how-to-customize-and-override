import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import MUIAutocomplete from './components/MUIAutocomplete';
import SuccessSlider2 from './components/MUISlider';

function App() {
  const theme = createTheme({
    // When pressing CTRL + SPACE you weill see what section of MUI(typography, palette etc) we can customize
    palette: {
      common: {
        black: '#2a2525', // instead of #000
      },
    },
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
    },
    example: {
      danger: 'red'
    }
  });

  return (
    <ThemeProvider theme={theme}> {/* Here I'm injecting the nre customize theme to my entire app */}
      {/* You can see what the body tag gets from CssBaseline.
    also its inhered the default MUI theme and your customize theme as well. 
    I personally think that i should stick with my css reset. */}
      <CssBaseline />
      <MUIAutocomplete />
      <SuccessSlider2 />
    </ThemeProvider>
  );
}

export default App;
