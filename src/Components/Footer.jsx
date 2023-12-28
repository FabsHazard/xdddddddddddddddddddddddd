import React from 'react';

const footerData = [
  {
    title: "Resources",
    items: [
      { label: "White paper [Coming Soon]", link: "https://metchain.tech/whitepaper" },
      { label: "Technical paper", link: "https://metchain.gitbook.io/docs/" },
      { label: "Explorer", link: "https://www.metscan.io/" },
    ],
  },
  {
    title: "About",
    items: [{ label: "Team [Coming Soon]", link: "https://metchain.tech/team" }],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10 lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Metchain
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Building trust, block by block.
                Empowering the future with MetChain - Where innovation meets blockchain technology.
              </p>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Resources</h3>
                <ul>
                  {footerData[0].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  About
                </h3>
                <ul>
                  {footerData[1].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 pt-12 mt-16 hidden lg:block">
            &copy; Copyright ©2023 Metchain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
