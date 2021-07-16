import React from 'react';
import RescheduleView from './reschedule.view';
import { updateMeeting } from "./../../../lib/data/meetings.data";

class Reschedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: null,
      time: null,
      isLoading: false
    };
  }

  handleDateChange = (date) => {
    this.setState({date});
  };

  handleTimeChange = (time) => {
    this.setState({time});
  };

  handleSubmit = async () => {
    const { date, time } = this.state;
    const { id, handleClose } = this.props;
    this.setState({isLoading: true});
    await updateMeeting(id, {date, time})
    .then(() => {
      this.setState({isLoading: false});
      handleClose();
    });
  }
  render() {
    const { date, time, isLoading } = this.state;
    const { open, handleClose } = this.props;
    return (
      <RescheduleView
        open={open}
        date={date}
        time={time}
        isLoading={isLoading}
        handleTimeChange={this.handleTimeChange}
        handleDateChange={this.handleDateChange}
        handleClose={handleClose}
        handleSubmit={this.handleSubmit}
      />
    );
  }
  componentDidMount() {
    const { date, time } = this.props;
    this.setState({date, time});
  }
}

export default Reschedule;
