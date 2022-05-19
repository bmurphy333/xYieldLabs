import xrpSymbol from "./xrpSymbol.svg";
import goSymbol from "./go-logo.png";
import team from "./team.png";
import devs from "./devs.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header className="header">
          <img src={xrpSymbol} className="xrp-logo" alt="xrpLogo" />
          <h1>xYield Labs</h1>
        </header>
        <div className="header-info">
          Building open source Golang products for the XRPL
          {/* <a
        className="App-link"
        href="https://xumm.app"
        target="_blank"
        rel="noopener noreferrer"
        >
            XUMM
        </a> */}
        </div>

        {/* <div>
          <img src={goSymbol} className="xrp-logo" alt="xrpLogo" />
          <div className="coming-soon">Coming Soon...</div>
        </div> */}
      </div>

      <div className="page-container">
        <div className="section-header">Projects</div>
        <div className="section-break"></div>

        <div className="project-container">
          <div className="project-item-icon">
            <img src={goSymbol} className="project-icon" alt="xrpLogo" />
          </div>

          <div className="project-item-text">
            <div className="project-item-header">
              Project 1
            </div>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
        </div>

        <div className="project-container">
          <div className="project-item-icon">
            <img src={goSymbol} className="project-icon" alt="xrpLogo" />
          </div>
          <div className="project-item-text">
            <div className="project-item-header">
              Project 2
            </div>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
        </div>

        <div className="section-header">The Team</div>
        <div className="section-break"></div>
      </div>

      {/* <div className="info-container">
        <div className="info-text">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
        </div>
        <div className="info-projects">
          <div className="info-projects-item">
            Project 1
          </div>
          <div className="info-projects-item">
            Project 1
          </div>
        </div>
      </div> */}

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

        <div className="keep-posted-container">
          <div className="keep-posted-content">
            <p>Keep posted on upcoming work by emailing us at</p>
            <p style={{ fontWeight: "bold" }}>josh@xyieldlabs.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
