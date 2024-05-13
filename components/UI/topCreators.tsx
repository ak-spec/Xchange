import React from 'react'
import {Img, Heading, Text, Button} from "../"

const topCreators = () => {
  return (
    <div className="flex flex-col items-center justify-start">
            <div className="flex flex-col items-center justify-start w-full pl-[25px] pr-[26px] gap-[42px] py-[26px] sm:p-5 border-gray-100 border-l-[0.5px] border-solid bg-white-A700">
              <div className="flex flex-col items-center justify-start w-full mt-3.5 gap-5">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading size="md" as="h6" className="dark:text-white text-black text-lg font-semibold">
                    Featured Creators
                  </Heading>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!text-gray-900_01 tracking-[0.14px] text-right text-sm font-medium"
                    >
                      See All
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-3 p-1.5 bg-white-A700 shadow-md rounded-[15px]">
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        src="../../images/img_rectangle_2043.png"
                        alt="image_two"
                        className="w-full md:h-auto sm:w-full object-cover rounded-[12px]"
                      />
                      <Img
                        src="../../images/img_ellipse_1019.png"
                        alt="circleimage"
                        className="h-[52px] w-[52px] md:h-auto mt-[-26px] rounded-[50%]"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-start w-[94%] md:w-full mb-2 gap-[11px]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-col items-start justify-start w-[56%] gap-1">
                        <div className="flex flex-row justify-start items-center gap-1">
                          <Heading size="xs" as="p" className="tracking-[0.14px] text-center text-sm font-semibold">
                            Murakami Flowers
                          </Heading>
                          <Img src="../../images/img_verify.svg" alt="verify_one" className="h-[18px] w-[18px]" />
                        </div>
                        <Text size="s" as="p" className="tracking-[0.12px] text-center text-xs font-medium">
                          @mftmkkus
                        </Text>
                      </div>
                      <Button
                        color="gray_900_01"
                        size="xs"
                        className="tracking-[0.12px] font-outfit min-w-[64px] rounded-[14px]"
                      >
                        Follow
                      </Button>
                    </div>
                    <div className="h-px w-full bg-gray-100" />
                    <Text size="s" as="p" className="tracking-[0.12px] text-xs font-normal leading-[180%]">
                      Murakami.Flowers is a work in which artist Takashi Murakami’s representative artwork.....
                    </Text>
                  </div>
                </div>
              </div>
              <div className='text-black dark:text-white'>Top Creators</div>

              <div className="flex flex-col items-center justify-start w-full mb-[15px] gap-[18px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading size="md" as="h6" className="text-lg font-semibold text-black dark:text-white">
                    Recent Activity
                  </Heading>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!text-gray-900_01 tracking-[0.14px] text-right text-sm font-medium"
                    >
                      See All
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col w-full gap-[19px] md:gap-[4.75px]">
                  <div className="flex flex-col items-center justify-start w-full pb-[21px] sm:pb-5">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center w-[62%] gap-3.5">
                        <Img
                          src="../../images/img_ellipse_1018_1.png"
                          alt="uzachi4390_one"
                          className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-start w-[68%] gap-1.5">
                          <Heading as="h6" className="tracking-[0.16px] text-base font-semibold">
                            Uzachi #4390
                          </Heading>
                          <Text size="s" as="p" className="tracking-[0.12px] text-xs font-medium">
                            From Ragnarok Meta
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-1.5">
                        <Img src="../../images/img_ethereumclassicetc.svg" alt="215_eth_one" className="h-[16px] w-[16px]" />
                        <Text size="md" as="p" className="!text-black-900 tracking-[0.14px] text-sm font-medium">
                          2.15 ETH
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-start items-center w-[60%] gap-3.5">
                      <Img
                        src="../../images/img_ellipse_1018_2.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-[67%] gap-1">
                        <Heading as="h6" className="tracking-[0.16px] text-base font-semibold">
                          Doodles #3486
                        </Heading>
                        <Text size="s" as="p" className="tracking-[0.12px] text-xs font-medium">
                          From Doodles
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-1.5">
                      <Img src="../../images/img_ethereumclassicetc.svg" alt="ethereum_one" className="h-[16px] w-[16px]" />
                      <Text size="md" as="p" className="!text-black-900 tracking-[0.14px] text-sm font-medium">
                        4.42 ETH
                      </Text>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div className="flex flex-row justify-start items-center w-full gap-5">
                    <div className="flex flex-row justify-start items-center w-[66%] gap-3.5">
                      <Img
                        src="../../images/img_ellipse_1018_3.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-[70%] gap-1">
                        <Heading as="h6" className="tracking-[0.16px] text-base font-semibold">
                          Murakami #2766
                        </Heading>
                        <Text size="s" as="p" className="tracking-[0.12px] text-xs font-medium">
                          From Murakami
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[27%] gap-1.5">
                      <Img src="../../images/img_ethereumclassicetc.svg" alt="ethereum_one" className="h-[16px] w-[16px]" />
                      <Text size="md" as="p" className="!text-black-900 tracking-[0.14px] text-sm font-medium">
                        1.08 ETH
                      </Text>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div className="flex flex-col items-center justify-center w-full py-5">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center w-[59%] gap-3.5">
                        <Img
                          src="../../images/img_ellipse_1018_4.png"
                          alt="circleimage"
                          className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-start w-[66%] gap-1">
                          <Heading as="h6" className="tracking-[0.16px] text-base font-semibold">
                            Doodles #2761
                          </Heading>
                          <Text size="s" as="p" className="tracking-[0.12px] text-xs font-medium">
                            From Murakami
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-1.5">
                        <Img src="../../images/img_ethereumclassicetc.svg" alt="ethereum_one" className="h-[16px] w-[16px]" />
                        <Text size="md" as="p" className="!text-black-900 tracking-[0.14px] text-sm font-medium">
                          4.4 ETH
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div className="flex flex-row justify-start items-center w-full gap-3.5">
                    <div className="flex flex-row justify-start items-center w-[67%] gap-3.5">
                      <Img
                        src="../../images/img_ellipse_1018_5.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-center w-[70%] gap-[3px]">
                        <Heading as="h6" className="mt-px tracking-[0.16px] text-base font-semibold">
                          Peachy Puch#22
                        </Heading>
                        <Text size="s" as="p" className="tracking-[0.12px] text-xs font-medium">
                          From Mindblowonstudio
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[29%] gap-1.5">
                      <Img src="../../images/img_ethereumclassicetc.svg" alt="ethereum_one" className="h-[16px] w-[16px]" />
                      <Text size="md" as="p" className="!text-black-900 tracking-[0.14px] text-sm font-medium">
                        5.62 ETH
                      </Text>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div className="flex flex-col items-center justify-start w-full pt-5">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center w-[61%] gap-3.5">
                        <Img
                          src="../../images/img_ellipse_1018_6.png"
                          alt="circleimage"
                          className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                        />
                        <div className="flex flex-col items-center justify-start w-[67%] pt-0.5 gap-1">
                          <Heading as="h6" className="tracking-[0.16px] text-base font-semibold">
                            Gemmy #3723
                          </Heading>
                          <Text size="s" as="p" className="tracking-[0.12px] text-xs font-medium">
                            From GemmySolana
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-1.5">
                        <Img src="../../images/img_ethereumclassicetc.svg" alt="ethereum_one" className="h-[16px] w-[16px]" />
                        <Text size="md" as="p" className="!text-black-900 tracking-[0.14px] text-sm font-medium">
                          5.32 ETH
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default topCreators
