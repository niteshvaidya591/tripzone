import React from 'react'

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timer: {} };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let year = new Date().getFullYear();
    const difference = +new Date(`July 10, ${year} 18:00:00`) - +new Date();
    if (difference > 0) {
      this.setState({
        timer: {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      })
    }
  }

  render() {
    return (
      <>
        {this.state.timer.length !== 0 ? `${this.state.timer.days}d ${this.state.timer.hours}h ${this.state.timer.minutes}m ${this.state.timer.seconds}s` : null}
      </>
    )
  }
}
export default CountDown