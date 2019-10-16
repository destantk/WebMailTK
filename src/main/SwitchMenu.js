import React from "react";

class SwitchMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    render() {
        const count = this.state.count + "%"
        var back = "info-box bg-green";
        if (this.state.count < 20) {
            back = "info-box bg-red";
        } else if (this.state.count > 20 && this.state.count < 60) {
            back = "info-box bg-orange";
        } else if (this.state.count > 60) {
            back = "info-box bg-green";
        }
        return (
            <div className="row">
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className={back}>
                                    <span className="info-box-icon">
                                        <i className="ion-ios-chatbubble-outline"></i>
                                    </span>
                        <div className="info-box-content">
                            <span className="info-box-text">Direct Messages</span>
                            <span className="info-box-number">{this.state.count}</span>
                            <div className="progress">
                                <div className="progress-bar" style={{width: count}}></div>
                            </div>
                            <span className="progress-description"> Increase</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.__post(), 1000);
    }

    __post() {
        this.setState({count: Math.floor(Math.random() * (100 - 1 + 1)) + 1})
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


}


export default SwitchMenu;