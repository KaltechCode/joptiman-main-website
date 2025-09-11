import React, { useEffect, useState } from "react";
import "./BlogSection.css";

import LifeInsuranceImg from "../../../assets/LifeInsuranceImg.png";
import HealthInsuranceImg from "../../../assets/HealthInsuranceImg.png";
import AnnuitiesImg from "../../../assets/AnnuitiesImg.png";
import { client } from "../../../util/Sanity";

export const BlogSection = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  const getAllBlogs = async () => {
    const query = `*[_type == 'blog']{
    title,smallDescription,slug,blogImage
    }`;

    const blogData = await client.fetch(query);

    setAllBlogs(blogData);
    console.log(blogData);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  console.log("getAllBlogs from the state", allBlogs);

  return (
    <>
      <div className="2xl:py-20 xl:py-20 lg:py-20 md:portrait:py-20 4k:py-32 3k:py-24">
        <div className="max-w-[1920px] mx-auto">
          <div className="2xl:w-[70%] xl:w-[70%] lg:w-[80%] md:portrait:w-[95%] 4k:w-[70%] 3k:w-[80%] w-[90%] mx-auto">
            <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:portrait:w-[95%] 4k:w-[80%] 3k:w-[80%] w-[90%] mx-auto flex flex-col justify-center items-center gap-3">
              <h3 className="font-secondaryFont font-[700] uppercase text-secondaryColor text-lg">
                OUR LATEST BLOGS
              </h3>
              <h2 className="font-mainFont font-[700] text-[#040B1E] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:portrait:text-[40px] 5k:text-[40px] 4k:text-[40px] 3k:text-[35px] text-[20px]">
                Read Our Latest Blog Post
              </h2>
            </div>
            <div className="w-full grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:portrait:grid-cols-2  4k:grid-cols-3 3k:grid-cols-3 grid-cols-1 gap-4 my-8">
              {allBlogs.map((blog, id) => (
                <div
                  key={id}
                  className=" rounded-lg p-5 aspect-square customShadowCoreValue"
                >
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={LifeInsuranceImg}
                      alt="blog-image-1"
                      className="2xl:h-48 xl:h-40 lg:h-44 4k:h-60 3k:h-56 md:portrait:h-44 h-36 w-full "
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center my-3">
                      <p className="font-mainFont font-[400] text-secondaryColor text-base">
                        16.02.22024
                      </p>
                      <p className="font-mainFont font-[600] text-secondaryColor text-base">
                        By Johnson
                      </p>
                    </div>

                    <div>
                      <div>
                        <h3 className="font-mainFont font-[700] 2xl:text-xl xl:text-xl lg:text-xl md:portrait:text-xl 4k:text-xl 3k:text-xl text-lg">
                          {blog?.title}
                        </h3>
                      </div>
                      <div className="my-2">
                        <p className="font-secondaryFont font-[400] text-base text-paraColor line-clamp-4">
                          {blog?.smallDescription}
                        </p>
                        <div className="2xl:mt-4 xl:mt-4 lg:mt-4 md:portrait:mt-4 4k:mt-8 3k:mt-8 mt-4">
                          <button className="font-secondaryFont text-white font-[600] text-base bg-[#0C0544] px-4 py-2 rounded-md border-none outline-none button">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
