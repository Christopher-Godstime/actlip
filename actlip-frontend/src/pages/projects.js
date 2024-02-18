import React from "react";
import pic8 from "../assets/pic8.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div class="px-[2%] md:px-[3%] lg:px-[5%] 2xl:px-[10%] py-[20px] md:py-[40px] lg:py-[50px] bg-gray-100 grid grid-cols-1 md:grid-cols-2">
        <h4 class="xl:text-[35px] text-[20px] md:text-[25px] font-semibold mb-[15px] md:mb-[0px] md:mr-[5%]">
          Project Details
        </h4>
        <h4 class="text-[14px]  xl:text-[18px] leading-[25px] text-gray-900">
          Dive into detailed descriptions of our key projects, exploring how we
          bring about positive change in technology through innovative
          initiatives.
        </h4>
      </div>
      <div className="px-[2%] md:px-[3%] lg:px-[5%] 2xl:px-[10%] py-[20px] md:py-[40px] lg:py-[50px] bg-primary1  grid grid-cols-1 md:grid-cols-2">
        <h4 className="xl:text-[35px] text-[20px] md:text-[25px] font-semibold mb-[15px] md:mb-[0px] text-gray-200">
          Success Stories
        </h4>
        <h4 className="text-[14px] text-gray-200 xl:text-[18px] leading-[25px]">
          Read inspiring success stories and case studies that highlight the
          tangible impact of our work in the technology and legal spheres.
        </h4>
      </div>
      <div className="px-[2%] md:px-[3%] lg:px-[5%] 2xl:px-[10%] py-[20px] md:py-[40px] lg:py-[50px] bg-white">
        <div className="p-[5%] md:p-[3%] lg:p-[4%] 2xl:p-[4%] bg-sky-100 rounded-[16px] relative grid grid-cols-1 md:grid-cols-2 items-center md:gap-[8%] gap-y-[30px] md:gap-y-[0px]">
          <div className=" ">
            <h4 className="xl:text-[35px] text-[20px] md:text-[25px] font-semibold mb-[20px] xl:leading-[50px]">
              Visual Impact
            </h4>
            <h4 className="mb-[20px] text-[14px] text-gray-600 xl:text-[18px] leading-[25px]">
              Explore visual representations, such as infographics and
              timelines, illustrating the profound impact of our initiatives.
            </h4>
            <h4 className="mb-[20px] text-[14px] text-gray-600 mt-[10px] xl:text-[16px] leading-[25px]"></h4>
            <Link to="/news-and-articles">
              <button className="bg-primary1 hover:bg-sky-900 text-white px-[16px] py-[12px] mt-[15px] rounded-[8px]">
                Read News
              </button>
            </Link>
          </div>
          <img className="rounded-[10px]" src={pic8} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
