import React from "react";

class Weather extends React.Component {
	render() {
		return (

			<div>
				<p>Mean: { this.props.mean }</p>
				<p>Median: { this.props.median }</p>
				<p>Mode: { this.props.mode }</p>
			</div>

			)
	}
};

export default Weather;