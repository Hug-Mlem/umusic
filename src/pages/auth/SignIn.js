import React, { Component } from "react";
import { compose } from "recompose";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
import { withFirebase } from "../../Firebase";
// import request from 'request-promise'
import {
    //  postApi, urlApi, 
    urlApiNewPublic, postApiNew
} from "../../pages/api/config.js";
// import md5 from 'md5';

import './style.css';
import JSAlert from 'js-alert';
// import { AuthUserContext, withAuthorization } from "../../Session";

import {
    Checkbox,
    FormControl,
    FormControlLabel,
    Button as MuiButton,
    Paper, TextField,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

const Button = styled(MuiButton)(spacing);

const Wrapper = styled(Paper)`
  padding: ${props => props.theme.spacing(6)}px;

  ${props => props.theme.breakpoints.up("md")} {
    padding: ${props => props.theme.spacing(10)}px;
  }

`;


const CenteredContent = styled.div`
  text-align: center;
`;

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#F3903F',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#F3903F',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#F3903F',
        },
        '&:hover fieldset': {
            borderColor: '#F3903F',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#F3903F',
        },
    },
});

const INITIAL_STATE = {
    email: "",
    password: "",
    error: null
};

const API = 'https://ipapi.co/json/';

const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }

    handleGoogleLogin() {
        this.props.firebase.doSigninWithGoogle()
            .catch(function (error) {
                alert(error); // or show toast
                localStorage.removeItem(firebaseAuthKey);
            });
        localStorage.setItem(firebaseAuthKey, "1");
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    onChangeCap = (value) => {
        this.setState({ capcha: value });
    }
    render() {
        const { phone, email, password, error, capcha } = this.state;

        // const isInvalid = password === "" || email === "";
        const onSubmit = async e => {
            if (email === '' || password === '') {
                JSAlert.alert("<code>Vui lòng nhập email và password</code>", null, JSAlert.Icons.Failed);
                return false;
            }
            const url = urlApiNewPublic() + '/employees/login'
            const data = {
                username: email,
                type: 'admin',
                password: password,
                device_id: "ABC"
            }
            const result = await postApiNew('POST', url, data)
            if (result.data) {
                sessionStorage.setItem('users', JSON.stringify(result.data))
                localStorage.setItem('users', JSON.stringify(result.data))
                JSAlert.alert("<code>Login success</code>", null, JSAlert.Icons.Success);
                this.props.history.push('/')
                window.location.reload();
            } else {
                JSAlert.alert("<code>username or passoword falsed</code>", null, JSAlert.Icons.Failed);
            }
        };

        const isInvalid = email === "" || password === ""
        return (
            <Wrapper>


                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <img src={require('../../assets/logo.jpg')} style={{ width: '50px' }} />
                </div>
                <p style={{ textAlign: 'center', fontSize: '50px', fontWeight: 700, fontFamily: 'Inter, Rubik, sans-serif' }}>
                    Đăng nhập
                </p>

                <FormControl margin="normal" required fullWidth>
                    <CssTextField id="phone" label="Số điện thoại" variant="outlined" placeholder="Số điện thoại"
                        value={phone}
                        onChange={this.onChange}
                        name="phone"
                        autoComplete="phone"
                        autoFocus />
                </FormControl>

                <div style={{ textAlign: 'center' }}>
                    Hoặc
                </div>


                <FormControl margin="normal" required fullWidth>
                    <CssTextField id="email" label="Email" variant="outlined" placeholder="Email"
                        value={email}
                        onChange={this.onChange}
                        name="email"
                        autoComplete="email"
                        autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>

                    <CssTextField id="password"
                        label="Password"
                        type="password"
                        name="password"
                        variant="outlined" placeholder="Password"
                        value={password}
                        onChange={this.onChange}
                        autoComplete="current-password"
                        autoFocus />
                </FormControl>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <CenteredContent>
                    <Button
                        type="submit"
                        style={{ width: '150px' }}
                        variant="contained"
                        color="primary"
                        mb={2}
                        onClick={onSubmit}

                    >
                        Đăng nhập
                    </Button>
                </CenteredContent>


                <div>
                    Bạn chưa có tài khoản?
                    <Button
                        component={Link}
                        to="/sign-up"
                        color="secondary"
                    >
                        Đăng ký
                    </Button>
                </div>
                <Button
                    component={Link}
                    to="/reset-password"
                    fullWidth
                    color="primary"
                >
                    Quên mật khẩu
                </Button>
                <div style={{ height: '10px' }} />

                {error && <p style={{ color: 'red' }}>{error.message}</p>}

            </Wrapper>
        );
    }
}

const SignIn = compose(
    withRouter,
    withFirebase
)(SignInForm);

export default SignIn;
// export default withAuthorization(condition)(SignIn);
