// import im from "../assets/im.png";
// import add from "../assets/add.png";

const AddTasks = () => {
  return (
    <>
      <div className="lg:flex lg:mt-20 lg:justify-around">
        <div className="mt-20 lg:ms-20">
          <div className="box-content relative h-60 w-96 p-4 ms-auto me-auto bg-gray lg:ms-24">
            <div className="flex">
              <div className="rounded-full h-24 w-24 bg-purple absolute -left-3 -top-10"></div>
              <div className="box-content h-5 w-32 p-4 bg-white shadow-sm pt-3 absolute -right-5 -top-3">
                <p className="text-xsm">FACEBOOK ENGAGEMENT</p>
                <p className="text-xsm">
                  1230<span className="text-gray-400 ms-3">INTERACTION</span>
                </p>
              </div>
            </div>

            <div className="box-content h-6 w-28 border-dashed p-4 border-2 mx-auto mt-20">
              <div className="flex">
                <div className="pt-1">
                  <img /*src={im}*/ alt="icon" className="h-6 w-6" />
                </div>
                <div className="ms-5">
                  <p className="text-xsm">Drag & Drop</p>
                  <p className="text-xsm">
                    <span className="text-green-300 text-xxsm">
                      brows for a file
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="box-content h-4 w-44 p-4 bg-white shadow-sm ms-auto mt-10 flex absolute -right-10 ">
              <img /*src={add}*/ alt="add icon" className="h-4 w-4" />
              <p className="ms-1 text-lg">
                Add more <span className="font-medium text-lg">Tasks</span>
              </p>
            </div>
          </div>
        </div>

        <div className="lg:me-24 mt-16">
          <p className="text-2xl text-center lg:text-left lg:mt-14">
            Have access to a robots
          </p>
          <p className="text-2xl text-center lg:text-left">
            email marketing tool.
          </p>
          <p className="text-xs text-gray-600 mt-8 text-center lg:text-left">
            If you're reading this, you already have access to
          </p>
          <p className="text-xs text-gray-600 text-center lg:text-left">
            a robots email marketing tool.
          </p>
          <div className="mt-8 text-center lg:text-left">
            <button className="bg-transparent text-purple  py-2 px-6 border border-purple text-xs">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <hr className="border-1 border-gray-400 mt-10" />
    </>
  );
};
export default AddTasks;
