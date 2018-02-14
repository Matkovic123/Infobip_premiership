import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import {connect} from 'react-redux';

import RoundResults from "../../components/RoundResults/RoundResults";
import RoundStatistics from "../../components/RoundStatistics/RoundStatistics";
import {createOptionsForSelect, createStatistics, parseMatchesForRound} from "../../helpers/helper";
import * as actions from "../../store/actions";

class Premiership extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:3000/premiership.json')
            .then(response => {
                const parsedMatches = parseMatchesForRound(response.data[this.props.round - 1]);
                const selectOptions = createOptionsForSelect(response.data);
                const clubsStatistics = createStatistics(response.data.slice(0, this.props.round));
                this.props.gotData({
                    rounds: response.data,
                    matches: parsedMatches,
                    selectOptions: selectOptions,
                    clubsStatistics: clubsStatistics
                });
                this.props.onChangedRound({value: response.data.length})
            })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-8">
                                <Select
                                    name="Select round"
                                    value={this.props.round}
                                    onChange={this.props.onChangedRound}
                                    options={this.props.selectOptions}
                                    clearable={false}
                                />
                            </div>
                        </div>
                        <RoundResults style={roundResultsStyle} matches={this.props.matches}/>
                    </div>
                    <div className="col-lg-6">
                        <RoundStatistics clubsStatistics={this.props.clubsStatistics}
                                         totalRoundsNr={this.props.rounds.length}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rounds: state.rounds,
        round: state.round,
        matches: state.matches,
        selectOptions: state.selectOptions,
        clubsStatistics: state.clubsStatistics
    };
};

const mapDispatchToProps = dispatch => {
    return {
        gotData: (data) => dispatch({type: actions.GOT_DATA, payload: data}),
        onChangedRound: (selectedOption) => dispatch({type: actions.CHANGED_ROUND, payload: selectedOption.value})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Premiership);

const roundResultsStyle = {};