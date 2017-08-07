import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addRemainder } from '../actions';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        };
    }

    addRemainder() {
        this.props.addRemainder(this.state.text);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                            return (
                                <li key={reminder.id} className="list-group-item">
                                    <div>{reminder.text}</div>
                                </li>
                            );
                    })
                }
            </ul>
        );
    } 

    render() {
        return (
            <div className="App">
                <div className="title">
                    Remainder Pro
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input className="form-control" placeholder="I have to ..." onChange={event => this.setState({text: event.target.value})} />
                    </div>
                    <button type="button" className="btn btn-success" onClick={() => this.addRemainder()}>Add reminder</button>
                </div>
                {this.renderReminders()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, {addRemainder})(App);