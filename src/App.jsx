import "./App.css";
import Quotes from "./components/quotes";

function App() {
  return (
    <div id="wrapper">
      <Quotes />
      <footer className="footer">
        <a target={'_blank'} href={"https://github.com/BarbosaThaissa"}>
          for <i className="fa-brands fa-github"></i> Barbosa Thaissa
        </a>
      </footer>
    </div>
  );
}

export default App;
