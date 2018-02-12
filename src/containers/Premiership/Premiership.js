import React from 'react';
import RoundResults from "../../components/RoundResults/RoundResults";
import RoundStatistics from "../../components/RoundStatistics/RoundStatistics";


class Premiership extends React.Component {


    render() {
        return (
            <div>
                <RoundResults/>
                <RoundStatistics/>
            </div>
        );
    }

}

export default Premiership;
