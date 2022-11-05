/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const customBg = plugin(({ addUtilities, addComponents, e, config }) => {
  addUtilities({
    ".bg-hero": {
      background:
        "linear-gradient(-45deg, rgba(126 34 206/0.3), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(./assets/images/herobackground.png)",
    },
  });
});
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundPosition: {
        custom: "0 25%",
        "about-pos": "right 40%",
      },
      boxShadow: {
        custom: "0px -29px 60px #fff, 0px -10px 10px #3333334d",
        top: "0px -5px 25px #5151514d",
      },
      backgroundImage: {
        steps: "url(./assets/images/logoblured.png)",
        about: "url(./assets/images/aboutimg.png)",
        faqs: "url(./assets/images/faqsbg.png)",
        "swiper-right-btn": "url(./assets/icons/swipercontrollerright.svg)",
        "swiper-left-btn": "url(./assets/icons/swipercontrollerleft.scg)",
      },
    },
  },
  plugins: [customBg],
};
