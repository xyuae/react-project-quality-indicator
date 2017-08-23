//import Terrain from 'react-icons/lib/md/terrain';
//import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Check from 'react-icons/lib/fa/check';
//import Calendar from 'react-icons/lib/fa/calendar';
import { PropTypes } from 'prop-types';

// import { Link } from 'react-router';

/*
A row of informaiton in the table ProjectList,
The ProjectRow component compose the body of the table,
the information present includes projectName, date, safety requirement,
and cyber requirement
*/


export const ProjectRow = ({
	projectName,
	date,
	safety_require,
	cyber_require,
	technical_mastery_status,
	onClick,
}) => {
	const handleClick = () => {
		onClick(projectName);
	};
	return (
		<tr>
			<td>
				{date}
			</td>
			<td>
				<div className="link ViewHistory" onClick={handleClick}>
					{projectName}
				</div>
			</td>
			<td>
				{(safety_require) ? <Check/> : null}
			</td>
			<td>
				{(cyber_require) ? <Check /> : null}
			</td>
			<td>
				{(technical_mastery_status)}
			</td>
		</tr>
	);
};


ProjectRow.propTypes = {	// validate props type
	projectName: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	safety_require: PropTypes.bool,
	cyber_require: PropTypes.bool,
	technical_mastery_status: PropTypes.number,
	onClick: PropTypes.func,
};
