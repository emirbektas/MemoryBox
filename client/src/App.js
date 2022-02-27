import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import CreateScreen from "./Screens/CreateScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/create" component={CreateScreen} />
      </Container>
    </Router>
  );
}

export default App;
