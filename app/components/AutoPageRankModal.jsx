"use client";
import React from "react";
import PricingTabs from "./PricingTabs";

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
          <PricingTabs />
          
        </div>
      </div>
    </div>
  );
}
