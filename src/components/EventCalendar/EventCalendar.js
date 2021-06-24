import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import * as Locales from 'date-fns/locale';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en': Locales.enUS,
  'es': Locales.es,
  'fr': Locales.fr,
  'ja': Locales.ja,
  'zh': Locales.zhCN,
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
  render() {
    //console.log(this.props.currLanguageCode);
    return(
      <Calendar
        localizer={localizer}
        culture={this.props.currLanguageCode}
        events={myEventsList}
        style={{ height: 500 }}
      />
    );
  }
}

export default EventCalendar;
