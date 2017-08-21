import { Component } from 'react';
import { ProjectList } from './ProjectList';
import { SkiDayCount } from './SkiDayCount';
import { AddProjectForm } from './AddProjectForm';
import { Menu } from './Menu';

export class App extends Component {
	constructor(props) {
	   super(props);
	   this.state = {
		   allProjects: [
			   {
				   projectName: 'Big data',
				   date: '2016-2-16',
				   cyber_require: true,
				   safety_require: false,
				   technical_mastery_status: 32,
			   },
			   {
				    projectName: 'Hot Dog',
				    date: '2016-2-16',
				    cyber_require: true,
				    safety_require: true,
					technical_mastery_status: 32,
			   },
			   {
				    projectName: 'Embedded System',
				    date: '2016-2-16',
				    cyber_require: false,
				    safety_require: false,
					technical_mastery_status: 32,
			   }
		   ]
	   };
	   //this.addDay = this.addDay.bind(this);
	   this.addProject = this.addProject.bind(this);   // two-way function binding
	}
	countProjects(filter) {    // return the percentage of projects by filter
	   const { allProjects } = this.state;
	   return allProjects.filter(
		   (project) => (filter) ? project[filter] : project
	   ).length;
	}

	addProject(newProject) {    // add a project to current state
		this.setState({
			allProjects: [
				...this.state.allProjects,
				newProject
			]
		});
	}

	render() {
	   return (
		   <div className="app">
			   <Menu />
			   {(this.props.location.pathname === '/') ?
				 <SkiDayCount total={this.countProjects()}
								powder={this.countProjects(
									   'cyber_require'
								   )}
								backcountry={this.countProjects(
									   'safety_require'
								   )}/> :
				(this.props.location.pathname === "/add-project") ?
				   <AddProjectForm onNewProject = {this.addProject}/> :
				   <ProjectList projects={this.state.allProjects}
							   filter={this.props.params.filter}/>
			   }
		   </div>
	   );
	}
}
