import React from "react";

class ClassCard extends React.Component {
  constructor(props) {
    super();
    console.log("I am constructor");

    this.state = {
      count: props.intialValue||0,
    };
    this.onAdd = this.onAdd.bind(this);
    this.onMinus = this.onMinus.bind(this);
  }



  onAdd() {
    const { count } = this.state;
    if (count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  }
  onMinus() {
    const { count } = this.state;
    const {intialValue}  = this.props
    if (count > (intialValue||0)) {
      this.setState({ count: count - 1 });
    }
  }

  render() {
    console.log("I am render");
    const { count } = this.state;

    return (
      <div>
        <h1>I am a class Component I got Render</h1>

        <p>Count :{count}</p>

        <button onClick={this.onAdd}>Add</button>

        <button onClick={this.onMinus}>Minus</button>
      </div>
    );
  }
}

export default ClassCard;
