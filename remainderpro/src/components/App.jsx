import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="title">
                    Remainder Pro
                </div>
                <div className="form-inlinie">
                    <div className="form-group">
                        <input className="form-control" placeholder="I have to ..."/>
                        <button type="button" className="btn btn-success">Add reminder</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;