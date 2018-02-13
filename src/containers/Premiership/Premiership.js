import React from 'react';
import Select from 'react-select';
import axios from 'axios';

import RoundResults from "../../components/RoundResults/RoundResults";
import RoundStatistics from "../../components/RoundStatistics/RoundStatistics";
import {createOptionsForSelect, parseMatchesForRound} from "../../helpers/helper";


class Premiership extends React.Component {
    state = {
        rounds: [],
        round: 38,
        matches: [],
        selectOptions: []
    };

    componentDidMount() {
        axios.get('http://localhost:3000/premiership.json')
            .then(response => {
                const parsedMatches = parseMatchesForRound(response.data[this.state.round - 1]);
                const selectOptions = createOptionsForSelect(response.data);
                this.setState({
                    rounds: response.data,
                    matches: parsedMatches,
                    selectOptions: selectOptions
                });
            })
    }

    onSelectedNewRound = (selectedOption) => {
        this.setState({
            ...this.state,
            round: selectedOption,
             matches: parseMatchesForRound(this.state.rounds[selectedOption.value-1])
        });
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-4">
                        <Select
                            name="Select round"
                            value={this.state.round}
                            onChange={this.onSelectedNewRound}
                            options={this.state.selectOptions}
                            clearable={false}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <RoundResults matches={this.state.matches}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <RoundStatistics/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Premiership;
