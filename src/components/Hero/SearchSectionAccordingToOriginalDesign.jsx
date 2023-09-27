import React, { useMemo, useState } from "react";
import LocationIcon from "../../assets/icons/location-icon.svg";
import HomeIcon from "../../assets/icons/home-icon.svg";
import DollarIcon from "../../assets/icons/dollar-icon.svg";
import { cn } from "../../lib/utils";
import { Select } from "@mantine/core";
import { PakistanCities } from "../Filters/cities";
import { useNavigate } from "react-router-dom";

const SearchSectionAccordingToOriginalDesign = () => {
  const [city, setCity] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [lookingfor, setLookingfor] = useState("buy");

  const navigate = useNavigate();

  const buttons = [
    {
      name: "buy",
      text: "Buy",
    },
    {
      name: "rent",
      text: "Rent",
    },
    {
      name: "exchange",
      text: "Exchange",
    },
  ];

  const cityData = useMemo(() => {
    return PakistanCities.map((city) => ({
      label: city.label,
      value: city.value,
    }));
  }, []);
  return (
    <section class="flex w-full flex-col items-center bg-[url('/src/assets/images/home-page-cover.png')] bg-right-bottom bg-no-repeat">
      <div class="content isolate mt-[40px] w-[90%] max-w-[1430px]">
        <div class="text relative after:absolute after:top-[-10px] after:bottom-[-10px] after:left-[-10px] after:right-[-10px] after:-z-10 after:block after:bg-headingBackground/50 after:bg-bottom after:bg-no-repeat after:blur-[30px] after:content-[''] after:md:hidden">
          <h1 class="relative overflow-visible text-[40px] font-bold     leading-[50px] sm:text-[47px] sm:leading-[60px] md:text-[55px] md:leading-[70px] lg:text-[70px] lg:leading-[80px] xl:text-[90px] xl:leading-[110px] 2xl:text-[135px] 2xl:leading-[130px]">
            Find your
            <br />
            dream home
            <span class="absolute top-[-10%] left-[-10%] -z-10 block h-[100%] w-[33%] rounded-[650px_650px_500px_500px] border-2 bg-headingBackground blur-[230px]"></span>
            <span class="absolute top-[-5%] left-[15%] -z-10 h-[100%] w-[33%] rounded-[650px_650px_500px_500px] bg-headingBackground blur-[230px]"></span>
            <span class="absolute top-[-20%] right-0 -z-10 block h-[100%] w-[33%] rounded-[650px_650px_500px_500px] bg-headingBackground blur-[230px] sm:right-[45%]"></span>
          </h1>
          <p class="mt-[20px] text-[20px] leading-normal text-dividerBlack sm:mt-[25px] sm:text-[23px] md:mt-[30px] md:text-[27px] lg:mt-[35px] lg:text-[30px] xl:mt-[50px] xl:text-[32px] 2xl:text-[35px]">
            This is where you can find a dream
            <br />
            home of your choice without stress
          </p>
        </div>

        <div class="search-box relative w-full rounded-[10px] border-2 border-accentRed bg-white p-[30px] mt-[60px] md:mt-[80px] lg:mt-[100px] sm:p-[40px] md:rounded-[15px] md:p-[48px] lg:p-[56px] xl:rounded-[20px] xl:p-[64] 2xl:p-[70px]">
          <div class="buttons xl-left-[60px] absolute top-[-15px] left-[10px] flex gap-[10px] overflow-x-auto sm:top-[-20px] sm:left-[20px] sm:gap-[20px] md:left-[30px] lg:top-[-22px] lg:left-[45px] xl:top-[-26px] 2xl:left-[70px]">
            {buttons.map((button) => (
              <button
                key={button.name}
                onClick={() => setLookingfor(button.name)}
                class={cn(
                  "inline-flex h-[30px] w-[80px] items-center justify-center rounded-[7px] border-2 border-accentRed bg-white text-[15px] font-bold text-accentRed sm:h-[40px] sm:w-[120px] sm:text-[18px] lg:h-[45px] lg:w-[150px] lg:text-[22px] xl:h-[52px] xl:w-[170px] xl:text-[24px]",
                  button.name === lookingfor && "bg-accentRed text-white"
                )}
              >
                {button.text}
              </button>
            ))}
          </div>
          <div class="content flex h-full flex-col justify-between">
            <p class="mb-[16px] text-[20px] font-medium sm:mb-[22px] sm:text-[22px] md:mb-[28px] md:text-[24px] lg:mb-[36px] lg:text-[26px] xl:text-[27px]">
              Search the price you are looking for here
            </p>
            <div class="flex flex-col items-center justify-between gap-[14px] sm:gap-[16px] md:gap-[18px] lg:h-[60px] lg:flex-row lg:gap-[20px]">
              <div class="h-[33%] w-full flex-1 sm:h-full">
                <Select
                  type="text"
                  placeholder="Location"
                  size="xl"
                  className="rounded-3xl"
                  data={cityData}
                  rightSection={<img src={LocationIcon} alt="" />}
                  rightSectionWidth={50}
                  value={city}
                  onChange={(v) => setCity(v)}
                ></Select>
              </div>
              <div class="h-[33%] w-full flex-1 sm:h-full">
                <Select
                  type="text"
                  placeholder="Type"
                  size="xl"
                  className="rounded-3xl"
                  data={[
                    { value: "house", label: "House" },
                    { value: "plot", label: "Plot" },
                    { value: "flat", label: "Flat" },
                    { value: "shop", label: "Shop" },
                    { value: "file", label: "File" },
                    { value: "farmhouse", label: "Farmhouse" },
                    { value: "building", label: "Building" },
                    { value: "villa", label: "Villa" },
                    { value: "penthouse", label: "Penthouse" },
                    { value: "plaza", label: "Plaza" },
                  ]}
                  rightSection={<img src={HomeIcon} alt="" />}
                  rightSectionWidth={50}
                  value={SubCategory}
                  onChange={(v) => setSubCategory(v)}
                ></Select>
              </div>
              <div class="h-[33%] w-full flex-1 sm:h-full">
                <Select
                  type="text"
                  placeholder="Price"
                  size="xl"
                  className="rounded-3xl"
                  data={[
                    { value: "1", label: "Less than 15 Lac" },
                    { value: "2", label: "15 Lac to 50 Lac" },
                    { value: "3", label: "50 Lac to 1 Crore" },
                    { value: "4", label: "More than 1 Crore" },
                  ]}
                  rightSection={<img src={DollarIcon} alt="" />}
                  rightSectionWidth={50}
                  value={price}
                  onChange={(v) => setPrice(v)}
                ></Select>
              </div>
              <button
                class="inline-flex h-full max-w-[280px] items-center justify-center rounded-[7px] bg-accentRed p-[10px_20px] text-[16px] text-white sm:rounded-[14px] sm:text-[27px]"
                onClick={() => {
                  lookingfor === "buy"
                    ? navigate(`/properties`, {
                        state: {
                          city: city,
                          SubCategory: SubCategory,
                          price: price,
                        },
                      })
                    : lookingfor === "rent"
                    ? navigate(`/rent`, {
                        state: {
                          city: city,
                          SubCategory: SubCategory,
                          price: price,
                        },
                      })
                    : navigate(`/exchange`, {
                        state: {
                          city: city,
                          SubCategory: SubCategory,
                          price: price,
                        },
                      });
                }}
              >
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSectionAccordingToOriginalDesign;
