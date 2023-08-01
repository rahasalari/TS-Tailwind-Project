import { useState } from "react";
// import mail from "../../assets/mail.jpeg";

const Footer = () => {
  const [search, setSearch] = useState<string>('');

  const searchHandler = (e : any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mt-20 flex justify-around ">
      <div>
        <div className="flex w-10 h-5 ">
          <img /*src={mail}*/ alt="mail" />
          <p className="font-bold ms-3">MailMaker</p>
        </div>
        <p className="mt-10 text-slate-500 text-sm">
          subscribe to keep up with the
        </p>
        <p className="text-slate-500 text-sm">latest news</p>
        <p className="text-sm mt-10">GET IN TOUCH</p>
      </div>

      <div>
        <p className="font-bold">Learn</p>
        <p className="mt-3 text-slate-500 text-sm">Our Product</p>
        <p className="text-slate-500 text-sm">Tutorials</p>
        <p className="text-slate-500 text-sm">Our Service</p>
        <p className="text-slate-500 text-sm">Best Features</p>
      </div>

      <div>
        <p className="font-bold">Company</p>
        <p className="mt-3 text-slate-500 text-sm">About us</p>
        <p className="text-slate-500 text-sm">Careers</p>
        <p className="text-slate-500 text-sm">Contact us</p>
        <p className="text-slate-500 text-sm">News & Blog</p>
      </div>

      <div className="hidden md:block">
        <p className="text-slate-500 text-sm">
          Count to popular bi, Lorem Ipsum is
        </p>
        <p className="text-slate-500 text-sm">
          not simply random text. it has roots.
        </p>
        <div className="mt-6 flex">
          <input
            type="text"
            value={search}
            onChange={searchHandler}
            className="border pt-3 px-4 placeholder-gray-300 mx-auto"
          />
          <button className="bg-purple text-white  py-2 px-5 border border-purple text-xs ms-2"></button>
        </div>
      </div>
    </div>
  );
};
export default Footer;


