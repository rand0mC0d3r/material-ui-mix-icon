import React, { Component } from 'react';

import ComposedIconDesigner from '../ComposedIconDesigner/ComposedIconDesigner';
import ComposedIconPreview from '../ComposedIconPreview/ComposedIconPreview';

import './ComposedIconDashboard.css';

class ComposedIconDashboard extends Component {
  constructor() {
    super();

    this.state = {
      props: {
        position: 'bottom-end',
      },
    }
  }

  updateComposedIcon = (key, value) => {
    const { props } = this.state;
    props[key] = value;
    this.setState({
      props: {...props },
    })
    console.log(props);
  }

  render() {
    const { props } = this.state;

    return (
      <div className="ComposedIconDashboard__container">
        <div className="ComposedIconDashboard__designer">
          <ComposedIconDesigner updateComposedIcon={this.updateComposedIcon} />
        </div>
        <div className="ComposedIconDashboard__preview">
          <ComposedIconPreview props={props} />
        </div>
      </div>
    );
  }
}

export default ComposedIconDashboard;