import CustomInput from "../components/inputs/CustomInput.jsx";
import InputsContainer from "../components/inputs/InputsContainer.jsx";
import { Link } from "react-router-dom";
import SelectBox from "../components/inputs/SelectBox.jsx";
import { useEffect, useState, useMemo, useCallback, memo } from "react";
// defining cities for KSA and Egypt
const fetchData = async (url) => {
  const headers = new Headers();
  const APIKEY = "SXRsazVyUWFWUGFlQ2xVTzkxb0tFdzJMclVqMlFMSUdadmdtaGpZVg==";
  headers.append("X-CSCAPI-KEY", APIKEY);
  const reqOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const res = await fetch(url, reqOptions);
  const data = await res.json();
  return data;
};

const Register = memo(() => {
  const [country, setCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState({});
  const [cities, setCit] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  // handle country selection
  const countrySelectHandler = useCallback((e) => {
    setCountry(e.target.value);
  }, []);
  // handle state selection
  const stateSelectHandler = useCallback(
    (e) => {
      const selectedVal = e.target.value;
      for (let state of states) {
        if (state.name === selectedVal) {
          setSelectedState(state);
          break;
        }
      }
    },
    [states],
  );
  // handle city selection
  const citySelectHandler = useCallback((e) => {
    setSelectedCity(e.target.value);
  }, []);

  // function to run upon states choose
  useEffect(() => {
    const stateIso = selectedState.iso2;
    let countryIso = null;
    if (country === "Saudi Arabia") {
      countryIso = "sa";
    }
    if (country === "Egypt") {
      countryIso = "eg";
    }
    if (countryIso) {
      const url = `https://api.countrystatecity.in/v1/countries/${countryIso}/states/${stateIso}/cities`;
      fetchData(url).then((data) => {
        setCit(data);
        console.log("cities are: " + JSON.stringify(data));
      });
    }
  }, [selectedState, country]);
  // function to run upon counties choose

  useEffect(() => {
    let iso = null;
    if (country === "Saudi Arabia") {
      iso = "sa";
    }
    if (country === "Egypt") {
      iso = "eg";
    }
    const url = `https://api.countrystatecity.in/v1/countries/${iso}/states`;
    if (country !== "") {
      fetchData(url).then((data) => {
        setStates(data);
        console.log("states are: " + JSON.stringify(data));
      });
    }
  }, [country]);
  return (
    <>
      <InputsContainer
        submitText="Register"
        method="POST"
        csx={{
          alignItems: "baseline",
          flexFlow: "row wrap",
          maxWidth: "600px",
        }}
      >
        <CustomInput
          name="fname"
          label="First Name"
          type="text"
          required
          max="20"
          min="2"
        />
        <CustomInput name="lname" label="Last Name" type="text" required />
        <CustomInput name="company" label="Company Name" type="text" />
        <CustomInput
          name="email"
          label="Email"
          type="email"
          pattern=".+@.+\..+"
          required
        />
        <CustomInput
          name="password"
          label="Password"
          type="password"
          required
          helperText="Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number and one special character"
        />
        <CustomInput
          name="phone"
          label="Phone Number"
          type="tel"
          helperText="Enter your number without the country code"
          required
        />
        <SelectBox
          handleChange={countrySelectHandler}
          required
          name="country"
          label="Country"
          val={country}
          options={[
            { id: "1", name: "Saudi Arabia" },
            { id: "2", name: "Egypt" },
          ]}
          disabed={false}
        />
        <SelectBox
          handleChange={stateSelectHandler}
          required
          name="state"
          label="State"
          val={selectedState.name}
          options={states ? states : [{ name: "states" }]}
          disabled={country !== "" ? false : true}
        />
        <SelectBox
          handleChange={citySelectHandler}
          required
          name="city"
          label="City"
          val={selectedCity}
          options={cities ? cities : [{ name: "cities" }]}
          disabled={selectedState !== "" ? false : true}
        />
        {/* <CustomInput name="country" label="Country" type="text" required />
        <CustomInput name="city" label="City" type="text" required />
        <CustomInput name="state" label="State" type="text" required /> */}
        <CustomInput name="area" label="Area" type="text" />
        <CustomInput name="street" label="Street" type="text" />
        <div style={{visibilty:"hidden"}}></div>
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
        <p>
          if you already registered click <Link to="/login">here</Link> to log
          in
        </p>
      </div>
    </>
  );
});
export default Register;
