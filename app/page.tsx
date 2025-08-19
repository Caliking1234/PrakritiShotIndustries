import Image from "next/image";
import DifferenceTabs from "./_components/DifferenceTabs";
import ProductList from "./_components/ProductList";
import Contact from "./_components/Contact";
import WhoWeAre from "./_components/WhoWeAre";
import WhyChooseUs from "./_components/WhyChooseUs";


export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <section id="who-we-are" className="w-full">
        <WhoWeAre />
      </section>
      <section id="why-choose-us" className="w-full">
        <WhyChooseUs />
      </section>
      <section id="products" className="w-full">
        <ProductList />
      </section>

      <section
        id="difference"
        className="w-full flex flex-col md:flex-row justify-around items-center"
      >
        <DifferenceTabs />
        <Image
          src={"/images/industry.gif"}
          alt="industry"
          width={500}
          height={500}
        />
      </section>

      <section id="contact" className="w-full">
        <Contact />
      </section>
    </main>
  );
}
