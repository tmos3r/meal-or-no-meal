import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

const colors = {
  primary: "#52b3b6",
  darkPrimary: "#06676a",
  darkestPrimary: "#003437",
  secondary: "#f26249",
  darkSecondary: "#ec2f3b",
  lightSecondary: "#ff9b5a",
  lightestSecondary: "#ffd58e",
  darkGray: "#333333",
  gray: "#7e7e7e",
  lightGray: "#d3d3d3",
  white: "#ffffff",
};

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "1rem",
          [breakpoints.down(992)]: {
            boxShadow: "none",
          },
        },
      },
    },
    MuiButtonBase: {
      variants: [
        {
          props: { variant: "full" },
          style: {
            color: `${colors.white} !important`,
            backgroundColor: colors.primary,
            "&:hover": {
              color: `${colors.white} !important`,
              backgroundColor: `${colors.primary} !important`,
              opacity: 0.7,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          border: `1px solid ${colors.lightGray}`,
          borderRadius: "10px !important",
        },
      },
    },
  },
});

export default theme;
