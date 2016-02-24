var ToDoList = React.createClass({
	render: function() {
		var todosList = this.props.allMyData.map(function(t) {
			return(
				<div className="panel panel-default">
					<div className="panel-header">
					{t.name}
					</div>
					<div className="panel-body">
					{t.dueDate}
					</div>
					<div className="panel-footer">
					{t.description}
					</div>
				</div>
				)
		})
		return (
			<div>
			<p> { todosList } </p>
			</div>
			)
	}

});

var App = React.createClass({

	getInitialState: function() {
		return {
			todos: []
		}
	},
	loadToDosFromServer: function() {
		$.ajax({
			url: '/api/todo',
			method:'GET'
		}).done(function(data) {
			this.setState({
				todos: data
			})
		}.bind(this))
	},

	componentDidMount: function() {
		this.loadToDosFromServer();
	},




	render: function() {
		return (
			<div>
				<h3> Hello World </h3>
				<ToDoList allMyData={this.state.todos}/>
			</div>
			)
	}

});

React.render(<App/>, document.getElementById('app'));