import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    console.log("I am invoked")
    super(props);

    this.state = {
      name: "ABC",
      age: 10,
    };

    this.onInput = this.onInput.bind(this);
  }

  onInput(e) {
    const {name,value} = e.target


    this.setState({[name]:value})
    
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("Do you want to update the component?")
    console.log({nextState})
   if(+nextState.age===7){
    return false
   }
    return true
  }

  getSnapshotBeforeUpdate(prevProps,preState){
    console.log("Access values before update")
    console.log({preState,prevProps})
    return null
  }

  componentDidUpdate(){
    console.log("I am updated")
  }

  componentWillUnmount(){
    console.log("I am going to unmount")
  }
  componentDidMount(){
        setTimeout(() => {
            console.log("Hello I am mounted")
        }, 1000);
  }

  render() {

    console.log("I am redered")
  
    return (
      <div>
        <h1>Hello LifeCycle</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            onChange={this.onInput}
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            name="age"
            id="age"
            type="range"
            onChange={this.onInput}
            value={this.state.age}
          />
        </div>

        <div>
            {this.state.name}- {this.state.age} 

        </div>
      </div>
    );
  }
}

export default LifeCycle;
