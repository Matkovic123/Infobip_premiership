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
                        {clubStats.name} won {clubStats.wins} games, lost {clubStats.loses} games,
                        drew {clubStats.draws} games.
                    </li>
                )
            })}
        </ul>
    </div>
);

export default RoundStatistics;