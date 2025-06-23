import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/lib/constants';
import Clients from '@/sections/Clients';
import Experience from '@/sections/Experience';
import Footer from '@/sections/Footer';
import Grid from '@/sections/Grid';
import Hero from '@/sections/Hero';
import RecentProjects from '@/sections/RecentProjects';

const HomePage = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};
export default HomePage;
