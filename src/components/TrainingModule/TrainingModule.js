import React from 'react';
import { connect } from 'react-redux'
import {
  Button,
  Card, CardBody, CardTitle,
  Row, Col,
  Form, FormGroup, Label, Input,
} from 'reactstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './TrainingModule.scss';

const Player = () => (
  <AudioPlayer className="TestAudio"
    autoPlay
    src="Uto-Fukurou.mp3"
    onPlay={e => console.log("onPlay")}
  />
)

class TrainingModule extends React.Component {
  render() {
    const {
      Player,
    } = this.props;

    return (
      <Card className="TrainingModule">
        <CardBody>
          <CardTitle tag="h5"> Training </CardTitle>
          <AudioPlayer className="TestAudio"
            controls
            autoPlay
            src="bruh.mp3"
            type="audio/mpeg"
            onPlay={e => console.log("onPlay")}
          />
        </CardBody>
      </Card>
    );
  }
}
/*
const ConnectedTrainingModule = connect(state => ({

}))(TrainingModule);
*/
export default TrainingModule;
