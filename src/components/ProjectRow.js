//import Terrain from 'react-icons/lib/md/terrain';
//import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Check from 'react-icons/lib/fa/check';
//import Calendar from 'react-icons/lib/fa/calendar';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

/*
A row of informaiton in the table ProjectList,
The ProjectRow component compose the body of the table,
the information present includes projectName, date, safety requirement,
and cyber requirement
*/

export class ProjectRow extends Component {
  render() {
    //console.log('projectName', this.props.projectName);
    return (
      <tr>
				<td>
					{this.props.date}
				</td>
				<td>
					<div className='link ViewHistory'
      				 onClick= {()=> this.props.onClick(this.props.projectName)}>
						{this.props.projectName}
					</div>
				</td>
				<td>
					{(this.props.safety_require) ? <Check/> : null}
				</td>
				<td>
					{(this.props.cyber_require) ? <Check /> : null}
				</td>
				<td>
					{(this.props.technical_mastery_status)}
				</td>
			</tr>
    );
  }
}

ProjectRow.propTypes = {	// validate props type
  projectName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  safety_require: PropTypes.bool,
  cyber_require: PropTypes.bool,
  technical_mastery_status: PropTypes.number,
  onClick: PropTypes.func,
};
