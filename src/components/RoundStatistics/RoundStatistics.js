import React from 'react';

const RoundStatistics = (props) => (
    <div>
        <h2>Round Statistics</h2>
        <ul className="list-group">
            {props.clubsStatistics.map((clubStats, index) => {
                return (
                    <li key={clubStats.name}
                        className="list-group-item"
                    >
                        <h2>{index + 1}. {clubStats.name}</h2>
                        <br/>
                        <h4>Points: {clubStats.points}</h4>
                        Out of {clubStats.nrOfMatches} played games, {clubStats.name} won {clubStats.wins} games
                        , lost {clubStats.loses} games,
                        drew {clubStats.draws} games, <br/>
                        scored {clubStats.goals} goals, received {clubStats.nets} goals, and had {clubStats.goalDiff}
                        &nbsp;goal(s) difference <br/>
                        Last {clubStats.lastFiveMatches.length} matches: {clubStats.lastFiveMatches.map(status => status + ', ')}
                    </li>
                )
            })}
        </ul>
    </div>
);

export default RoundStatistics;