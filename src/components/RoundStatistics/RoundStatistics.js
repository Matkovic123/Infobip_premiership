import React from 'react';

const RoundStatistics = (props) => (
    <div>
        <h2>Round Statistics</h2>
        <ul className="list-group">
            {props.clubsStatistics.map((clubStats) => {
                return (
                    <li key={clubStats.name}
                        className="list-group-item"
                    >
                        <h4>Points: {clubStats.points}</h4>
                        {clubStats.name} won {clubStats.wins} games, lost {clubStats.loses} games,
                        drew {clubStats.draws} games. <br/>
                        Scored {clubStats.goals} goals, received {clubStats.nets} goals, and had {clubStats.goalDiff}
                        goal difference

                    </li>
                )
            })}
        </ul>
    </div>
);

export default RoundStatistics;