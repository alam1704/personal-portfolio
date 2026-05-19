export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center space-y-6">
          <h3 className="text-2xl font-semibold">
            Passionate Full-Stack Developer & Registered Pharmacist
          </h3>
          <p className="text-muted-foreground">
            With over 5 years of experience in software development, I
            specialise in .NET technologies and have a strong understanding of
            React technologies.
          </p>
          <p className="text-muted-foreground">
            I have a background in pharmacy, which has given me a unique
            perspective on problem-solving and attention to detail. My goal is
            to build seamless user experiences that make a positive impact on
            people's lives.
          </p>

          <div className="flex flex-col sm:flow-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              {" "}
              Get In Touch
            </a>
            <a className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
