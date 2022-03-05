import React, { Fragment } from 'react';
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.key = 0;
  }
  view(elements) {
    let result = [];
    elements.forEach((e) => {
      console.log(e);
      console.log(e.attribute);
      let data = e.attribute;
      console.log(data);
      this.key = data['key'] = ++this.key;
      this.key += 1;
      if (!Array.isArray(e.content)) {
        result.push(
          <Fragment key={this.key}>
            {React.createElement(e.type, data, e.content)}
          </Fragment>
        );
      } else {
        result.push(
          <Fragment key={this.key}>
            {React.createElement(e.type, data, this.view(e.content))}
          </Fragment>
        );
      }
    });
    console.log(result);
    return result;
  }
  render() {
    let main = this.view(this.props.elements.main);
    let footer = this.view(this.props.elements.footer);
    let header = this.view(this.props.elements.header);

    return( 
      <Fragment>
        {header}{main}{footer}
      </Fragment>
    );
  }
}
