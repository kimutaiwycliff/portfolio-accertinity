import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/lib/constants';
import Hero from '@/sections/Hero';

const HomePage = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
};
export default HomePage;
