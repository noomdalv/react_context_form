import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

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
				<ColorContext.Provider value="primary">				
					<LanguageContext.Provider value={this.state.language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColorContext.Provider>
			</div>
		);
	}
}

export default App;