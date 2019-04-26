import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, zubiActions } from '../actions';

class HomePage extends React.Component {
	componentDidMount() {
		//this.props.dispatch(userActions.getAll());
		this.props.dispatch(zubiActions.getMisConsultorias());
		this.props.dispatch(zubiActions.getMisCapacitaciones());
	}

	handleDeleteUser(id) {
		return (e) => this.props.dispatch(userActions.delete(id));
	}

	render() {
		const { user, users, zubi } = this.props;
		return (
			<div className="col-md-6 col-md-offset-3">
				<h1>Hola {user.firstName}!</h1>

				<h3>Consultorias</h3>
				{zubi.loadingConsultorias && <em>Cargando tus consultorias...</em>}
				{zubi.error && <span className="text-danger">ERROR: {zubi.error}</span>}
				{zubi.consultorias &&
					<ul>
						{zubi.consultorias.map((consultoria, index) =>
							<li key={consultoria.ID}>
								{consultoria.post_title}
							</li>
						)}
					</ul>
				}

				<h3>Capacitaciones</h3>
				{zubi.loadingCapacitaciones && <em>Cargando tus capacitaciones...</em>}
				{zubi.error && <span className="text-danger">ERROR: {zubi.error}</span>}
				{zubi.capacitaciones &&
					<ul>

						{zubi.capacitaciones.map((capacitacion, index) =>
							<li key={capacitacion.ID}>
								{capacitacion.post_title}
							</li>
						)}
					</ul>
				}

				{/*                 <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                } */}
				<p>
					<Link to="/login">Logout</Link>
				</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { users, authentication } = state;
	const { user } = authentication;
	const { zubi } = state
	return {
		user,
		users,
		zubi
	};
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };