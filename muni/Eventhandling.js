import React, { Component } from 'react'

    class Eventhandling extends Component {
        constructor(props){
            super(props)
            this.state={
                feildname:'',
                rand:''

            }

            // this.onchangeHandler = this.onchangeHandler.bind(this);
            // this.onClickhandler = this.onClickhandler.bind(this);
            // this.onHoverhandler = this.onHoverhandler.bind(this);
            // this.onKeypresshandler = this.onKeypresshandler.bind(this);

        }


        onchangeHandler=(event)=>{
            this.setState({
                feildname:event.target.value
            })
        }

        onClickhandler=()=>{
            alert('onclick event occured')
        }

        onHoverhandler=()=>{
            this.setState({rand :  Math.floor(Math.random()*10000)});
        }

        onKeypresshandler=(event)=>{
            if(event.key==='y'){
                alert('you have pressed yes')
            }
            else if(event.key==='n'){
                alert('you have presses no')
            }

        }

    render() {
        return (
            <div className="Eventhandling">
                {this.state.feildname}
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <label>onChange Event</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" onChange={this.onchangeHandler} />
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <label>onClick Event</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.onClickhandler}>Click Me</button>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                {this.state.rand}
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <label>onMousehover Event</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onMouseOver={this.onHoverhandler}>Hover</button>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <label>onKeyPress Event</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" onKeyPress={this.onKeypresshandler} />
                <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
                
            </div>
        )
    }
}

export default Eventhandling
