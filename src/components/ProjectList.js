import { ProjectRow } from './ProjectRow';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import { ProjectChart } from './ProjectChart';
import React, { Component} from 'react';

/*
Create a table of Project,
presenting the date: date, name: string,
safety requirement: bool, and cyber requirement: bool
*/

//export const ProjectList = ({projects, filter}) => {
export class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: ''
    };
  }

  filteredProjects =() => {
    const {projects, filter} = this.props;
    return (!filter || !filter.match(/safety_require|cyber_require/)) ?
    projects : projects.filter(project => project[filter]
    );		// return an array of filtered Projects data
  };

  onProjectClick =(projectName) => {
    this.setState({projectName: projectName});
  };
  render() {
    return (
     <div className='project-list'>
				<table>
	            	<thead>
						<tr>
							<td colSpan={4}>
								<Link to='/list-projects'>
									All Projects
								</Link>
								<Link to='/list-projects/safety_require'>
									Safety Requirement
								</Link>
								<Link to='/list-projects/cyber_require'>
									Cyber Requirement
								</Link>
							</td>
						</tr>
	            		<tr>
	            			<th>Date</th>
	            			<th>Project Name</th>
	            			<th>Saftey Requirement</th>
	            			<th>Cyber Requirement</th>
							<th>Techical Mastery Status</th>
	            		</tr>

	            	</thead>
	            	<tbody>
	            		{this.filteredProjects().map((project, i) =>
                  <ProjectRow key={i} onClick={this.onProjectClick}
                        {...project}/>
                 )}
	            	</tbody>

				</table>
				<ProjectChart projectName = {this.state.projectName}/>
			</div>
    );
  }
}

ProjectList.propTypes = {	// validate the props type
  projects: function(props) {
    if (!Array.isArray(props.projects)) {
      return new Error(
       'ProjectList should be an array'
      );
    } else if (!props.projects.length) {
      return new Error(
       'ProjectList must have at least one record'
      );
    }
  },
  filter: PropTypes.string,
};
