import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Nav from './nav';
import About from './about';
import Introduction from './intro';
import Timeline from './timeline';
import Projects from './projects';
import Skills from './skills';
import Tools from './tools';
import Certificate from './certificate';

function App() {
  return (
    <>
      <Router>
        <div id="colorlib-page">
          <div id="container-wrap">
            <Nav></Nav>
            <div id="colorlib-main">
              <Introduction></Introduction>
              <About></About>
              <Projects></Projects>
              <Certificate></Certificate>
              <Timeline></Timeline>
              <Skills></Skills>
              <Tools></Tools>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
