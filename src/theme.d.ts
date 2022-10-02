export declare module '@mui/material/styles' {
  /* This for access the theme like in the MUISlider.tsx file */
  interface Theme {
    example: {
      danger: string;
    };
  }

  // This is for allowing configuration using `createTheme in the App.tsx file`
  interface ThemeOptions {
    example?: {
      danger?: string;
    };
  }
}
