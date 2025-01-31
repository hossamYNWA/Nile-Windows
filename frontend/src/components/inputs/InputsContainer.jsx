import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Form, redirect, useActionData, json } from "react-router-dom";
import CustomToast from "./CustomToast";
import errorFinder from "../Validator.js";
import { memo } from "react";
const InputsContainer = memo(({ children, submitText, method, csx }) => {
  const errors = useActionData();
  console.log("errors " + errors);
  const errorsData = errors ? errors.data : [];
  let message = "Please enter a valid ";
  if (errorsData.length > 0) {
    const lastfldLength = errorsData[errorsData.length - 1].length;
    message +=
      errorsData.join(", ").slice(0, -1 * lastfldLength) +
      " and " +
      errorsData[errorsData.length - 1];
  }
  return (
    <Form method={method} process="login">
      {errors ? <CustomToast errorState={true} message={message} /> : null}
      <Box
        component="div"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          margin: "100px auto 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          ...csx,
        }}
        noValidate
        autoComplete="off"
      >
        {children}
      </Box>
      <Button
        type="submit"
        variant="contained"
        size="medium"
        sx={{
          width: "200px",
          margin: "20px auto",
          display: "block",
          backgroundColor: "var(--primary-color)",
          textTransform: "capitalize",
          "&:hover": { backgroundColor: "#4d5b62" },
        }}
      >
        {submitText}
      </Button>
    </Form>
  );
});
// form action login function
export async function loginAction({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  let url = "http://16.170.125.114/api/v1/Auth/login";
  // let url = "https://dummyjson.com/products/add";
  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (res.status === 200) {
    console.log("login 200 res " + JSON.stringify(res));
    localStorage.setItem("loggedIn", true);
    window.dispatchEvent( new Event('storage') )
    return redirect("/");
  }
  else {
    return redirect("/login");
  }
}

//form action register function
export async function regAction({ request, params }) {
  try {
    const method = request.method;
    const data = await request.formData();
    let url = "http://16.170.125.114/api/v1/Auth/signup";
    // let url = "https://dummyjson.com/products/add";
    const regData = {
      first_name: data.get("fname"),
      last_name: data.get("lname"),
      company_name: data.get("company"),
      telephone: data.get("phone"),
      country: data.get("country"),
      state: data.get("state"),
      city: data.get("city"),
      area: data.get("area"),
      street: data.get("street"),
      email: data.get("email"),
      password: data.get("password"),
    };
    const formErrors = errorFinder(regData);

    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regData),
    });
    console.log("res " + res);
    console.log("errors are" + JSON.stringify(formErrors));
    if (formErrors.length > 0) {
      console.log("there's an error");
      return json({ data: formErrors }, { status: 400 });
    }
    return redirect("/login");
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default InputsContainer;
