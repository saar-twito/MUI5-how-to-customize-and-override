import { Slider, SliderProps, sliderClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

/* Reusable component */

/* To reuse the same overrides in different locations across your application,
 create a reusable component using the styled() utility: */

/* "I want to style the Slider components, and it will be of type SliderProps and we can get access to the theme " */

/* MUI's slider classes plain text */
const SuccessSlider1 = styled(Slider)<SliderProps>(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  backgroundColor: theme.example.danger,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      color: `blue`,
    },
    '&.Mui-active': {
      color: `purple`,
    },
  },
}));

/* MUI's slider classes with their typescript and much better choice */
const SuccessSlider2 = styled(Slider)<SliderProps>(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  backgroundColor: theme.example.danger,
  [`& .${sliderClasses.thumb}`]: {
    'border-radius': '0%', // Normal css
    [`&:hover, &.${sliderClasses.focusVisible}`]: {
      color: `blue`,
    },
    [`&.${sliderClasses.active}`]: {
      color: `purple`,
    },
  },
}));

export default SuccessSlider2;
