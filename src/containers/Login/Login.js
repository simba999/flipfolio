import React from "react";
import { Page, Row, Card, Input, Button } from "react-onsenui";
import logoImg from "../../images/logo.svg";

const Login = ({
  mode,
  toLoginForm,
  toRegisterForm,
  loginUsername,
  setLoginUsername,
  loginPassword,
  setLoginPassword,
  regisUsername,
  setRegisUsername,
  regisPassword,
  setRegisPassword,
  regisPasswordCon,
  setRegisPasswordCon,
  register,
  login,
}) => (
  <Page id="login">
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <img src={logoImg} alt="logo" />
      <Row>
        <div className="segment" style={{ width: "200px", margin: "7px auto" }}>
          <div className="segment__item">
            <input
              className="segment__input"
              type="radio"
              name="navi-segment-a"
              checked={mode === 'login'}
              onChange={() => toLoginForm()}
            />
            <div className="segment__button">Login</div>
          </div>
          <div className="segment__item">
            <input
              className="segment__input"
              type="radio"
              name="navi-segment-a"
              checked={mode === 'register'}
              onChange={() => toRegisterForm()}              
            />
            <div className="segment__button">Register</div>
          </div>
        </div>
      </Row>
      <Row>
        {mode === "login" ? (
          <Card id="crd1">
            <p>
              <Input
                id="username"
                modifier="underbar"
                placeholder="Username"
                float
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            </p>
            <p>
              <Input
                id="password"
                modifier="underbar"
                placeholder="Password"
                type="password"
                float
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </p>
            <p style={{ marginTop: "30px" }}>
              <Button onClick={() => login()}>Sign in</Button>
            </p>
          </Card>
        ) : (
          <Card id="crd2">
            <p>
              <Input
                id="username"
                modifier="underbar"
                placeholder="Username"
                float
                value={regisUsername}
                onChange={(e) => setRegisUsername(e.target.value)}
              />
            </p>
            <p>
              <Input
                id="password"
                modifier="underbar"
                placeholder="Password"
                type="password"
                float
                value={regisPassword}
                onChange={(e) => setRegisPassword(e.target.value)}
              />
            </p>
            <p>
              <Input
                id="password"
                modifier="underbar"
                placeholder="Password Again"
                type="password"
                float
                value={regisPasswordCon}
                onChange={(e) => setRegisPasswordCon(e.target.value)}
              />
            </p>
            <p style={{ marginTop: "30px" }}>
              <Button onClick={() => register()}>Register</Button>
            </p>
          </Card>
        )}
      </Row>
    </div>
  </Page>
);

export default Login;
