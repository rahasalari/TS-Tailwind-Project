import { useState } from "react";

function SignIn() {
  //states
  // const [ contact, setContact ] = useState({
  //     name : '',
  //     email : '',
  //     phoneNumber : '',
  // });

  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [phone, setPhone] = useState<string>();//why it's cant be number
  const [phoneError, setPhoneError] = useState<string>("");

  const nameChangeHandler = (e : any) => {
    // setContact({...contact, [e.target.name] : e.target.value });
    // setName(e.target.value);
    setName(e.target.value.replace(/[^a-z]/gi, ""));
  };

  const emailChangeHandler = (e : any) => {
    setEmail(e.target.value);
  };

  const phoneChangeHandler = (e : any) => {
    // const result = e.target.value.replace(/[^a-z]/gi, "");
    setPhone(e.target.value.replace(/[^0-9]+$/gi, ""));
  };

  //validation
  const submitHandler = (e : any) => {
    e.preventDefault();

    //name validation
    if (!name) {
      setNameError("username required");
    } else if (!/^[A-Za-z]+$/.test(name)) {
      setNameError("just alphabets");
    } else if (name.length < 3) {
      setNameError("too short");
    } else if (name.length > 20) {
      setNameError("too long");
    } else {
      setNameError('');
    }

    //email validation
    if (!email) {
      setEmailError("email required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("email format is invalid");
    } else {
      setEmailError('');
    }

    //phone number validation
    if (!phone) {
      setPhoneError("phone required");
    } else if (!/^[0-9]+$/.test(phone)) {
      setPhoneError("just numbers");
    } else if (phone.length < 10) {
      setPhoneError("too short");
    } else if (phone.length > 12) {
      setPhoneError("too long");
    } else {
      setPhoneError('');
    }

    // console.log(nameError.length);
    if (nameError.length > 0) {
    } else if (emailError.length > 0) {
    } else if (phoneError.length > 0) {
    } else {
      // console.log({ name: name, email: email, phone: phone });
    }
  };

  // console.log({ name: name, email: email, phone: phone });

  return (
    <div className="">
      <p className="text-center ms-6">State Form</p>
      <form onSubmit={submitHandler} className="">
        <div className="mt-5">
          <label className="text-sm">name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={nameChangeHandler}
            className={`${
              nameError
                ? "border-red border-2 h-9 w-60  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"
                : "border h-8 w-60  mx-auto placeholder-gray-400 ms-4"
            }`}
          />
          <br></br>
          {nameError && (
            <span className="text-red text-lg ms-14">{nameError}</span>
          )}
        </div>

        <div className="mt-6">
          <label className="text-sm">email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={emailChangeHandler}
            className={`${
              emailError
                ? "border-red border-2 h-9 w-60  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"
                : "border h-8 w-60  mx-auto placeholder-gray-400 ms-4"
            }`}
          />
          <br></br>
          {emailError && (
            <span className="text-red text-lg ms-14">{emailError}</span>
          )}
        </div>
        <div className="mt-6">
          <label className="text-sm">phone</label>
          <input
            type="text"
            name="phoneNumber"
            value={phone}
            onChange={phoneChangeHandler}
            className={`${
              phoneError
                ? "border-red border-2 h-9 w-60  mx-auto placeholder-gray-400 placeholder:text-sm ms-3"
                : "border h-8 w-60  mx-auto placeholder-gray-400 ms-3"
            }`}
          />
          <br></br>
          {phoneError && (
            <span className="text-red text-lg ms-14">{phoneError}</span>
          )}
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-transparent text-black-700  py-2 px-6 border  text-xs mt-4 ms-28"
          >
            Contact US
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignIn;
