import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import * as Locales from 'date-fns/locale';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './EventCalendar.scss';

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

const people = ['kevin', 'michael', 'anna', 'arden', 'jason'];

// javascript indexes months 0-11
const myEventsList = [
  {
    title: 'Testevent KM',
    start: new Date(2021, 6, 22),
    end: new Date(2021, 6, 28),
    attendees: ['kevin', 'michael'],
    class: 'cpr-simulation',
  },
  {
    title: 'Testevent KAZ',
    allDay: true,
    start: new Date(2021, 6, 22),
    end: new Date(2021, 6, 23),
    attendees: ['kevin', 'anna', 'arden'],
    class: 'cpr-simulation',
  },
  {
    title: 'Testevent MAJ',
    allDay: false,
    start: new Date(2021, 6, 12, 8),
    end: new Date(2021, 6, 12, 12),
    attendees: ['michael', 'anna', 'jason'],
    class: 'in-person',
  },
  {
    title: 'Testevent All',
    start: new Date(),
    end: new Date(),
    attendees: ['kevin', 'michael', 'anna', 'arden', 'jason'],
    class: 'cpr-simulation',
  },
  {
    title: 'Testevent Z',
    start: new Date(2021, 6, 18),
    end: new Date(2021, 6, 18),
    attendees: ['arden'],
    class: 'in-person',
  },
];

class EventCalendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: myEventsList,
      selectedPeople: [],
    };
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('new event name')
    if (!title) return;

    const attendees = window.prompt('attendees (comma separated list)')
    if (!attendees) return;

    const type = window.prompt('type (in-person or cpr-simulation)')
    if (!type) return;

    this.setState({
      events: [
        ...this.state.events,
        {
          title,
          start,
          end,
          attendees: attendees.split(','),
          class: type,
        },
      ],
    })
  }

  handleClick = (event) => {
    if(window.confirm('delete ' + event.title + '?')) {
      this.setState({ events: this.state.events.filter(e => !(e === event)) });
    }
  }

  eventDisplay = (event, _start, _end, _isSelected) => {
    if(event.attendees?.filter(val => this.state.selectedPeople.includes(val)).length)
      return {className: event.class}
    return {style: {display: 'none'}}
  }

  peopleSelect = (person, checked) => {
    if(checked) {
      this.setState({ selectedPeople: this.state.selectedPeople.concat(person) });
    } else {
      this.setState({ selectedPeople: this.state.selectedPeople.filter(val => val !== person) });
    }
  }

  render() {
    return(
      <>
        <h1>Calendar</h1>
        <Container fluid>
          <Row>
            <Col xs="auto">
              <Row><h3>Trainings</h3></Row>
              <Row><div class='box cpr-simulation'/>CPR Training Simulations</Row>
              <Row><div class='box in-person'/>In-Person Trainings</Row>
              <Row><h3>Meetings</h3></Row>
              <Row><div class='box cpr-simulation'/>CPR Training Simulations</Row>
              <Row><div class='box in-person'/>In-Person Trainings</Row>
            </Col>
            <Col>
              <Row><h3>People</h3></Row>
              <Form.Group>
                {people.map(p => <Form.Check type="checkbox" label={p} onChange={e => this.peopleSelect(p, e.target.checked)} />)}
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Calendar
          selectable
          localizer={localizer}
          culture={this.props.currLanguageCode}
          events={this.state.events}
          onSelectEvent={this.handleClick}
          onSelectSlot={this.handleSelect}
          eventPropGetter={this.eventDisplay}
          style={{ minHeight: '700px' }}
        />
      </>
    );
  }
}

export default EventCalendar;
