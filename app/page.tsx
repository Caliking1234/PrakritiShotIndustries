import DifferenceTabs from "./_components/DifferenceTabs";
import ProductList from "./_components/ProductList";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <ProductList />
      <DifferenceTabs />
    </main>
  );
}
