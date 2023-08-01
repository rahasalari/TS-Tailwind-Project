const LearnMore = () => {
  return (
    <>
      <div className="bg-purple pb-10  flex flex-wrap sm:flex-nowrap sm:justify-center">
        <div className="text-white text-base mx-auto sm:me-20 mt-16 text-center sm:text-left">
          <p>With our free resources you will become</p>
          <p>an expert in direct marketing. Learn how</p>
          <p>to get the most out of the tool with our</p>
          <p>support articles or contact us to solve</p>
          <p>any questions in o time.</p>
        </div>

        <div className="mx-auto">
          <hr className="border-3 border-white mt-14" />
          <div className="flex text-white mt-6">
            <div className="ms-3">
              <p className="text-3xl">120%</p>
              <p className="text-xs">Lorem ipsum</p>
            </div>
            <div className="ms-16">
              <p className="text-3xl">250%</p>
              <p className="text-xs">Lorem ipsum</p>
            </div>
          </div>
          <button className="bg-white text-purple  py-2 px-20 border border-purple text-xs mt-8">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};
export default LearnMore;
