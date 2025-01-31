import CustomInput from "../components/inputs/CustomInput.jsx";
import InputsContainer from "../components/inputs/InputsContainer.jsx";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <InputsContainer submitText="Log in" method="POST">
        <CustomInput name="email" label="Email" type="email" />
        <CustomInput name="password" label="Password" type="password" />
      </InputsContainer>
      <div
        style={{
          fontSize: "0.8rem",
          width: "250px",
          margin: "auto",
          padding: "0 12px",
          lineHeight: "19px",
        }}
      >
        <Link to="#">forgot password?</Link>
        <p>
          if you're new member click <Link to="/register">here</Link> to
          register
        </p>
      </div>
    </>
  );
}
