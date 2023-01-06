import { useRef, useState, useContext, Fragment } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";
import { useHistory } from "react-router-dom";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErorr] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCysLLYRZz_oGcBpG5WUs-k_CY_n5qxzqY";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCysLLYRZz_oGcBpG5WUs-k_CY_n5qxzqY";
    }
    const sendUser = async () => {
      setIsLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsLoading(false);
        if (isLogin) {
          const expireTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          authCtx.login(data.idToken, expireTime.toISOString());
          history.replace("/");
        } else {
          setIsLogin(true);
        }
        emailRef.current.value = "";
        passwordRef.current.value = "";
      } else {
        let errorMessage = "Authentication Failed!";
        if (data && data.error.errors[0].message) {
          errorMessage = data.error.errors[0].message;
          setIsLoading(false);
          throw new Error(errorMessage);
        }
      }
    };
    sendUser().catch((error) => setErorr(error.message));
  };
  const content = <p className={classes.error}>{error}</p>;
  return (
    <Fragment>
      <p className={classes.note}>
        Note: With log in you will be able to Add Quotes
      </p>
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" required ref={passwordRef} />
            {content}
          </div>
          <div className={classes.actions}>
            {isLoading ? (
              <button>Loading...</button>
            ) : (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}

            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default AuthForm;
