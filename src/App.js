//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="column setup">
        <h2>Setup</h2>
        <p>Some configuration..</p>
      </div>
      <div className="column bot">
        <h2>Bot</h2>
        <p>Some work to do..</p>
      </div>
      <div className="column log">
        <h2>Log</h2>
        <p>Some log to print..</p>
      </div>

      {/* <div className="Bot">
        <header className="Bot-header">
          <h1>Setup</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <button>Hello</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://twitter.com/CuteGiraffe_NFT"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your Twitter
          </a>
        </header>
        <body>

        </body>
      </div> */}

    </div>
  );
}

export default App;
