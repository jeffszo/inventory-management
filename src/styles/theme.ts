// theme.ts ou theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#05111a', 
      },
    },
  },
});

export default theme;
