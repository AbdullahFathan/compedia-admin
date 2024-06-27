import React from "react";

const DummyPagination = () => {
  return (
    <div className="join bg-white flex justify-center items-center">
      <button className="join-item btn bg-white border border-primary text-textBlack mx-4 hover:bg-primary hover:text-white">
        {"<"}
      </button>
      <button className="join-item btn bg-white border border-primary text-textBlack mx-2 hover:bg-primary hover:text-white">
        1
      </button>
      <button className="join-item btn bg-white border border-primary text-textBlack mx-2 hover:bg-primary hover:text-white">
        2
      </button>
      <button
        disabled={true}
        className="join-item btn  disabled:bg-white border  disabled:border-primary disabled:text-textBlack mx-2"
      >
        ...
      </button>
      <button className="join-item btn bg-white border border-primary text-textBlack mx-2 hover:bg-primary hover:text-white">
        6
      </button>
      <button className="join-item btn bg-white border border-primary text-textBlack mx-2 hover:bg-primary hover:text-white">
        7
      </button>
      <button className="join-item btn bg-white border border-primary text-textBlack mx-4 hover:bg-primary hover:text-whites">
        {">"}
      </button>
    </div>
  );
};

export default DummyPagination;
