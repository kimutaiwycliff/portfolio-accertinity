import AnimateInView from "@/components/AnimatedInview";
import MagicButton from "@/components/MagicButton";
import { socialMedia } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
const Footer = () => {

  return (
    <footer className="w-full pt-20" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-4 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1000}
          height={1000}
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
       <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          Ready to take <span className="text-purple-400">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
         <AnimateInView animation="slideRight" duration={0.8} delay={0.7}>
          <Link href="mailto:kimutaiwycliff90@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
         </AnimateInView>

      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-xs  font-light">
         © {new Date().getFullYear()} Wycliff Kimutai
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
