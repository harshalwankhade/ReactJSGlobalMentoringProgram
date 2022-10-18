import { React, PureComponent } from 'react'

export default class Toggle extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            toggleValue:"ON"
        }
    }

    ChangeToggleValue() {
        if (this.state.toggleValue==="ON") {
            this.setState({ toggleValue: "OFF"});
        }
        else{
            this.setState({ toggleValue: "ON"});
        }
    }

  render() {
    return (
        <div>
            <button onClick={()=>this.ChangeToggleValue()}>Toggle Value</button>
            &nbsp;&nbsp;{this.state.toggleValue}
        </div>
    )
  }
}

