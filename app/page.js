// components/LoginPage.jsx

'use client';
import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function LoginPage() {
  useEffect(() => {
    new Swiper('.swiper', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 2.5,
      spaceBetween: 20,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen font-[Montserrat]">
      {/* Left Panel */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-white p-6 lg:p-0">
        <div className="bg-white rounded-[20px] shadow-[0px_4px_50px_0px_#338CF51A] text-center p-10 max-w-[400px] w-full">
          <img src="/img/logo.png" alt="logo" className="mx-auto mb-6" />

          <h1 className="text-[28px] lg:text-[40px] font-bold text-[#18191F] mb-2">
            Welcome Back 👋
          </h1>
          <p className="text-[18px] lg:text-[20px] font-medium text-[#18191F] mb-6">
            Sign up to your account
          </p>

          <button className="flex items-center justify-center gap-3 border border-gray-300 py-3 px-4 w-full text-sm rounded-md cursor-pointer mb-6">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google icon"
              className="w-[18px]"
            />
            Continue With Google
          </button>

          <p className="text-[#18191F] text-sm lg:text-base font-medium leading-[28px]">
            You also agree to our{' '}
            <a href="#" className="text-[#0066FF]">
              Terms Conditions
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#0066FF]">
              Privacy Policy
            </a>
            . Already a member?{' '}
            <a href="#" className="text-[#0066FF]">
              Sign in
            </a>
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-[#0070f3] text-white flex flex-col justify-center items-center text-center py-16">
        <h1 className="text-[28px] sm:text-[32px] lg:text-[54px] leading-[34px] sm:leading-[38px] lg:leading-[60px] font-bold mb-6">
          Proof That Our <br /> Software Works
        </h1>

        {/* Swiper */}
        <div className="swiper w-full max-w-full py-2 lg:py-2 mb-5">
          <div className="swiper-wrapper scale-[1.0] lg:scale-[1.3] flex items-center">
            <div className="swiper-slide">
              <img
                src="img/slide-1.png"
                alt="Slide 1"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="img/slide-2.png"
                alt="Slide 2"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="img/slide-3.png"
                alt="Slide 3"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="img/slide-1.png"
                alt="Slide 1"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="img/slide-2.png"
                alt="Slide 2"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="img/slide-3.png"
                alt="Slide 3"
              />
            </div>
          </div>
          <div className="swiper-pagination mt-2 !bottom-[-10px]" />
        </div>

        <p className="text-[14px] sm:text-[16px] lg:text-[20px] mb-3 px-2">
          HeroicShorts.com – From 0 to 300 Keywords Ranked in 3 Months
        </p>

        <img src="/img/reviews.png" alt="reviews" className="mt-3 max-w-full" />
      </div>
    </div>
  );
}

