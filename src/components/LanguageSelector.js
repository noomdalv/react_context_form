import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
	static contextType = LanguageContext;
	render() {
		const selectText = this.context.language === "english" ? "Select a language: " : "Seleccione un idioma: ";
		return (
			<div style={{marginBottom: 10, width: "40%"}}>
				<h2 className="ui olive header centered">React Context API</h2>
				<b>{selectText}</b>
				<i className="flag us" onClick={() => this.context.onLanguageChange("english")} />
				<i className="flag co" onClick={() => this.context.onLanguageChange("spanish")} />
			</div>
		);
	}
}

export default LanguageSelector;
