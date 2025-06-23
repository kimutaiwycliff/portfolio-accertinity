import AnimateInView from '@/components/AnimatedInview';
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
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <AnimateInView animation="fadeIn" duration={0.8}>
          <Hero />
        </AnimateInView>

        <AnimateInView animation="slideUp" duration={0.8} delay={0.2}>
          <Grid />
        </AnimateInView>

        <AnimateInView animation="slideLeft" duration={0.8} threshold={0.2}>
          <RecentProjects />
        </AnimateInView>

        <AnimateInView animation="scaleUp" duration={0.6}>
          <Clients />
        </AnimateInView>

        <AnimateInView animation="slideRight" duration={0.8} delay={0.1}>
          <Experience />
        </AnimateInView>

        <AnimateInView animation="fadeIn" duration={1}>
          <Footer />
        </AnimateInView>
      </div>
    </main>
  );
};
export default HomePage;
