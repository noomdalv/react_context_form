import React from 'react';

class App extends React.Component {
	state = {
		language: "english"
	}

	languageChange = language => {
		this.setState({
			language
		})
	}

	render() {
		return (
			<div className="ui container">
				<div>
					Select a language:
					<i className="flag us" onClick={() => this.languageChange("english")} />
					<i className="flag fr" onClick={() => this.languageChange("french")} />
					<i className="flag nl" onClick={() => this.languageChange("dutch")} />
					<i className="flag co" onClick={() => this.languageChange("spanish")} />
				</div>
				{this.state.language}
			</div>
		);
	}
}

export default App;
