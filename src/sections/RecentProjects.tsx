'use client';

import { FaLocationArrow } from 'react-icons/fa6';
import { PinContainer } from '@/components/ui/Pin';
import { projects } from '@/lib/constants';
import Image from 'next/image';
import ColourfulText from '@/components/ui/colourful-text';
import Link from 'next/link';

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="font-bold text-2xl md:text-4xl text-center">
        A small selection of <ColourfulText text="recent projects" />
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:mx-30 md:mx-0 items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <Link
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
            href={item.link}
          >
            <PinContainer
              title={item.link}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: '#13162D' }}
                >
                  <Image src="/bg.png" alt="bgimg" width={100} height={100} />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  width={1000}
                  height={1000}
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        className="p-2"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-xs text-sm text-purple italic">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
