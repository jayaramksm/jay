import React, { PureComponent } from 'react';

class Pure_rerendeComponent extends PureComponent {
    state = {}
    render() {
        console.log("Pure_rerendeComponent ==>")
        return (
            <div>
                <h3 className="text-center"> Pure_rerendeComponent</h3>
                <div className="card">
                    <div className="card-header text-center"> {this.props.name} Rohith</div>
                    <div className="card-body text-center">hello</div>
                </div>

            </div>
        );
    }
}

export default Pure_rerendeComponent;