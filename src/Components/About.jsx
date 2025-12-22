import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-12">
            <section>
              <h1 className="text-3xl md:text-4xl font-semibold text-blue-400 mb-4">
                About Me
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                I’m Anandhu As. I write, build, and share stories. Writing is
                how typen.io began.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">
                About typen.io
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                typen.io is a simple blog app where I share my personal stories,
                thoughts, and experiences—unfiltered and real. It’s also a space
                for others to write and publish their own blogs. The platform
                isn’t about perfection or polish; it’s about honesty,
                expression, and real voices.
              </p>
              <p className="text-sm text-gray-500 text-center pt-4">
                Handcrafted with ❤️ by{" "}
                <span className="text-blue-400 font-medium">@anandhu as</span>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
