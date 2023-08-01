//react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  name : string,
  email : any,
  phone : number
}

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="text-center ms-12">
        <p className="text-center ms-9">React Hook Form</p>
        <div className="mt-5">
          <label htmlFor="name" className="text-sm">
            name
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
            <span className="text-red text-lg me-28">This is required</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span className="text-red text-lg me-28">Max length exceeded</span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span className="text-red text-lg me-28">Min length</span>
          )}
        </div>

        <div className="mt-6">
          <label htmlFor="email" className="text-sm">
            email
          </label>
          <input
            id="email"
            className={`${
              errors.email
                ? "border-red border-2 h-9 w-60  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"
                : "border h-8 w-60 mx-auto placeholder-gray-400 ms-4"
            }`}
            {...register("email", {
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
          />
          <br></br>
          {errors.email && errors.email.type === "required" && (
            <span className="text-red text-lg me-28">This is required</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="text-red text-lg me-28">
              email format is wrong
            </span>
          )}
        </div>

        <div className="mt-6">
          <label htmlFor="phone" className="text-sm">
            phone
          </label>
          <input
            id="phone"
            className={`${
              errors.phone
                ? "border-red border-2 h-9 w-60  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"
                : "border h-8 w-60 mx-auto placeholder-gray-400 ms-4"
            }`}
            {...register("phone", {
              required: true,
              maxLength: 30,
              pattern: /^[0-9]+$/,
            })}
          />
          <br></br>
          {errors.phone && errors.phone.type === "required" && (
            <span className="text-red text-lg me-28">This is required</span>
          )}
          {errors.phone && errors.phone.type === "pattern" && (
            <span className="text-red text-lg me-28">
              Number format is wrong
            </span>
          )}
        </div>

        <input
          type="submit"
          className="bg-transparent text-black-700 py-2 px-6 border text-xs mt-4 ms-12"
        />
      </form>
      <hr className="border-1 border-gray mt-10" />
    </>
  );
}
export default HookForm;
