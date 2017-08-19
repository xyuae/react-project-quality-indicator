import { Component } from 'react';
import { SkiDayList } from './SkiDayList';
import { SkiDayCount } from './SkiDayCount';
import { AddProjectForm } from './AddProjectForm';
import { Menu } from './Menu';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allSkiDays: [
				{
					resort: 'Squaw Valley',
					projectName: 'Big data',
					date: new Date('1/2/2016'),
					powder: true,
					backcountry: false
				},
				{
					resort: 'Kirkwood',
					projectName: 'Hot Dog',
					date: new Date('3/28/2016'),
					powder: false,
					backcountry: false
				},
				{
					projectName: 'Embedded System',
					resort: 'Mt. Tallac',
					date: new Date('4/2/2016'),
					powder: false,
					backcountry: true
				}
			]
			,
			allProjects: [
				{
					projectName: 'Big data',
					date: new Date('1/2/2016'),
					cyber_require: true,
					safety_require: false
				},
				{
					projectName: 'Hot Dog',
					date: new Date('3/28/2016'),
					cyber_require: true,
					safety_require: true
				},
				{
					projectName: 'Embedded System',
					date: new Date('4/2/2016'),
					cyber_require: false,
					safety_require: false
				}
			]
		};
	}
	countProjects(filter) {
		const { allProjects } = this.state;
		return allProjects.filter(
			(project) => (filter) ? project[filter] : project
		).length;
	}

	countDays(filter) {
		const { allSkiDays } = this.state;
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length;
	}
	render() {
		return (
			<div className="app">
				<Menu />
				{(this.props.location.pathname === "/") ?
				  <SkiDayCount total={this.countProjects()}
								 powder={this.countProjects(
								 		"cyber_require"
								 	)}
								 backcountry={this.countProjects(
								 		"safety_require"
								 	)}/> :
				 (this.props.location.pathname === "/add-project") ?
				 	<AddProjectForm /> :
				 	<SkiDayList days={this.state.allSkiDays}
				 				filter={this.props.params.filter}/>
				}
			</div>
		);
	}
}
