import React from 'react';
import { Text, Img, Heading, Button } from "..";


function Hero() {
  return (
    <div>
      <div className="h-[250px] w-full relative">
              <Img
                src="../../images/img_rectangle_2040.png"
                alt="image_one"
                className="justify-center h-[250px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[15px]"
              />
              <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-gradient-light dark:bg-gradient-dark absolute rounded-[15px]">
                <div className="flex flex-col items-start justify-start w-[76%] my-1 gap-[15px] sm:gap-[33px] ">
                  <div className="flex flex-col items-start justify-start w-full gap-3.5">
                    <Heading
                      size="2xl"
                      as="h1"
                      className="!text-white-A700 tracking-[0.32px] text-[20px] sm:text-[32px] font-semibold"
                    >
                      Create and Sell Extraordinary NFTs
                    </Heading>
                    <Text
                      size="md"
                      as="p"
                      className="text-white tracking-[0.14px] text-sm font-medium opacity-0.8"
                    >
                      The world’s first and largest digital marketplace for crypto NFTs
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start gap-3">
                    <Button
                      color="white_A700"
                      size="4xl"
                      shape="round"
                      className="tracking-[0.14px] font-semibold min-w-[120px] !rounded-lg"
                    >
                      Explore More
                    </Button>
                    <Button
                      color="white_A700"
                      size="4xl"
                      variant="outline"
                      shape="round"
                      className="tracking-[0.14px] font-semibold min-w-[120px] !rounded-lg"
                    >
                      Sell Artwork
                    </Button>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Hero
