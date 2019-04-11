import React from "react";
import { Button, Fade } from "reactstrap";

export default class Fadein extends React.Component {
  state = {
    fadeIn: true
  };

  toggle = () => {
    this.setState(prevState => ({
      fadeIn: !prevState.fadeIn
    }));
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          Toggle Fade
        </Button>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
          This content will fade in and out as the button is pressed
        </Fade>
      </div>
    );
  }
}
