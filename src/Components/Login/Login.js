import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Login.css";
import TextField from '@material-ui/core/TextField';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="login-container">
                    <div className="login-title">Login</div>
                    <form className="login-form" noValidate autoComplete="off">
                        <TextField
                            required
                            id="filled-required"
                            label="Email"
                            variant="filled"
                        />
                        <TextField
                            required
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                        />
                        <Button color="primary">Log in</Button>
                    </form>
                    <div className="no-account">
                        <span>if you don't have an account</span>
                        <ArrowForwardIcon />
                        <Button color="primary" component={Link} to="/Agenda">
                            See your timetable
                        </Button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;