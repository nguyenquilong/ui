import { createTheme } from '@mui/material/styles';

const fontSize = {
    display: 44,
    xl: 24,
    l: 20,
    mBase: 18,
    s: 16,
    xs: 14,
    xxs: 12,
  };
  
  const lineHeights = {
    display: 60,
    xl: 32,
    l: 28,
    mBase: 28,
    s: 24,
    xs: '20px',
    xxs: 16,
  };
  
  const fontWeight = {
    medium: 500,
    regular: 400,
    semiBold: 600,
  };
  
  const createTypography = (size, height, weight, underline = false) => ({
    fontSize: size, // giữ nguyên kiểu number
    lineHeight: height, // giữ nguyên kiểu number
    fontWeight: weight,
    ...(underline && { textDecoration: 'underline' }),
  });
  
  export const typography = {
    fontFamily: 'Segoe UI, Inter, Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: fontSize.xs,
    lineHeight: 'normal',
    fontWeight: 400,
    bodySMedium: createTypography(fontSize.xxs, lineHeights.xxs, fontWeight.medium),
    bodyMSemiBold: createTypography(fontSize.xxs, lineHeights.xxs, fontWeight.semiBold),
    bodyMBaseMedium: createTypography(fontSize.xs, lineHeights.xs, fontWeight.medium),
    bodyMBaseRegular: createTypography(fontSize.xs, lineHeights.xs, fontWeight.regular),
    bodyLMedium: createTypography(fontSize.s, lineHeights.s, fontWeight.medium),
    bodyLRegular: createTypography(fontSize.s, lineHeights.s, fontWeight.regular),
    bodyLUnderline: createTypography(fontSize.s, lineHeights.s, fontWeight.regular, true),
    displayMedium: createTypography(fontSize.display, lineHeights.display, fontWeight.medium),
    displayRegular: createTypography(fontSize.display, lineHeights.display, fontWeight.regular),
    displayUnderline: createTypography(fontSize.display, lineHeights.display, fontWeight.regular, true),
    h1XLMedium: createTypography(fontSize.xl, lineHeights.xl, fontWeight.medium),
    h1XLRegular: createTypography(fontSize.xl, lineHeights.xl, fontWeight.regular),
    h1XLUnderline: createTypography(fontSize.xl, lineHeights.xl, fontWeight.regular, true),
    h2LMedium: createTypography(fontSize.l, lineHeights.l, fontWeight.medium),
    h2LRegular: createTypography(fontSize.l, lineHeights.l, fontWeight.regular),
    h2LUnderline: createTypography(fontSize.l, lineHeights.l, fontWeight.regular, true),
    h3MBaseMedium: createTypography(fontSize.mBase, lineHeights.mBase, fontWeight.medium),
    h3MBaseRegular: createTypography(fontSize.mBase, lineHeights.mBase, fontWeight.regular),
    h4SMedium: createTypography(fontSize.s, lineHeights.s, fontWeight.medium),
    h4SRegular: createTypography(fontSize.s, lineHeights.s, fontWeight.regular),
    h4SUnderline: createTypography(fontSize.s, lineHeights.s, fontWeight.regular, true),
    h5XSMedium: createTypography(fontSize.xs, lineHeights.xs, fontWeight.medium),
    h5XSRegular: createTypography(fontSize.xs, lineHeights.xs, fontWeight.regular),
    h5XSUnderline: createTypography(fontSize.xs, lineHeights.xs, fontWeight.regular, true),
  };
  
  
const theme = createTheme({
  spacing: 4, // Định nghĩa spacing cơ bản là 4px, có thể sử dụng 4x để điều chỉnh spacing trong toàn bộ ứng dụng
  typography,
  palette: {
    primary: {
      main: '#FFF',
      contrastText: '#000',
    },
    background: {
      default: '#FFF',
    },
    action: {
      selected: 'rgba(255, 255, 255, 1)',
      hover: 'rgba(255, 255, 255, 0.1)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.9)',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
            padding: 16,
          backgroundColor: '#000',
        },
      },
    },
    MuiListItemButton: {
        
      styleOverrides: {
        root: {
          minHeight: 44,
          padding: 0,
          '&.Mui-selected, &:hover': {
            opacity: 1,
          },
          color: '#FFF',
          opacity: 0.6,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 0,
          width: 20,
          height: 20,
          justifyContent: 'center',
          color: 'inherit',
          '& .MuiSvgIcon-root': {
            width: 'auto',
            height: 'auto'
          }
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginLeft: 12, 
          marginTop: 0,
          marginBottom: 0,
          color: 'inherit',
          opacity: 1,
        },
      },
    },
  },
});

export default theme;