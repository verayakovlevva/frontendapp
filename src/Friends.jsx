import React from "react";
import { NavLink } from "react-router-dom";

const TableRow = (props) => {
	return (
		<tr>
			<th scope="row">{props.index + 1}</th>
			<td>
				<NavLink to={"/profile/" + props.id}>
					{props.name} {props.lastname}
				</NavLink>
			</td>
		</tr>
	);
};

class Friends extends React.Component {
	constructor(props) {
		super(props);
		this.state = { userRow: [] };
	}
	componentDidMount() {
		this.props.function().then((users) => {
			let userCount = users.length;
			let userRow = [];
			for (let i = 0; i < userCount; i++) {
				userRow.push(
					<TableRow
						key={i}
						id={users[i].id}
						index={i}
						name={users[i].name}
						lastname={users[i].lastname}
					/>
				);
			}
			this.setState({ userRow: userRow });
		});
	}

	render() {
		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Имя Фамилия</th>
					</tr>
				</thead>
				<tbody>{this.state.userRow}</tbody>
			</table>
		);
	}
}

export default Friends;
