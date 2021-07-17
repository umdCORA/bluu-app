import React from 'react';
import ISO6391 from 'iso-639-1';
import { connect } from 'react-redux'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { Button, Container, Row, Col } from 'reactstrap';
// import { Translator, Translate } from 'react-auto-translate';
import CallReport from './components/CallReport/CallReport';
// import EventCalendar from './components/EventCalendar/EventCalendar';
import { 
  DASHBOARD_PAGE,
  REPORT_PAGE,
  TRAINING_PAGE,
  CALENDAR_PAGE,
  CELEBRATION_PAGE,
  STAFF_PAGE,
  TCPR_PAGE,
  AED_PAGE,
  SETTINGS_PAGE,
} from './utils/Constants';
import bluuLogo from './assets/bluu-logo.jpeg';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevLanguageCode: 'en',   // previous selected language code (used by react-auto-translate library)
      currLanguageCode: 'en',   // current selected language code, defaults to English
      currLanguage: 'English',  // current selected language, defaults to English
      currPage: DASHBOARD_PAGE,
    };
  }

  // handles when a different language is selected
  onSelectLanguage = (language) => {
    const { currLanguageCode } = this.state;
    this.setState({
      prevLanguageCode: currLanguageCode,
      currLanguageCode: ISO6391.getCode(language),
      currLanguage: language
    });
  }

  renderContent = () => {
    const { currPage } = this.state;
    switch(currPage) {
      case REPORT_PAGE:
        return <CallReport/>
      default:
        return <div> WIP </div>
    }
  }

  render() {
    const {
      prevLanguageCode,
      currLanguageCode,
      currLanguage,
      currPage,
    } = this.state;

    // all ISO-638-1 languages in their native language. Parsing below
    // is to ensure that there are no duplicates
    const allNativeLanguageNames = [...new Set(ISO6391.getAllNativeNames())];
    // cache provider used to limit the number of requests we make to google API
    const cacheProvider = {
     get: (language, key) =>
       ((JSON.parse(localStorage.getItem('translations')) || {})[key] || {})[
         language
       ],
     set: (language, key, value) => {
       const existing = JSON.parse(localStorage.getItem('translations')) || {
         [key]: {},
       };
       existing[key] = {...existing[key], [language]: value};
       localStorage.setItem('translations', JSON.stringify(existing));
     },
    };

    return (
      <Container className="App" fluid>
        <Row className="app-row">
          <ProSidebar>
            <SidebarHeader>
              <span>Code Bluu</span>
              <img src={bluuLogo} width="90" height="auto"/>
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem 
                  active={currPage===DASHBOARD_PAGE}
                  onClick={() => this.setState({currPage: DASHBOARD_PAGE})}
                > 
                  Dashboard 
                </MenuItem>
                <MenuItem
                  active={currPage === REPORT_PAGE}
                  onClick={() => this.setState({currPage: REPORT_PAGE})}
                >
                  Make a Report
                </MenuItem>
                <MenuItem
                  active={currPage === TRAINING_PAGE}
                  onClick={() => this.setState({currPage: TRAINING_PAGE})}
                >
                  Training
                </MenuItem>
                <MenuItem 
                  active={currPage === CALENDAR_PAGE}
                  onClick={() => this.setState({currPage: CALENDAR_PAGE})}
                > 
                  Calendar
                </MenuItem>
                <MenuItem
                  active={currPage === CELEBRATION_PAGE}
                  onClick={() => this.setState({currPage: CELEBRATION_PAGE})}
                >
                  Celebration Board
                </MenuItem>
                <MenuItem
                  active={currPage === STAFF_PAGE}
                  onClick={() => this.setState({currPage: STAFF_PAGE})}
                >
                  Staff 
                </MenuItem>
                <MenuItem
                  active={currPage === TCPR_PAGE}
                  onClick={() => this.setState({currPage: TCPR_PAGE})}
                > 
                  tCPR 
                </MenuItem>
                <MenuItem
                  active={currPage === AED_PAGE}
                  onClick={() => this.setState({currPage: AED_PAGE})}
                > 
                  AED Locator 
                </MenuItem>
                <MenuItem
                  active={currPage === SETTINGS_PAGE}
                  onClick={() => this.setState({currPage: SETTINGS_PAGE})}
                >
                  Settings
                </MenuItem>
              </Menu>
            </SidebarContent>
            </ProSidebar>
          <Col className="content">
            {this.renderContent()}
          </Col>
        </Row>
      



      {/*
        <select
          className='languageDropdown'
          value={currLanguage}
          onChange={e => this.onSelectLanguage(e.target.value)}
        >
          {allNativeLanguageNames.map(lang => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <Translator
          cacheProvider={cacheProvider}
          from={prevLanguageCode}
          to={currLanguageCode}
          googleApiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY}
        >
          <div>
            <Translate>Hello world! Current app implementation is testing translation features. Click the dropdown to select a supported language.</Translate>
          </div>
        </Translator>
<<<<<<< HEAD
        */}
      {/*<EventCalendar currLanguageCode={currLanguageCode} /> */}
      </Container>
    );
  }
}

const ConnectedApp = connect(state => ({
  workerName: state.workerName,
  inputDate: state.inputDate,
  startTime: state.startTime,
  endTime: state.endTime,
  callerLocation: state.callerLocation,
  emsDispatched: state.emsDispatched,
}))(App);

export default ConnectedApp;
