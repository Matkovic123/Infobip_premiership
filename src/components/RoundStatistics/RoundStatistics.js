import React from 'react';
import goldTrophy from '../../resources/images/goldTrophy.jpg';
import silverTrophy from '../../resources/images/silverTrophy.jpg';
import bronzeTrophy from '../../resources/images/bronzeTrophy.jpg';

const RoundStatistics = (props) => (
    <div>
        <h2>Rounds Statistics</h2>
        <ul className="list-group">
            {props.clubsStatistics.map((clubStats, index) => {
                return (
                    <li key={clubStats.name}
                        className="list-group-item"
                    >
                        <div className="row">
                            <div className="col-md-8">
                                <h2><strong>{index + 1}. {clubStats.name}</strong></h2>
                                <h3>Achieved <strong>{clubStats.points}</strong> points </h3>
                                <h4>Played {clubStats.nrOfMatches} matches</h4>
                                <h4> Won {clubStats.wins} matches</h4>
                                <h4> Lost {clubStats.loses} matches</h4>
                                <h4> Drew {clubStats.draws} matches</h4>
                            </div>
                            {(index + 1) === 1 ?
                                <div className="col-md-4">
                                    <img alt="" className="img-responsive img-rounded" src={goldTrophy}/>
                                </div>
                                :
                                (index + 1) === 2 ?
                                    <div className="col-md-4">
                                        <img alt="" className="img-responsive img-rounded" src={silverTrophy}/>
                                    </div>
                                    :
                                    (index + 1) === 3 ?
                                        <div className="col-md-4">
                                            <img alt="" className="img-responsive img-rounded" src={bronzeTrophy}/>
                                        </div>
                                        : ''
                            }
                        </div>
                        <p>Scored {clubStats.goals} goals</p>
                        <p> Received {clubStats.nets} goals</p>
                        <p>and had {clubStats.goalDiff} goal(s) difference</p>
                        <p>Last {clubStats.lastFiveMatches.length}
                            matches: {clubStats.lastFiveMatches.map(status => status + ' ')} </p>
                    </li>
                )
            })}
        </ul>
    </div>
);

export default RoundStatistics;