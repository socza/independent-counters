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
			React.createElement('button', {onClick: this.increment}, 'Dodaj'),
			React.createElement('span', {}, '  Licznik  ' + this.state.counter + ' '),
			React.createElement('button', {onClick: this.decrement}, ' ' + 'Odejmij')
		);	
	
	},

	componentWillMount: function(mount) {
		console.log('Montuję render');
	},

	componentDidMount: function () {
		console.log('Render wyświetlony');
	},

	shouldComponentUpdate: function(nextProps, nextState) {
    	console.log('Pobieram z dane serwera np. Dane poprzez API');
   	return true;
   	},

	componentWillUpdate(nextProps, nextState) {
    	console.log('Dane z serwera zaktualizowane. Wyświetlam po dane API po aktualizacji');
   	},

    componentWillUnmount: function() {
    	console.log('Usuwam wyświtlanie rendera np. z  danymi popranymi przez API');
    }

});

var App = React.createClass({

	render: function() {

		return (
			React.createElement('div', {},
				React.createElement(Counter, {}),
				React.createElement(Counter, {}),
				React.createElement(Counter, {}),
			)

		);

	}

});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));