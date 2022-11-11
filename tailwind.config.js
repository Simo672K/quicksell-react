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
        breadcrumb: `url("data:image/svg+xml,%3Csvg width='10' height='17' viewBox='0 0 10 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L8.80769 8.4359L1 15.5' stroke='%236B2695' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
        placeholder: 'url(./assets/images/imageplaceholder.png)',
        'placeholder-min': 'url(./assets/images/placeholdermin.png)',
      }
    },
  },
  plugins: [customBg],
};
