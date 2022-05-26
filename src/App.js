import xrpSymbol from "./xrpSymbol.svg";
import goSymbol from "./go-logo.png";
import team from "./team.png";
import devs from "./devs.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={xrpSymbol} className="xrp-logo" alt="xrpLogo" />
        <div className="header-title">xYield Labs</div>
        <div className="header-info">
          Building open source Golang products for the XRPL
        </div>
      </div>

      <div className="page-container">
        <div className="section-header">Projects</div>
        <div className="section-break"></div>

        <div className="project-container">
          <div className="project-item-icon">
            <a
              href="https://github.com/xyield/xrpl-go"
              rel="noopener noreferrer"
            >
              <img src={goSymbol} className="project-icon" alt="xrpLogo" />
            </a>
          </div>
          <div className="project-item-text">
            <div className="project-item-header">Go4Zerps</div>
            Harnessing XUMM and XRP with Golang Go4Zerps is a Golang SDK for
            developing on the XRP Ledger via the XUMM platform. View our Github
            repo{" "}
            <a
              className="App-link"
              href="https://github.com/xyield/xumm-go-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </div>
        </div>

        <div className="project-container">
          <div className="project-item-icon">
            <a
              href="https://github.com/xyield/xrpl-go"
              rel="noopener noreferrer"
            >
              <img src={goSymbol} className="project-icon" alt="xrpLogo" />
            </a>
          </div>
          <div className="project-item-text">
            <div className="project-item-header">xrpl.go</div>
            Unlocking the XRPL to Go developers xrpl.go will be a Golang SDK for
            interacting directly with the XRP Ledger. View our Github repo{" "}
            <a
              className="App-link"
              href="https://github.com/xyield/xrpl-go"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </div>
        </div>

        <div className="section-header">The Team</div>
        <div className="section-break"></div>

        <div className="meet-the-team-box">
          <img src={team} className="image-item" alt="teamImage"></img>
          <div className="text-item">
            <p>
              {" "}
              Our Manchester UK-based team of 3 (Brigid, Josh and Josh) are
              passionate about the XRP ecosystem and are excited to innovate on
              behalf of the XRP community.
            </p>
            <p style={{ paddingTop: "10px" }}> More to come soon! </p>
          </div>
          <img src={devs} className="image-item" alt="devsImage"></img>
        </div>
      </div>

      <div className="keep-posted-container">
        <div className="keep-posted-content">
          <p>Keep posted on upcoming work by emailing us at</p>
          <p style={{ fontWeight: "bold" }}>josh@xyieldlabs.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
