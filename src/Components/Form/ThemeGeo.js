import { createMuiTheme } from "@material-ui/core/styles";

const themeGeo = createMuiTheme({
  palette: {
    primary: {
      main: "#5C3ECA",
    },
  },
  shape:
  {
    borderRadius:25  
  },
  spacing: {
      mui: false
  },
});

export default themeGeo;
