import { memo } from "react";
import RectangleComponent from "./RectangleComponent";

const FirstFold = memo(() => {
  return (
    <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[45rem] text-left text-[1.13rem] text-white font-dm-sans">
      <img
        className="absolute top-[0rem] left-[0rem] w-[90rem] h-[45rem] object-cover"
        alt=""
        src="/rectangle-12@2x.png"
      />
      <RectangleComponent />
      <img
        className="absolute top-[15.86rem] left-[78.93rem] w-[1.4rem] h-[2.65rem]"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute top-[15.86rem] left-[9.74rem] w-[1.4rem] h-[2.65rem]"
        alt=""
        src="/vector1.svg"
      />
      <div className="absolute top-[0rem] left-[0rem] shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] w-[90rem] h-[4.38rem]" />
      <div className="absolute top-[1.5rem] left-[46.75rem] w-[32.19rem] h-[2.56rem] text-[1rem]">
        <div className="absolute top-[0.63rem] left-[0rem] font-medium">
          Schedule
        </div>
        <div className="absolute top-[0.63rem] left-[6.81rem] font-medium">
          Speakers
        </div>
        <div className="absolute top-[0.63rem] left-[13.56rem] font-medium">
          Ticket
        </div>
        <div className="absolute top-[0.63rem] left-[18.88rem] font-medium">
          Contact
        </div>
        <div className="absolute top-[0rem] left-[25.88rem] rounded-31xl box-border w-[6.31rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center border-[1.5px] border-solid border-white">
          <div className="relative font-medium">Login</div>
        </div>
      </div>
      <div className="absolute top-[1.56rem] left-[11.06rem] w-[9.55rem] h-[2.41rem] text-[1.78rem] font-proxima-nova">
        <div className="absolute top-[0.22rem] left-[2.67rem]">
          <span className="font-extrabold">Event</span>
          <span>ick</span>
        </div>
        <img
          className="absolute top-[0rem] left-[0rem] w-[2.15rem] h-[2.15rem] overflow-hidden"
          alt=""
          src="/ticket2-1.svg"
        />
      </div>
      <b className="absolute top-[13.63rem] left-[51.25rem] text-[2.5rem] inline-block font-proxima-nova w-[27.69rem]">
        SBS MTV The Kpop Show Ticket Package
      </b>
      <div className="absolute top-[21.38rem] left-[51.25rem] leading-[130%] font-proxima-nova inline-block w-[27.69rem]">
        Look no further! Our SBS The Show tickets are the simplest way for you
        to experience a live Kpop recording.
      </div>
      <div className="absolute top-[27.56rem] left-[50.75rem] w-[11.38rem] h-[3.75rem] text-center">
        <div className="absolute top-[0rem] left-[0rem] rounded-31xl bg-deeppink shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] w-[11.38rem] h-[3.75rem]" />
        <b className="absolute top-[1.13rem] left-[2.88rem]">Get Ticket</b>
      </div>
      <div className="absolute top-[27.56rem] left-[63.38rem] w-[11.38rem] h-[3.75rem] text-center">
        <div className="absolute top-[0rem] left-[0rem] rounded-31xl shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] box-border w-[11.38rem] h-[3.75rem] border-[1.5px] border-solid border-white" />
        <b className="absolute top-[1.13rem] left-[2.63rem]">Learn More</b>
      </div>
      <div className="absolute top-[10.06rem] left-[4.75rem] w-[48.5rem] h-[30.5rem]">
        <div className="absolute top-[24.81rem] left-[0rem] rounded-[50%] bg-midnightblue-100 [filter:blur(100px)] w-[48.5rem] h-[5.69rem]" />
        <img
          className="absolute top-[0rem] left-[4.06rem] w-[39.8rem] h-[29.75rem] object-cover"
          alt=""
          src="/pngguru-2@2x.png"
        />
      </div>
    </div>
  );
});

export default FirstFold;
