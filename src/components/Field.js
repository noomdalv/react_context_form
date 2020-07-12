import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
	static contextType = LanguageContext;

	render() {
		const text = this.context.language === "english" ? "Name" : "Nombre";
		return (
			<div className="ui field">
				<label className="ui teal label" style={{width: "max-content"}}>{text}</label>
				<input style={{width: "40%"}} />
			</div>
		);
	}
}

export default Field;
