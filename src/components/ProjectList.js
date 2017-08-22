import { ProjectRow } from './ProjectRow';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import { ProjectChart } from './ProjectChart';

/*
Create a table of Project,
presenting the date: date, name: string,
safety requirement: bool, and cyber requirement: bool
*/

export const ProjectList = ({projects, filter}) => {
	const filteredProjects = (!filter ||
		!filter.match(/safety_require|cyber_require/)) ?
		projects: projects.filter(project => project[filter]
		);		// return an array of filtered Projects data
	return (	// render a table of projects
		<div className="project-list">
			<table>
            	<thead>
					<tr>
						<td colSpan={4}>
							<Link to="/list-projects">
								All Projects
							</Link>
							<Link to="/list-projects/safety_require">
								Safety Requirement
							</Link>
							<Link to="/list-projects/cyber_require">
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
            		{filteredProjects.map((project, i) =>
            			<ProjectRow key={i}
            					   {...project}/>
            			)}
            	</tbody>

			</table>
			<ProjectChart />
		</div>
	);
};

ProjectList.propTypes = {	// validate the props type
	projects: function(props) {
		if(!Array.isArray(props.projects)) {
			return new Error(
				'ProjectList should be an array'
			);
		} else if(!props.projects.length) {
			return new Error(
				'ProjectList must have at least one record'
            );
		} else {

		}
	},
	filter: PropTypes.string,
};
