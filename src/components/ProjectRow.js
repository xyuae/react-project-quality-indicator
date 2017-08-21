import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
//import Calendar from 'react-icons/lib/fa/calendar';
import { PropTypes } from 'prop-types';

/*
A row of informaiton in the table ProjectList,
The ProjectRow component compose the body of the table,
the information present includes projectName, date, safety requirement,
and cyber requirement
*/

export const ProjectRow = ({projectName, date,
	safety_require, cyber_require}) => (
	<tr>
		<td>
			{date}
		</td>
		<td>
			{projectName}
		</td>
		<td>
			{(safety_require) ? <SnowFlake/> : null}
		</td>
		<td>
			{(cyber_require) ? <Terrain /> : null}
		</td>
	</tr>

);

ProjectRow.propTypes = {	// validate props type
	projectName: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	safety_require: PropTypes.bool,
	cyber_require: PropTypes.bool
};
