import React from 'react';
import ISO6391 from 'iso-639-1';
import { Translator, Translate } from 'react-auto-translate';
import EventCalendar from './components/EventCalendar/EventCalendar';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevLanguageCode: 'en',   // previous selected language code (used by react-auto-translate library)
      currLanguageCode: 'en',   // current selected language code, defaults to English
      currLanguage: 'English',  // current selected language, defaults to English
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

  render() {
    const {
      prevLanguageCode,
      currLanguageCode,
      currLanguage,
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
      <div className='App'>
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
        <EventCalendar currLanguageCode={currLanguageCode} />
      </div>
    );
  }
}

export default App;
