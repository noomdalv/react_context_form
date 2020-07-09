import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

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
					<i className="flag co" onClick={() => this.languageChange("spanish")} />
				</div>
				<LanguageContext.Provider value={this.state.language}>
					<UserCreate />
				</LanguageContext.Provider>				
			</div>
		);
	}
}

export default App;
