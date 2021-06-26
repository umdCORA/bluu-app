import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import * as Locales from 'date-fns/locale';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  "af": Locales.af,
  //"ar": Locales.ar,
  "az": Locales.az,
  "be": Locales.be,
  "bg": Locales.bg,
  "bn": Locales.bn,
  "ca": Locales.ca,
  "cs": Locales.cs,
  "cy": Locales.cy,
  "da": Locales.da,
  "de": Locales.de,
  "el": Locales.el,
  "en": Locales.enUS,
  "eo": Locales.eo,
  "es": Locales.es,
  "et": Locales.et,
  "eu": Locales.eu,
  "fa": Locales.faIR,
  "fi": Locales.fi,
  "fr": Locales.fr,
  "gd": Locales.gd,
  "gl": Locales.gl,
  "gu": Locales.gu,
  "he": Locales.he,
  "hi": Locales.hi,
  "hr": Locales.hr,
  "ht": Locales.ht,
  "hu": Locales.hu,
  "hy": Locales.hy,
  "id": Locales.id,
  "is": Locales.is,
  "it": Locales.it,
  "ja": Locales.ja,
  "ka": Locales.ka,
  "kk": Locales.kk,
  "kn": Locales.kn,
  "ko": Locales.ko,
  "lb": Locales.lb,
  "lt": Locales.lt,
  "lv": Locales.lv,
  "mk": Locales.mk,
  "mn": Locales.mn,
  "ms": Locales.ms,
  "mt": Locales.mt,
  "nb": Locales.nb,
  "nl": Locales.nl,
  "nn": Locales.nn,
  "pl": Locales.pl,
  "pt": Locales.pt,
  "ro": Locales.ro,
  "ru": Locales.ru,
  "sk": Locales.sk,
  "sl": Locales.sl,
  "sq": Locales.sq,
  "sr": Locales.sr,
  "sv": Locales.sv,
  "ta": Locales.ta,
  "te": Locales.te,
  "th": Locales.th,
  "tr": Locales.tr,
  "ug": Locales.ug,
  "uk": Locales.uk,
  "uz": Locales.uz,
  "vi": Locales.vi,
  "zh": Locales.zhCN,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
// javascript indexes months 0-11
const myEventsList = [
  {
    title: 'My first event',
    start: new Date(2021, 5, 22),
    end: new Date(2021, 5, 28),
  },
  {
    title: 'My second event',
    allDay: true,
    start: new Date(2021, 5, 22),
    end: new Date(2021, 5, 23),
  },
  {
    title: 'My third event',
    allDay: false,
    start: new Date(2021, 5, 12, 8),
    end: new Date(2021, 5, 12, 12),
  },
  {
    title: 'special',
    start: new Date(),
    end: new Date(),
  },
  {
    title: 'extra',
    start: new Date(2021, 5, 18),
    end: new Date(2021, 5, 18),
  },
];

class EventCalendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { events: myEventsList };
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('new event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            title,
            start,
            end,
          },
        ],
      })
  }

  handleClick = (event) => {
    if(window.confirm('delete ' + event.title + '?')) {
      this.setState({ events: this.state.events.filter(e => !(e === event)) });
    }
  }

  render() {
    return(
      <Calendar
        selectable
        localizer={localizer}
        culture={this.props.currLanguageCode}
        events={this.state.events}
        onSelectEvent={this.handleClick}
        onSelectSlot={this.handleSelect}
        style={{ height: 500 }}
      />
    );
  }
}

export default EventCalendar;
