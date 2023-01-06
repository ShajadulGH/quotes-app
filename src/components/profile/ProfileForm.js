import classes from "./ProfileForm.module.css";

import { useRef, useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
const ProfileForm = () => {
  const [error, setErorr] = useState("");
  const newPassRef = useRef();
  const authCtx = useContext(AuthContext);
  const submitHandler = (e) => {
    e.preventDefault();

    const newPassword = newPassRef.current.value;
    const token = authCtx.token;
    const changePassword = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCysLLYRZz_oGcBpG5WUs-k_CY_n5qxzqY",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: token,
            password: newPassword,
            returnSecureToken: false,
          }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        newPassRef.current.value = "";
        setErorr("Succesfully changed password");
      } else {
        let errorMessage = "Authentication Failed!";
        if (data && data.error.errors[0].message) {
          errorMessage = data.error.errors[0].message;
          throw new Error(errorMessage);
        }
      }
      console.log(data);
    };
    changePassword().catch((error) => setErorr(error.message));
  };
  const isSuccesful = error.includes("Succesfully");
  console.log(isSuccesful);
  const content = (
    <p className={isSuccesful ? classes.success : classes.error}>{error}</p>
  );

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPassRef} />
      </div>
      {content}
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
