import { useState } from "react";

const Email = () => {
  const [search, setSearch] = useState<string>("");

  const searchHandler = (e : any) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="bg-gray pb-14 pt-14">
        <div className="mt-5">
          <h2 className="text-2xl sm:text-4xl text-center">
            SMS Marketing and <span className="text-purple">Email</span>
          </h2>
          <h3 className="text-2xl sm:text-4xl text-center">
            <span className="text-purple">Marketing</span> Made Easy.
          </h3>
        </div>

        <div>
          <p className="mt-3 text-xs text-center text-slate-400">
            You can get started with your marketing automation in a few minutes
          </p>
        </div>
        <div className="mt-12 text-center sm:flex justify-center">
          <div>
            <input
              type="text"
              value={search}
              onChange={searchHandler}
              className="border pt-3 px-12  mx-auto placeholder-gray-400 placeholder:text-sm"
            />
          </div>
          <div>
            <button className="bg-black text-white  py-2 px-8 border text-sm mt-3 sm:ms-3 sm:mt-0">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Email;
