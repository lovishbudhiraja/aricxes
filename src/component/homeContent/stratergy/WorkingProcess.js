import React, { useContext } from "react";
import { GlobalUrls } from "../../../utils/urls";
import ApiContext from "../../../utils/DataContext";

function WorkingProcess() {
  const { apiCall } = useContext(ApiContext);
  return (
    <section className="bg-[#11161e] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/dfvonhupq/image/upload/v1734333445/processBg_rw44os.png')]  bg-cover bg-fixed"></div>
      <div className="wrapper relative max-w-5xl">
        <div className="flex gap-14 flex-col">
          {apiCall[0].workingprocess.list.map((items, index) => {
            return (
              <div
                className={`flex flex-wrap lg:flex-nowrap gap-7 items-center justify-center ${
                  index % 2 ? "flex-row lg:flex-row-reverse" : " "
                }`}
                key={items.id}
              >
                {console.log(items.clr)}
                <div
                  className={`flex items-center flex-1 ${
                    index % 2 ? "flex-row-reverse" : " "
                  }`}
                >
                  <span
                    className={`font-juliet font-black text-9xl relative ${
                      index % 2 ? "left-[-20px]" : "left-5"
                    }`}
                    style={{ color: items.clr }}
                  >
                    {items.id}
                  </span>
                  <p className={`text-[#A4A9B9] text-5xl relative`}>
                    {items.name}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-8 border-slate-700">
                    <img
                      className="object-cover w-full h-full"
                      src={`${GlobalUrls}${items.img}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-1 flex">
                  <p
                    className={`font-light text-[#A4A9B9] ${
                      index % 2 ? "text-right" : "text-left"
                    }`}
                  >
                    {items.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkingProcess;
