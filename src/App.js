import xrpSymbol from './xrpSymbol.svg';
import goSymbol from './go-logo.png';
import team from './team.png'
import devs from './devs.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header className="header">
        <img src={xrpSymbol} className="xrp-logo" alt="xrpLogo" />
        <h1>
        xYield Labs
        </h1>
        </header>
      <div className="header-info">
        Building open source products on the XRP Ledger using {" "} <br/>
        <a
        className="App-link"
        href="https://xumm.app"
        target="_blank"
        rel="noopener noreferrer"
        >
            XUMM
        </a>
      </div>
      <div>
      <img src={goSymbol} className="xrp-logo" alt="xrpLogo" />
        <div className='coming-soon'>
           Coming Soon...
        </div>
      </div>
      </div>

     <div className="App-info1">
      {/* <div className="meet-the-team1">
        <div className="meet-the-team-image1">
          <img src={team} className="team-image1" alt="teamImage" />
        </div>
        <div className="meet-the-team-text1">
            As a small team of 3 we are committed to improving the XRP holder's experience. 
        </div>
        <div className="meet-the-team-image-devs1">
          <img src={devs} className="devs-image1" alt="devsImage" />
        </div>
      </div>
      <div className="keep-posted">
          Keep posted on upcoming work by emailing us at: <br/> hello@gmail.com
      </div> 
      */}

      <div className="meet-the-team-box">
        <img src={team} className="image-item" alt="teamImage"></img>
        <p className="text-item"> Our Manchester UK-based team of 3 (Brigid, Josh and Josh) are passionate about the XRP ecosystem and are excited to innovate on behalf of the XRP community. Our first project involves writing a GoLang client for the Xumm API in order to enable further development in the ever growing and popular GO community. <br></br>More to come soon. 
        </p>
        <img src={devs} className="image-item" alt="devsImage"></img>
      </div>
      <div className="keep-posted">
            Keep posted on upcoming work by emailing us at: <br/> joshua.antonio.long@gmail.com
      </div> 
    </div>
  </div> 

  );
}

export default App;
