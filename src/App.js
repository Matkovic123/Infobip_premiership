import React, {Component} from 'react';
import 'react-select/dist/react-select.css';
import Premiership from "./containers/Premiership/Premiership";

import logo from './resources/images/pl.png';
import bgImage from './resources/images/football-on-stadium.jpg';

class App extends Component {
    render() {
        return (
            <div style={bgImgStyle}>
                <div className="container">
                    <div className="vertical-center">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-md-6" >
                                        <h1 className="text-center">English football premiership of 2016/2017</h1>
                                    </div>
                                    <div className="col-md-4">
                                        <img alt="" className="img-responsive img-rounded text-center" src={logo}/>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                <Premiership/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

const bgImgStyle = {
    backgroundImage: 'url(' + bgImage + ')',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'bottom'
};