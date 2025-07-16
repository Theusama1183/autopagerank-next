"use client";
import React from "react";

export default function AutoPageRankModal({ onClose }) {
  return (
    <div
      className="fixed z-50 flex items-center justify-center w-full h-full"
      style={{
        background: "#00000080",
        backdropFilter: "blur(50px)",
        WebkitBackdropFilter: "blur(50px)",
      }}
    >
      <div className="relative flex w-full max-w-5xl rounded-2xl overflow-auto ">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 text-3xl font-bold text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="flex w-full rounded-2xl overflow-hidden">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-[#1E7CFD] text-white px-8 py-10 flex flex-col justify-between">
            <div>
              <div className="flex justify-center mb-6">
                <img src="img/logo-2.png" alt="Auto Page Rank" />
              </div>

              <h2 className="text-4xl font-bold leading-tight mb-4 text-center">
                Struggling To Get your AI Content Indexed?
              </h2>

              <p className="text-2xl mb-6 leading-relaxed">
                "How We Hit{" "}
                <span className="font-semibold">53.9M Impressions</span> and{" "}
                <span className="font-semibold">541,000 Clicks</span> Without a
                Single Backlink"
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">🔁</span> Automates Indexing & SEO
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🧠</span> Human-like Content, Written
                  by AI
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⚡</span> Ranks Without Backlinks or
                  Manual Outreach
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <img src="img/reviews.png" className="w-fit" />
              <img src="img/mockup.png" alt="Mockup" className=" mt-6" />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 bg-white px-6 py-10">
            <h3 className="text-4xl font-bold mb-6">Pricing Plans</h3>

            <div className="border border-[#338CF5] rounded-[15px] mb-6 ">
              <div className="text-center p-5 bg-[#338CF5] rounded-t-[15px]">
                <p className="text-white font-semibold text-xl">
                  $0.00 Free For First 7 Days
                </p>
              </div>
              <div className="p-6 mt-5">
                <h4 className="text-2xl font-bold mb-1 text-center">Trial</h4>
                <h3 className="text-6xl font-bold text-[#18191F] mb-4 text-center">
                  $0.00{" "}
                  <span className="text-xl font-light text-[#18191F99]">
                    / for first 7 days
                  </span>
                </h3>
              </div>

              <div className="p-6 bg-[#FCFCFC] mt-6 rounded-b-[15px]">
                <ul className="text-lg text-[#18191F] space-y-1 mb-6">
                  <li className="flex gap-2.5 mt-3">
                    <svg
                      className="mt-2"
                      width="28"
                      height="16"
                      viewBox="0 0 28 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5025 10.1999L15.2675 11.9649L25.8494 1.38288L27.6173 3.15064L15.2675 15.5004L7.3125 7.54538L9.08026 5.77763L11.7362 8.43363L13.5025 10.1999ZM13.5046 6.66525L19.6954 0.474365L21.4583 2.23722L15.2675 8.428L13.5046 6.66525ZM9.97123 13.7341L8.20495 15.5004L0.25 7.54538L2.01776 5.77763L3.78404 7.544L3.78255 7.54538L9.97123 13.7341Z"
                        fill="#338CF5"
                      />
                    </svg>
                    Free trial is 7 days free then $97 per month
                  </li>
                  <li className="flex gap-2.5 mt-3">
                    <svg
                      className="mt-2"
                      width="28"
                      height="16"
                      viewBox="0 0 28 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5025 10.1999L15.2675 11.9649L25.8494 1.38288L27.6173 3.15064L15.2675 15.5004L7.3125 7.54538L9.08026 5.77763L11.7362 8.43363L13.5025 10.1999ZM13.5046 6.66525L19.6954 0.474365L21.4583 2.23722L15.2675 8.428L13.5046 6.66525ZM9.97123 13.7341L8.20495 15.5004L0.25 7.54538L2.01776 5.77763L3.78404 7.544L3.78255 7.54538L9.97123 13.7341Z"
                        fill="#338CF5"
                      />
                    </svg>
                    300 articles / 200 indexes daily
                  </li>
                </ul>
                <a href="#" target="_blank">
                  <button className="w-full bg-[#2F80ED] hover:bg-[#1669d8] text-white py-2 rounded-lg font-semibold transition-all">
                    Sign Up
                  </button>
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <div className="w-full border text-center border-[#338CF566] py-4 rounded-[10px] font-medium">
                Weekly Package
              </div>
              <div className="w-full border text-center border-[#338CF566] py-4 rounded-[10px] font-medium">
                Monthly Package
              </div>
              <div className="w-full border text-center border-[#338CF566] py-4 rounded-[10px] font-medium">
                Unlimited Package
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
