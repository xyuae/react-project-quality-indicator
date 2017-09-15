import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*
UI design for project information input form
*/
// stateless Component with refs as callbacks function
export class AddProjectForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      createdAt: '',
      name: '',
      safety_require: false,
      cyber_require: false,
      technical_mastery_status: {
        completeness: 4
      }
    };
  }
  submit = (event) => {	// function for sumbit data
    event.preventDefault();
    console.log(this.state);
    /*
      onNewProject({
        date: _date.value,
        projectName: _projectName.value,
        safety_require: _safety_require.checked,
        cyber_require: _cyber_require.checked,
        technical_mastery_status: _technical_mastery_status.value
      });

      _projectName.value = '';
      _date.value = '';
      _safety_require.checked = false;
      _cyber_require.checked = false;
    */
  };
  getCurrentDate() {
    // return the current date in string format of "yy-mm-dd"
    // For example, "2017-08-18"
    var now = new Date();
    var year = now.getFullYear();
    var month = (now.getMonth() + 1 < 10) ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1);
    var date = now.getDate();
    return year + '-' + month + '-' + date;
  }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleDateChange(event) {
    this.setState({date: event.target.value});
  }
  handle_Technical_completeness_Change(event) {
    this.setState({
      technical_mastery_status: {
        completeness: event.target.value,
      }
    });
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    const name = target.name;
    console.log(name);
    //console.log(this);
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <form onSubmit={this.submit} className='add-project-form'>
				<label htmlFor='projectName'> Project Name</label>
				<input id='projectName'
          name='name'
					value={this.state.name}
					onChange={this.handleInputChange}
          type='text'
          required
          autoFocus= 'true'>
				 </input>

				<label htmlFor='date'>Date</label>
				<input id='date'
           type='date'
           required
           name='date'
           value={this.state.date}
           onChange={this.handleInputChange}/>

         <div>
           <input
             id = 'safety_require'
             name='safety_require'
             type='checkbox'
             checked={this.state.safety_require}
             onChange={this.handleInputChange}/>
           <label htmlFor='safety_require'>
             Do you have Saftey Certification Requirement in your project?
           </label>
       </div>
         <br/>

				<div>
					<input id='cyber_require'
            name='cyber_require'
            type='checkbox'
            checked={this.state.cyber_require}
            onChange={this.handleInputChange}/>
					<label htmlFor='cyber_require'>
						Do you have Cyber Security Requirement in your project?
					</label>
				</div>

        <div>
				<label>
          Completeness of technical mastery status
          <select value={this.state.technical_mastery_status.completeness}
            onChange={this.handleInputChange} name='technical_mastery_status.completeness'>
            <option value = {1}>Complete</option>
            <option value = {2}>Minor information missing</option>
            <option value = {3}>Major information missing</option>
            <option value = {4}>No document</option>
          </select>
        </label>
        </div>

				<input type='submit' value='Submit' />
			</form>
     );
  }
}

/*
AddProjectForm.propTypes = {	// validate properties type
  onNewProject: PropTypes.func.isRequired,
};
*/
