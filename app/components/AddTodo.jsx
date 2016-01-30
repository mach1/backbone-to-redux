import React from 'react';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onAdd({
      text: this.refs.text.value
    });
  }

  render() {
    return (
      <div>
        <input ref="text" type="text" />
        <a href="javascript:void(0)" onClick={this.handleClick}>Add todo</a>
      </div>
    );
  }
}
