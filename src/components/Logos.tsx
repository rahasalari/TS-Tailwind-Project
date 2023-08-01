// import canva from "../assets/canva.png";
// import upWork from "../assets/upwork.png";
// import RBS from "../assets/RBS.png";
// import warner from "../assets/warner.png";
// import woo from "../assets/woo.png";

function Logos() {
  return (
    <>
      <div className="mt-14 ms-10 me-10 grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:justify-around">
        <div className="flex">
          <img /*src={upWork}*/ alt="canva" className="h-10 w-10" />
          <p className="text-xs mt-3 ms-2">Upwork</p>
        </div>

        <div className="flex ">
          <img /*src={warner}*/ alt="WarnerBros" className="h-10 w-10" />
          <p className="text-xs mt-3 ms-2">WarnerBros</p>
        </div>

        <div className="flex">
          <img /*src={woo}*/ alt="woo" className="h-10 w-10" />
          <p className="text-xs mt-3 ms-2">Woo come</p>
        </div>

        <div className="flex">
          <img /*src={canva}*/ alt="Canva" className="h-10 w-10" />
          <p className="text-xs mt-3 ms-2">Canva</p>
        </div>

        <div className="flex">
          <img /*src={RBS}*/ alt="RBS" className="h-10 w-10" />
          <p className="text-xs mt-3 ms-2">RBS</p>
        </div>
      </div>

      <hr className="border-1 border-gray-100 mt-14" />
    </>
  );
}

export default Logos;
