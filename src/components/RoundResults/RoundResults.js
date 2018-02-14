import React from 'react';

const RoundResults = (props) => (
    <div>
        <h2>Round results</h2>
        <ul className="list-group">
            {props.matches.map((match) => {
                return (
                    <li key={match.homeTeam}
                        className="list-group-item"
                    >
                        <h4>
                            {match.homeTeam} {match.homeTeamScore} :&nbsp;
                            {match.opponentTeam} {match.opponentTeamScore}
                        </h4>
                    </li>
                )
            })}
        </ul>
    </div>
);

export default RoundResults;