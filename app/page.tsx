import Image from "next/image";
import DifferenceTabs from "./_components/DifferenceTabs";
import ProductList from "./_components/ProductList";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <ProductList />
      <div className=" w-full flex flex-col md:flex-row justify-around items-center">
        <DifferenceTabs />
        <Image
          src={"/images/industry.gif"}
          alt="abc"
          width={500}
          height={500}
        />
      </div>
      <Contact />
    </main>
  );
}
