import { motion } from "framer-motion";
import bgImage from "@/assets/bg-peaceful.jpg";
import bradImage from "@/assets/brad-browning.png";

const brandEase = [0.2, 0, 0, 1] as const;

const Index = () => {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 scale-105 bg-cover bg-center opacity-40 blur-xl"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-background/80 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full px-6 text-center py-[20vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: brandEase }}
        >
          <h1 className="text-4xl md:text-6xl text-foreground mb-8 tracking-tight text-balance font-normal">
            The Ex Factor Guide{" "}
            <span className="block italic text-3xl md:text-4xl opacity-70 mt-2">
              — Women's Portal
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: brandEase }}
          className="text-lg md:text-xl text-muted-foreground mb-12 leading-[1.7] max-w-[540px] mx-auto text-pretty"
        >
          Welcome. Access Brad Browning's specific digital program designed for
          women regarding relationship dynamics and communication.
        </motion.p>

        {/* Frame button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: brandEase }}
          className="flex justify-center mb-12"
        >
          <div className="px-6 py-2 border border-foreground/10 rounded-full text-xs uppercase tracking-[0.15em] text-foreground/40 font-semibold">
            Secure Access Point
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: brandEase }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98, y: 2 }}
            className="inline-block bg-primary text-primary-foreground font-semibold uppercase tracking-[0.08em] text-sm px-10 py-5 rounded-full transition-shadow duration-300"
            style={{
              boxShadow: "var(--shadow-cta)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "var(--shadow-cta-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "var(--shadow-cta)")
            }
          >
            Access the Women's Presentation Here
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 left-0 w-full px-6 text-center z-10">
        <p className="text-[10px] md:text-xs text-foreground/30 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide">
          This site is not a part of the Google website or Google Inc.
          Additionally, this site is NOT endorsed by Google in any way. Google is
          a trademark of Google LLC.{" "}
          <span className="mx-2">|</span>{" "}
          <a href="#" className="underline hover:text-foreground/50 transition-colors">
            Privacy Policy
          </a>{" "}
          <span className="mx-2">|</span>{" "}
          <a href="#" className="underline hover:text-foreground/50 transition-colors">
            Terms of Use
          </a>
        </p>
      </footer>
    </section>
  );
};

export default Index;
