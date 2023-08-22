const SearchBox = () => {
  return (
    <div className="absolute top-[40.63rem] left-[11.06rem] w-[67.88rem] h-[8.75rem] text-left text-[1rem] text-white font-dm-sans">
      <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-darkslateblue-200 shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] w-[67.88rem] h-[8.75rem]" />
      <div className="absolute top-[1.88rem] left-[3rem] w-[61.88rem] h-[4.06rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[18.13rem] h-[4.06rem]">
          <div className="absolute top-[0rem] left-[0rem]">Search Event</div>
          <b className="absolute top-[2rem] left-[0rem] text-[1.38rem]">
            Konser Jazz
          </b>
          <div className="absolute top-[4.03rem] left-[-0.03rem] box-border w-[18.19rem] h-[0.06rem] border-t-[1px] border-solid border-steelblue" />
        </div>
        <div className="absolute top-[0rem] left-[21.88rem] w-[18.13rem] h-[4.06rem]">
          <div className="absolute top-[0rem] left-[0rem]">Place</div>
          <b className="absolute top-[2rem] left-[0rem] text-[1.38rem]">
            Indonesia
          </b>
          <div className="absolute top-[4.03rem] left-[-0.03rem] box-border w-[18.19rem] h-[0.06rem] border-t-[1px] border-solid border-steelblue" />
        </div>
        <div className="absolute top-[0rem] left-[43.75rem] w-[18.13rem] h-[4.06rem]">
          <div className="absolute top-[0rem] left-[0rem]">Time</div>
          <b className="absolute top-[2rem] left-[0rem] text-[1.38rem]">
            Any date
          </b>
          <div className="absolute top-[4.03rem] left-[-0.03rem] box-border w-[18.19rem] h-[0.06rem] border-t-[1px] border-solid border-steelblue" />
          <img
            className="absolute top-[3rem] left-[17.38rem] w-[0.75rem] h-[0.44rem]"
            alt=""
            src="/vector2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
