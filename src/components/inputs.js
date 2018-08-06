import React from "react";

class Inputs extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.getData}>

				<input onChange = {this.props.changeCity} type="text" name="city"  placeholder="city"/>
				<input onChange = {this.props.changeCountry} type="text" name="country"  placeholder="country"/>
				<button>Submit</button>

			</form>
		);
	}
};

export default Inputs;