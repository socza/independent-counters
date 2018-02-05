var Counter = React.createClass({
	
	getInitialState: function() {

		return {
			counter: 0
		};

	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
		
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});

	}, 

	render: function() {

		return React.createElement('div', {},
			React.createElement('span', {}, 'Licznik ' + this.state.counter),
			React.createElement('button', {onClick: this.increment}, 'Dodaj'),
			React.createElement('button', {onClick: this.decrement}, 'Odejmij')
		);	
	
	}

});

var App = React.createClass({

	render: function() {

		return (
			React.createElement('div', {className: 'app'},
				React.createElement(Counter, {}),
				React.createElement(Counter, {}),
				React.createElement(Counter, {}),
			)

		);

	}

});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));