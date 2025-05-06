import React from "react";

export const InfoSection = () => {
  return (
    <div className="2xl:py-20 xl:py-20 lg:py-16 md:portrait:py-8 py-8 4k:py-28 3k:py-24">
      <div className="max-w-[1920px] mx-auto">
        <div className="2xl:w-[70%] xl:w-[70%] lg:w-[70%] 4k:w-[70%] md:portrait:w-[80%] w-[95%] mx-auto flex flex-col gap-2 2xl:px-16 xl:px-16 lg:px-16 md:portrait:px-8 4k:px-16 px-4">
          <p className="font-secondaryFont font-[400] text-paraColor text-base">
            Joining JOptiman Consultancy’s agency means becoming part of an
            innovative, client-centric team that is redefining the landscape of
            financial consulting. Whether you're an experienced professional or
            a newcomer eager to start a rewarding career in finance, we offer an
            environment where growth, excellence, and impact come together.
          </p>
          <p className="font-secondaryFont font-[400] text-paraColor text-base">
            JOptiman is committed to fostering the professional growth of its
            consultants. With continuous learning opportunities, access to a
            wealth of resources, and mentorship from experienced industry
            leaders, you'll be empowered to expand your skills and expertise.
            The firm provides a clear career progression path, ensuring that you
            can evolve within the organization and reach your full potential as
            a financial consultant.
          </p>
        </div>
      </div>
    </div>
  );
};
