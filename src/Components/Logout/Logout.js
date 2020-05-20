import React from "react";
import * as database from "../../database-mockup";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actionsAuth from "../../store/actions/action-authentication";
import { Redirect } from 'react-router';
import './Logout.css';

class Logout extends React.Component {
    state = {
        redirect: false
    }
    logout = () => {
        database
            .signout()
            .then((res) => {
                this.setState({ redirect: true });
                this.props.onSignOutUser();
            })
            .catch((err) => {
                // TODO add error to user when receive error
                console.log(err);
            });
    };

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/' />;
        }
        return (
            <div className="logout-button">
                {this.props.user ? <Button color="primary" onClick={this.logout}>
                    Log out
          </Button> : ''}
            </div>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSignOutUser: () => dispatch(actionsAuth.logOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);