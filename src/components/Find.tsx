// import find from "../assets/find.png";

const Find = () => {
  return (
    <>
      <div className="mt-20 pt-10 pb-20 ">
        <div className="text-2xl text-center">
          <p>All you need to A</p>
          <p>single platform</p>
        </div>

        <div className="md:flex md:justify-around mt-14">
          <div>
            <div className="text-base text-center md:text-start mt-14">
              <p>Homework to help</p>
              <p>you take acton.</p>
            </div>
            <div className="text-xs text-center md:text-start text-slate-600 mt-4">
              <p>to prevent procrastination and help you</p>
              <p>apply what you learn, you'll get manageable</p>
              <p>homework broken out.</p>
            </div>
            <div className="text-center md:text-left">
              <button className="bg-transparent text-purple  py-2 px-6 border border-purple text-xs mt-4">
                Find Out More
              </button>
            </div>
          </div>

          <div className="mt-14">
            <div className="text-base text-center md:text-start">
              <p>How to write every email</p>
              <p>you should be sending.</p>
            </div>
            <div className="text-xs text-center md:text-start text-slate-600 mt-4">
              <p className="">to prevent procrastination and help you</p>
              <p>apply what you learn, you'll get manageable</p>
              <p>homework broken out.</p>
            </div>
            <div className="text-center md:text-left">
              <button className="bg-transparent text-purple  py-2 px-6 border border-purple text-xs mt-4">
                Find Out More
              </button>
            </div>
          </div>

          <div>
            <img /*src={find}*/ alt="find" className="h-64 w-72 hidden md:block" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Find;
