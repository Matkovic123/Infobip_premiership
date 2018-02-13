import React, {Component} from 'react';
import 'react-select/dist/react-select.css';
import Premiership from "./containers/Premiership/Premiership";


class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="vertical-center">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2>Premiership 2016/2017</h2>
                        </div>
                        <div className="panel-body">
                            <Premiership/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
