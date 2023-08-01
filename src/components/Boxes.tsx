const Boxes = () => {
  return (
    <div>
      <div className="mt-16">
        <h2 className="text-2xl text-center">Email Marketing</h2>
        <h2 className="text-2xl text-center">Automation Made Simple</h2>
        <p className="text-center mt-3 text-xs text-slate-400">
          Email Marketers find sucsess by ignoring best practices and focusing
          on their customers.
        </p>
      </div>

      <div className="mt-14 sm:flex sm:flex-wrap  sm:justify-center sm:gap-12">
        <div className="box-content h-56 w-40 p-6 border-none bg-gray mx-auto sm:mx-0">
          <div className="rounded-full h-10 w-10 bg-purple text-white text-center mt-5 ms-auto me-auto text-sm pt-2">
            01
          </div>
          <p className="text-xs text-center mt-4">Expanding your business</p>
          <p className="text-center text-xs text-gray-600 mt-8">
            Try out Benchmark for free to discover how simple effective email
            marketing can be.
          </p>
        </div>
        <div className="mt-10 mx-auto box-content h-56 w-40 p-6 border-none bg-gray sm:mt-0 sm:mx-0">
          <div className="rounded-full h-10 w-10 bg-purple text-white text-center mt-5 ms-auto me-auto text-sm pt-2">
            02
          </div>
          <p className="text-xs text-center mt-4">Sign up free</p>
          <p className="text-center text-xs text-gray-600 mt-8">
            Try out Benchmark for free to discover how simple effective email
            marketing can be.
          </p>
        </div>
        <div className="mt-10 mx-auto box-content h-56 w-40 p-6 border-none bg-gray sm:mt-0 sm:mx-0">
          <div className="rounded-full h-10 w-10 bg-purple text-white text-center mt-5 ms-auto me-auto text-sm pt-2">
            03
          </div>
          <p className="text-xs text-center mt-4">Explore your options</p>
          <p className="text-center text-xs text-gray-600 mt-8">
            Try out Benchmark for free to discover how simple effective email
            marketing can be.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <button className="bg-transparent text-purple  py-2 px-6 border border-purple text-xs">
          Start now
        </button>
      </div>
      <hr className="border-1 border-gray-100 mt-14" />
    </div>
  );
};
export default Boxes;
