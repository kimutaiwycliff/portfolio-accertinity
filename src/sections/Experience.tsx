import AnimateInView from '@/components/AnimatedInview';
import { FlipWords } from '@/components/ui/flip-words';
import { Button } from '@/components/ui/moving-border';
import { Timeline } from '@/components/ui/timeline';
import { workExperience } from '@/lib/constants';
import Link from 'next/link';

const Experience = () => {
  const words = [
    'work experience',
    'career journey',
    'professional path',
    'employment background',
  ];

  const data = workExperience.map((item, index) => ({
    title: item.date,
    // spread the rest of the object in content
    content: (
      <div key={index} className="flex flex-col md:flex-col gap-4">
        <div className="w-2/4 md:w-3/6 ">
          <h1 className="text-lg font-bold text-neutral-500 dark:text-neutral-200">
            {'🤖   '}
            {item.title}
          </h1>
        </div>
        <div className="w-3/4 md:w-5/6">
          <p className="text-neutral-400 text-sm italic dark:text-neutral-400">
            {item.description.map((desc, idx) => (
              <span key={idx} className="block">
                {'✅ '}
                {desc}
              </span>
            ))}
          </p>
        </div>
        <div className="p-1 text-md font-semibold w-fit opacity-70">
          {'🏢   '}
          {item.company}
        </div>
      </div>
    ),
  }));
  return (
    <div className="py-20 w-full">
      <h1 className="font-bold text-2xl md:text-4xl text-center">
        My <FlipWords words={words} className="!text-purple-300 " />
      </h1>
      {/* Squiggly underline */}
      <div className="flex justify-center mt-5">
        <svg
          viewBox="0 0 200 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-96 h-5"
        >
          <path
            d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="transparent"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="0"
              y1="0"
              x2="200"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#a78bfa" /> {/* Purple */}
              <stop offset="0.5" stopColor="#f472b6" /> {/* Pink */}
              <stop offset="1" stopColor="#60a5fa" /> {/* Blue */}
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div>
        <Timeline data={data} />
      </div>
      <AnimateInView animation="slideLeft" duration={0.8} delay={0.6}>
        <div>
          <Link
            href="/Resume.pdf"
            download={true}
            className={`flex flex-col items-center justify-center -rotate-6 `}
          >
            <Button borderRadius="0.5rem" className="p-3 font-semibold ">
              <p>📝 Get Full CV</p>
            </Button>
          </Link>
        </div>
      </AnimateInView>
    </div>
  );
};

export default Experience;
