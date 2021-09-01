import { ThemeProvider } from "@material-ui/styles";
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {
  createTheme,
  CssBaseline
} from "@material-ui/core";

// Pages
import Home from "./pages/Home";
import HindiNews from "./pages/HindiNews";
import View from "./pages/View";


// Theme
const theme = createTheme({
  palette: {
    type: 'dark',
  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/hindinews" exact component={HindiNews} />
        <Route path="/view" exact component={View} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
