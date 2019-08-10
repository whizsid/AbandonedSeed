import * as React from "react";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

import { SignupPageState } from "../../../store/SignupPage/types";
import { AppState } from "../../../rootReducer";
import Layout from "../Layout/MainLayout";
import {
    validateName,
    validateEmail,
    validatePassword,
    validatePasswordConfirmation,
    submit
} from "../../../store/SignupPage/actions";
import { APP_URL } from '../../../constants/config';

const styler = withStyles(theme => ({
    wall: {
        backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.8)),url(/images/signup-back.jpg)",
        height: "calc(100vh - " + theme.spacing(36) + "px)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: theme.spacing(12)
    },
    descriptionPoorChilds: {
        marginTop: theme.spacing(8),
        textShadow: "1px 1px 2px rgba(0,0,0,0.4)"
    },
    titlePoorChilds: {
        textShadow: "1px 1px 2px rgba(0,0,0,0.4)"
    },
    paper: {
        margin: theme.spacing(28),
        padding: theme.spacing(4),
        marginTop: theme.spacing(20)
    },
    divider: {
        marginBottom: theme.spacing(4)
    },
    textField: {
        marginBottom: theme.spacing(4)
    },
    grow: {
        flexGrow: 1
    }
}));

const mapStateToProps = (state: AppState) => ({
    ...state.signupPage
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    onNameChange: (name: string) => dispatch(validateName(name)),
    onEmailChange: (email: string) => dispatch(validateEmail(email)),
    onPasswordChange: (password: string) =>
        dispatch(validatePassword(password)),
    onPasswordConfirmationChange: (
        passwordConfirmation: string,
        password: string
    ) => dispatch(validatePasswordConfirmation(passwordConfirmation, password)),
    onSubmit: (
        name: string,
        email: string,
        password: string,
        passwordConfirmation: string
    ) => dispatch(submit(name, email, password, passwordConfirmation))
});

interface Props extends SignupPageState {
    classes: {
        wall: string;
        descriptionPoorChilds: string;
        titlePoorChilds: string;
        paper: string;
        divider: string;
        textField: string;
        grow: string;
    };
    onNameChange: (x: string) => void;
    onEmailChange: (x: string) => void;
    onPasswordChange: (x: string) => void;
    onPasswordConfirmationChange: (x: string, y: string) => void;
    onSubmit: (
        name: string,
        email: string,
        password: string,
        passwordConfirmation: string
    ) => void;
}

class SignupPage extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePasswordConfirmation = this.handleChangePasswordConfirmation.bind(
            this
        );
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        this.props.onEmailChange(e.target.value);
    }

    handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        this.props.onNameChange(e.target.value);
    }

    handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
        this.props.onPasswordChange(e.target.value);
    }

    handleChangePasswordConfirmation(e: React.ChangeEvent<HTMLInputElement>) {
        const { onPasswordConfirmationChange, password } = this.props;
        onPasswordConfirmationChange(e.target.value, password);
    }

    handleSubmit(e:React.FormEvent) {
        e.preventDefault();
        const {
            name,
            email,
            password,
            passwordConfirmation,
            onSubmit
        } = this.props;

        onSubmit(name, email, password, passwordConfirmation);
    }

    render() {
        const {
            classes,
            name,
            nameError,
            email,
            emailError,
            password,
            passwordError,
            passwordConfirmation,
            passwordConfirmationError
        } = this.props;

        return (
            <Layout>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.wall}>
                            <Typography
                                color="textPrimary"
                                className={classes.titlePoorChilds}
                                variant="h4"
                                align="center"
                            >
                                Your support is their smile.
                            </Typography>
                            <Divider />
                            <Typography
                                color="textPrimary"
                                className={classes.descriptionPoorChilds}
                            >
                                {" "}
                                The provision of education in Tibet is poor and
                                Tibetans are disadvantaged by the use of
                                Mandarin Chinese as the language of instruction.
                                According to a UN report in 2005, primary school
                                attendance in Tibet was significantly lower than
                                the rest of China. The Tibetan Autonomous Region
                                had the lowest overall literacy rates of all
                                Chinese regions – 66% while the literacy rate in
                                China as a whole was 89.7%.{" "}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <form onSubmit={this.handleSubmit}>
                            <Paper className={classes.paper}>
                                <Typography
                                    color="textSecondary"
                                    align="center"
                                    variant="h5"
                                >
                                    Signup
                                </Typography>
                                <Divider className={classes.divider} />
                                <TextField
                                    className={classes.textField}
                                    fullWidth
                                    label="Name"
                                    value={name}
                                    helperText={nameError}
                                    error={!!nameError}
                                    onChange={this.handleChangeName}
                                />
                                <TextField
                                    className={classes.textField}
                                    fullWidth
                                    label="Email"
                                    value={email}
                                    helperText={emailError}
                                    error={!!emailError}
                                    onChange={this.handleChangeEmail}
                                />
                                <TextField
                                    className={classes.textField}
                                    fullWidth
                                    type="password"
                                    label="Password"
                                    value={password}
                                    helperText={passwordError}
                                    error={!!passwordError}
                                    onChange={this.handleChangePassword}
                                />
                                <TextField
                                    className={classes.textField}
                                    fullWidth
                                    type="password"
                                    label="Confirm Password"
                                    value={passwordConfirmation}
                                    helperText={passwordConfirmationError}
                                    error={!!passwordConfirmationError}
                                    onChange={
                                        this.handleChangePasswordConfirmation
                                    }
                                />
                                <Toolbar variant="dense">
                                    <IconButton
                                        href={APP_URL+'user/social/facebook/login'}
                                    >
                                        <Avatar
                                            src="/images/social/fb.png"
                                            alt="Facebook Logo"
                                        />
                                    </IconButton>
                                    <IconButton
                                        href={APP_URL+'user/social/google/login'}
                                    >
                                        <Avatar
                                            src="/images/social/gmail.png"
                                            alt="Gmail Logo Background Brown"
                                        />
                                    </IconButton>
                                    <div className={classes.grow} />
                                    <Button
                                        disabled={
                                            !!(
                                                nameError ||
                                                emailError ||
                                                passwordError ||
                                                passwordConfirmationError ||
                                                !name.length ||
                                                !email.length ||
                                                !password.length ||
                                                !passwordConfirmation.length
                                            )
                                        }
                                        color="secondary"
                                        variant="contained"
                                        type="submit"
                                    >
                                        Signup
                                    </Button>
                                </Toolbar>
                            </Paper>
                        </form>
                    </Grid>
                </Grid>
            </Layout>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(styler(SignupPage));
