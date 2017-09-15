## Forms
HTML form element work a little bit differently from other DOM elements in REact, because form elelemtns naturally keep some internal state. For example, this form in plain HTML accepts a single name. A standard way to achieve form submittion in react is called "controlled components".

## Controlled components
In HTML, form elements such as `<input>, <textarea>, and <select>` typically maintain their own state and update it based on user input. In react, mutable state is typically kept in the state property of components, and only updated with setState().

We can combine the two by making the React state be the single source of truth. Then the react components that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a controlled component.

```js
class NameForm extends React.Component {
	constructor(props){
		super(props);
		this.state ={value: ''}
	}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
	this.setState({value: event.target.value});
}

handleSubmit(event){
	// perform action
	event.preventDefault();
}

render() {
	return (
		<form onSubmit={this.handleSubmit}>
			<label>
				Name:
				<input type="text" value={this.state.value} onChange={this.handleChange}
			</label>

		</form>
	)
}

```  
