import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
  const CategoryArray = [
    {
      images: images.browse1,
      name: "Monkey",
    },
    {
      images: images.browse2,
      name: "Sports",
    },
    {
      images: images.browse3,
      name: "Building",
    },
    {
      images: images.browse4,
      name: "Nature",
    },
    {
      images: images.browse5,
      name: "Animals",
    },
    {
      images: images.browse6,
      name: "Music",
    },
    {
      images: images.browse7,
      name: "Landscape",
    },
    {
      images: images.browse8,
      name: "Teddy",
    },
    {
      images: images.browse9,
      name: "Bad Arts",
    },
    {
      images: images.browse10,
      name: " Pixel",
    },
    {
      images: images.browse11,
      name: "Portrait",
    },
  ];
  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i + 1}>
            <Image
              src={el.images}
              className={Style.category_box_img}
              alt="Background image"
              width={350}
              height={150}
              objectFit="cover"
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{el.name}</h4>
                <small>{i + 1}995 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
