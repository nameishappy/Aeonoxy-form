import React from "react";
import StarRatings from "react-star-ratings";

const Step5 = () => {
  return (
    <div className="flex flex-col justify-between mb-12 p-20">
      <div className="grid grid-cols-2 justify-evenly h-full gap-3">
        <div className=" flex justify-center items-center h-full">
          <img
            className="px-10"
            src="https://sdl-stickershop.line.naver.jp/products/0/0/1/1182708/android/stickers/7431330.png;compress=true"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-3xl font-bold leading-2 w-full my-4">
            You're on your way!
          </h1>
          <div className="w-full mb-4">
            <StarRatings
              // rating={this.state.rating}
              starRatedColor="blue"
              // changeRating={this.changeRating}
              numberOfStars={5}
              starSpacing="1px"
              starDimension="36px"
              name="rating"
              size={24}
              starEmptyColor="#ffbc3c"
            />
          </div>
          <p>
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </p>
          <p className="w-full mt-3">- Jacob S.</p>
        </div>
      </div>
    </div>
  );
};

export default Step5;
