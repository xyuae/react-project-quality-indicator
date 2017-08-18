import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	submit(e) {
		e.preventDefault()
		console.log('project', this.refs.projectName.value)
		console.log('date', this.refs.date.value)
		console.log('safety_require', this.refs.safety_require.checked)
	}

	render() {
		const { projectName, date, safety_require, cyber_require } = this.props
		// console.log(date);
		return (

			/*
			<label htmlFor="resort">Resort Name</label>
			<input id="resort"
				   type="text"
				   required
				   defaultValue={resort}
				   ref="resort"/>
			*/
			<form onSubmit={this.submit} className="add-project-form">
				<label htmlFor="projectName"> Project Name</label>
				<input id="projectName"
					   type="text"
					   required
					   defaultValue={projectName}
					   ref="projectName"/>

				<label htmlFor="date">Date</label>
				<input id="date"
					   type="date"
					   required
					   defaultValue={date}
					   ref="date"/>

				<div>
					<input id="safety_require"
						   type="checkbox"
						   defaultChecked={safety_require}
						   ref="safety_require"/>
					<label htmlFor="safety_require">
						Do you have Saftey Certification Requirement in your project?
					</label>
				</div>

				<div>
					<input id="cyber_require"
						   type="checkbox"
						   defaultChecked={cyber_require}
						   ref="cyber_require"/>
					<label htmlFor="cyber_require">
						Do you have Cyber Security Requirement in your project?
					</label>
				</div>
				<button>Add Project</button>
			</form>
		)
	}
}
function getCurrentDate() {
	// return the current date in string format of "yy-mm-dd"
	// For example, "2017-08-18"
	var now = new Date();
	var year = now.getFullYear();
	var month = (now.getMonth() + 1 < 10) ? '0' + (now.getMonth()+1) : (now.getMonth() + 1);
	var date = now.getDate();
	return year + '-' + month + '-' + date;
}
AddDayForm.defaultProps = {
	projectName: "Project",
	date: getCurrentDate(),
	safety_require: false,
	cyber_require: false
}


AddDayForm.propTypes = {
	projectName: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	safety_require: PropTypes.bool.isRequired,
	cyber_require: PropTypes.bool.isRequired
}
