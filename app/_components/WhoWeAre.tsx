import React from "react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="w-full py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who <span className="text-blue-600">We Are</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            At <span className="font-semibold text-gray-900">Prakriti Shot Industries</span>, we
            take pride in being a trusted manufacturer and supplier of{" "}
            <span className="text-blue-600 font-medium">high-quality surface preparation materials</span>.
            With a strong focus on{" "}
            <span className="font-semibold">innovation, precision, and customer satisfaction</span>, 
            we specialize in producing Rounded Cut Wire Shots, Mild Steel Cut Wire Shots, Stainless
            Steel Cut Wire Shots, Steel Grits for Cleaning, Shot Blasting Media, and more.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Backed by advanced manufacturing facilities and a team of{" "}
            <span className="font-semibold">skilled professionals</span>, we
            ensure every product meets international quality standards. Our
            solutions are widely used in{" "}
            <span className="text-blue-600 font-medium">automotive, aerospace, foundries, construction,
            shipbuilding,</span> and heavy engineering industries for cleaning,
            surface finishing, and shot peening applications.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe in building{" "}
            <span className="font-semibold">long-term relationships</span> with
            our clients by delivering{" "}
            <span className="text-blue-600 font-medium">consistent quality, timely supply,</span> and{" "}
            <span className="text-blue-600 font-medium">competitive pricing</span>. 
            At Prakriti Shot Industries, our commitment is not just to supply products, 
            but to provide <span className="font-semibold">solutions that enhance performance,
            durability, and efficiency</span>.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/ps.png"
            alt=""
            width={550}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
