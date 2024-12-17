"use client";
import React, { use, useEffect, useState } from "react"; 
import Image from "next/image"; 
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { useAppSelector } from "@/redux/store";

const ShowDetails = () => {  
  const [activeTab, setActiveTab] = useState("tabOne");
  const tabs = [
    {
      id: "tabOne",
      title: "Description",
    },
    {
      id: "tabTwo",
      title: "Additional Information",
    },
 
  ];
 
  const alreadyExist = localStorage.getItem("productDetails");
  const productFromStorage = useAppSelector(
    (state) => state.productDetailsReducer.value
  );
  const product = alreadyExist ? JSON.parse(alreadyExist) : productFromStorage;
  useEffect(() => {
    localStorage.setItem("productDetails", JSON.stringify(product));
  }, [product]);

  console.log(product);
  return (
        <>
          <section className="overflow-hidden bg-gray-2 py-20">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
              {/* <!--== tab header start ==--> */}
              <div className="flex flex-wrap items-center bg-white rounded-[10px] shadow-1 gap-5 xl:gap-12.5 py-4.5 px-4 sm:px-6">
                {tabs.map((item, key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(item.id)}
                    className={`font-medium lg:text-lg ease-out duration-200 hover:text-blue relative before:h-0.5 before:bg-blue before:absolute before:left-0 before:bottom-0 before:ease-out before:duration-200 hover:before:w-full ${
                      activeTab === item.id
                        ? "text-blue before:w-full"
                        : "text-dark before:w-0"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <div>
                <div
                  className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-12.5 ${
                    activeTab === "tabOne" ? "flex" : "hidden"
                  }`}
                >
                  <div className="max-w-[670px] w-full">
                    <h2 className="font-medium text-2xl text-dark mb-7">
                      Specifications:
                    </h2>

                    <p className="mb-6">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
                    <p className="mb-6">
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s.
                    </p>
                    <p>
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions.
                    </p>
                  </div>

                  <div className="max-w-[447px] w-full">
                    <h2 className="font-medium text-2xl text-dark mb-7">
                      Care & Maintenance:
                    </h2>

                    <p className="mb-6">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
                    <p>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`rounded-xl bg-white shadow-1 p-4 sm:p-6 mt-10 ${
                    activeTab === "tabTwo" ? "block" : "hidden"
                  }`}
                >
                  {/* <!-- info item --> */}
                  <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                    <div className="max-w-[450px] min-w-[140px] w-full">
                      <p className="text-sm sm:text-base text-dark">Brand</p>
                    </div>
                    <div className="w-full">
                      <p className="text-sm sm:text-base text-dark">Apple</p>
                    </div>
                  </div>

                  <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                    <div className="max-w-[450px] min-w-[140px] w-full">
                      <p className="text-sm sm:text-base text-dark">Model</p>
                    </div>
                    <div className="w-full">
                      <p className="text-sm sm:text-base text-dark">
                        iPhone 16
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                    <div className="max-w-[450px] min-w-[140px] w-full">
                      <p className="text-sm sm:text-base text-dark">
                        Display Size
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="text-sm sm:text-base text-dark">
                        6.7 inches
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                    <div className="max-w-[450px] min-w-[140px] w-full">
                      <p className="text-sm sm:text-base text-dark">
                        Display Type
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="text-sm sm:text-base text-dark">
                        Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits
                        (HBM), 1200 nits (peak)
                      </p>
                    </div>
                  </div>
                  <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                    <div className="max-w-[450px] min-w-[140px] w-full">
                      <p className="text-sm sm:text-base text-dark">
                        Display Resolution
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="text-sm sm:text-base text-dark">
                        1284 x 2778 pixels, 19.5:9 ratio
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                    <div className="max-w-[450px] min-w-[140px] w-full">
                      <p className="text-sm sm:text-base text-dark">Chipset</p>
                    </div>
                    <div className="w-full">
                      <p className="text-sm sm:text-base text-dark">
                        Apple A15 Bionic (5 nm)
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                    <div className="max-w-[450px] min-w-[140px] w-full">
                      <p className="text-sm sm:text-base text-dark">Memory</p>
                    </div>
                    <div className="w-full">
                      <p className="text-sm sm:text-base text-dark">
                        128GB 6GB RAM | 256GB 6GB RAM | 512GB 6GB RAM
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                    <div className="max-w-[450px] min-w-[140px] w-full">
                      <p className="text-sm sm:text-base text-dark">
                        Main Camera
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="text-sm sm:text-base text-dark">
                        12MP + 12MP | 4K@24/25/30/60fps, stereo sound rec.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                    <div className="max-w-[450px] min-w-[140px] w-full">
                      <p className="text-sm sm:text-base text-dark">
                        Selfie Camera
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="text-sm sm:text-base text-dark">
                        12 MP | 4K@24/25/30/60fps, 1080p@25/30/60/120fps,
                        gyro-EIS
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                    <div className="max-w-[450px] min-w-[140px] w-full">
                      <p className="text-sm sm:text-base text-dark">
                        Battery Info
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="text-sm sm:text-base text-dark">
                        Li-Ion 4323 mAh, non-removable | 15W wireless (MagSafe),
                        7.5W wireless (Qi)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> 
        </>
      )}
  
 
 

export default ShowDetails;
