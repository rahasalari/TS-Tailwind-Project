import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SignupPopup from "./SignupPopup";
//icons
import { FaRegTimesCircle } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

interface Inputs {
    name : string,
    email : any,
    phone : number
}

const LoginPopup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    
      const [showModal, setShowModal] = useState<boolean>(false);
      const clickHandler = () => {
        setShowModal(false);
      };

  // close login popup by clicking in login

  // const modalHandler = () => {
  //   setTimeout(() => {
  //     setShowModal(false);
  //   });
  // };

  return (
    <>
      {/* button */}
      <button
        className="bg-gray-100 hover:bg-gray-100 text-gray-900 d py-1 px-3 border-none text-xs"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>

      {showModal && (
        <>
          <div className="mx-auto my-auto fixed inset-0 z-50 shadow-2xl p-10 w-128 h-110 bg-white">
            {/* header */}
            <div className="flex">
              <FaChevronLeft className="mt-2" onClick={clickHandler} />
              <p className="text-left text-purple  text-xl ms-3">Login form</p>
              <FaRegTimesCircle
                className="ms-auto text-base mt-2 cursor-pointer"
                type="button"
                onClick={() => setShowModal(false)}
              />
            </div>
            <hr className="border-1 border-gray-100 mt-4 w-120" />
            {/* form */}
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                <div className="mt-14">
                  <label htmlFor="name" className="text-sm text-left">
                    user name
                  </label>
                  <input
                    id="name"
                    className={`${
                      errors.name
                        ? "border-red border-2 h-9 w-60  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"
                        : "border h-8 w-60 mx-auto placeholder-gray-400 ms-4"
                    }`}
                    {...register("name", {
                      required: true,
                      maxLength: 30,
                      minLength: 3,
                    })}
                  />
                  <br></br>
                  {errors.name && errors.name.type === "required" && (
                    <span className="text-red text-lg me-20">
                      This is required
                    </span>
                  )}
                  {errors.name && errors.name.type === "maxLength" && (
                    <span className="text-red text-lg me-20">
                      Max length exceeded
                    </span>
                  )}
                  {errors.name && errors.name.type === "minLength" && (
                    <span className="text-red text-lg me-20">Min length</span>
                  )}
                </div>

                <div className="mt-4 ">
                  <label htmlFor="email" className="text-sm me-12">
                    email
                  </label>
                  <input
                    id="email"
                    className={`${
                      errors.email
                        ? "border-red border-2 h-9 w-60  mx-auto placeholder-gray-400 placeholder:text-sm"
                        : "border h-8 w-60 mx-auto placeholder-gray-400"
                    }`}
                    {...register("email", {
                      required: true,
                      pattern: /\S+@\S+\.\S+/,
                    })}
                  />
                  <br></br>
                  {errors.email && errors.email.type === "required" && (
                    <span className="text-red text-lg me-20">
                      This is required
                    </span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span className="text-red text-lg me-20">
                      email format is wrong
                    </span>
                  )}
                </div>
                <input
                  type="submit"
                  className="bg-transparent text-black-700 py-2 px-6 border text-xs mt-4 ms-20"
                />
              </form>
            </div>
            {/* button */}
            <div className="flex flex-col items-start mt-5">
              <button className="text-lg ms-12 text-cyan-700">
                forgot password
              </button>
              <button className="ms-9">
                <SignupPopup />
              </button>
            </div>
          </div>
          <div className="opacity-40 bg-black fixed inset-0 z-40"></div>
        </>
      )}
    </>
  );
};
export default LoginPopup;
