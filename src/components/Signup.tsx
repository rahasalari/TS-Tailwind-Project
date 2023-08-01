//redux toolkit
import { useState } from "react";
//import redux
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../features/name/nameSlice";
import { setPhone } from "../features/phone/phoneSlice";
import { setEmail } from "../features/email/emailSlice";
import { RootState } from "../app/store";

const SignUp = () => {
  //states
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const errors = [nameError, emailError, phoneError];

  //selectors
  const name = useSelector((store : RootState) => store.user.nameValue);
  const email = useSelector((store : RootState) => store.email.emailValue);
  const phone = useSelector((store : RootState) => store.phone.phoneValue);

  const contact = { name, email, phone };

  //dispatch
  const dispatch = useDispatch();
  const nameChangeHandler = (e : any) => {
    dispatch(setName(e.target.value.replace(/[^a-z]/gi, "")));
  };
  const emailChangeHandler = (e : any) => {
    dispatch(setEmail(e.target.value));
  };
  const phoneChangeHandler = (e : any) => {
    dispatch(setPhone(e.target.value.replace(/[^0-9]+$/gi, "")));
  };

  //validation and submit
  const submitHandler = (e : any) => {
    e.preventDefault();
    console.log(contact);

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

    // email validation
    if (!email) {
      setEmailError("email required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("email format is invalid");
    } else {
      setEmailError('');
    }

    // phone number validation
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

    if (
      nameError.length !> 0 &&
      emailError.length !> 0 &&
      phoneError.length !> 0
    ) {
      console.log({ name: name, email: email, phone: phone });
    }
  };

  return (
    <div className="ms-20">
      <p className="text-center ms-10">Redux form</p>
      <form onSubmit={submitHandler}>
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
                : "border h-8 w-60 mx-auto placeholder-gray-400 ms-4"
            }`}
          />
          <br></br>
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
                : "border h-8 w-60 mx-auto placeholder-gray-400 ms-4"
            }`}
          />
          <br></br>
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
                ? "border-red border-2 h-9 w-60 mx-auto placeholder-gray-400 placeholder:text-sm ms-3"
                : "border h-8 w-60 mx-auto placeholder-gray-400 ms-3"
            }`}
          />
          <br></br>
        </div>
        <div>
          <button
            type="submit"
            className="bg-transparent text-black-700 py-2 px-6 border text-xs mt-4 ms-28"
          >
            Contact US
          </button>
          <div>
            {errors && (
              <ol>
                {errors.map(
                  (err) =>
                    err.length > 0 && (
                      <li
                        style={{
                          listStyle: "square",
                          listStylePosition: "inside",
                        }}
                        className="text-sm mt-3 bg-red w-60 pb-1 pt-1 text-left ps-5 ms-14"
                      >
                        {err}
                      </li>
                    )
                )}
              </ol>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUp;