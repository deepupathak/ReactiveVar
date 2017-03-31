import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class Header extends Component {
	handleChange(ev){
		ev.preventDefault();
		const data = this.refs.dataValue.value;
		if(data == 'show'){
			this.props.visible.set('show')
		}else if(data == 'hide'){
			this.props.visible.set('hide')
		}else if(data == ''){
			this.props.visible.set('')
		}
		console.log("Header reactive var =>", this.props.visible.get())
	}
	render() {
		return (
			<div className="container">
				<header>
					<h1>Reactive Var Example</h1>
					<select className="form-control" ref="dataValue" onChange={this.handleChange.bind(this)}>
						<option value="">-- Select --</option>
						<option value="show">Show Extra Field</option>
						<option value="hide">Hide Extra Field</option>
					</select>
					{/*<div className="dropdown">
					<button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Dropdown &nbsp;
					<span className="caret"></span></button>
					<ul className="dropdown-menu">
					<li><a href="/">Page 1</a></li>
					<li><a href="/page2">Page 2</a></li>
					</ul>
					</div>*/}
				</header>
			</div>
		);
	}
}

/*export default createContainer((props) => {
	// console.log("Header props >>>>>", props)
	return {
	}
}, Header)*/