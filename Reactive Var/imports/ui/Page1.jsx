import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ShowModal from '/imports/ui/ShowModal.jsx';

class Page1 extends Component {
	render() {
		console.log("Page1 reactive var **==>>", this.props.visible)
		return (
			<div className="container">
				<h1>Page 1</h1>
				{ 
					this.props.visible == 'show' ?
						<div className="form-group">
							<label htmlFor="Text">Extra Field</label>
							<input type="text" id="Text" className="form-control" />
						</div>
					: this.props.visible == 'hide' ?
						<div></div>
					: <div>Please select any one option (show or hide).</div>
				}
				{
					this.props.visible != '' ? <p>Reactive Var Value: {this.props.visible}</p> : <p></p>
				}
				<button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">Open Demo Modal</button>
				<ShowModal visible={this.props.visible} id={ Meteor.uuid() } />
			</div>
		);
	}
}

export default createContainer((props) => {
	// console.log("Page 1 props =>", props)
	return {
		visible: props.visible.get('curValue')
	}
}, Page1);