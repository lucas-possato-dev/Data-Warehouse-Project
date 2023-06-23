import React from "react";

import { featuresData } from "../data";
import { BsArrowRight } from "react-icons/bs";
import Aos from "aos";

const Features = () => {
  const { title, subtitle, list } = featuresData;
  return (
    <section className="my-[70px] xl:my-[150px]">
      <div className="container mx-auto">
        <div className="text-center">
          <h2
            className="h2 mb-6 xl?mb-12"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {title}
          </h2>
          <p
            data-aos="fade-down"
            data-aos-delay="200"
            className="lead max-w-[584px] mx-auto mb-16 xl:mb-24"
          >
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-2">
          {list.map((feature, index) => {
            const { image, bgImage, title, description, linkText, delay } =
              feature;
            return (
              <div
                data-aos="zoom-in"
                data-aos-delay={delay}
                data-aos-offset="100"
                className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                key={index}
              >
                <div className="hidden xl:flex absolute top-0 right-0 -z-10">
                  <img src={bgImage} alt="" />
                </div>
                <div
                  className="max-w-[120px] lg:mr-7 xl:max-w-[232px]"
                  data-aos="zoom-in-right"
                  data-aos-delay={delay}
                >
                  <img src={image} alt="" />
                </div>
                <div className="max-w-[220px]">
                  <h3 className="h3 mb-4">{title}</h3>
                  <p className="font-light italic mb-4">{description}</p>
                  <div className="flex items-center gap-x-2 group">
                    <a className="text-primary font-bold" href="">
                      {linkText}
                    </a>
                    <BsArrowRight className="text-xl text-accent-primary transition-all group-hover:ml-[5px]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
