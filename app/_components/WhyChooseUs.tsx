import { CheckCircle, Package, Settings, Factory, Clock, DollarSign, Users, Leaf } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Uncompromising Quality",
    description:
      "Every product is manufactured under strict quality control, ensuring consistency, durability, and compliance with international standards.",
  },
  {
    icon: Package,
    title: "Wide Product Range",
    description:
      "From Rounded Cut Wire Shots to Shot Blasting Media, we offer a complete range of surface preparation solutions for multiple industries.",
  },
  {
    icon: Settings,
    title: "Customization Options",
    description:
      "Every client has unique requirements. We provide tailored solutions in size, hardness, and material for specific applications.",
  },
  {
    icon: Factory,
    title: "Advanced Infrastructure",
    description:
      "Equipped with modern machinery and skilled professionals, we deliver products that meet the most demanding industrial needs.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "With efficient production and supply chain systems, we ensure on-time delivery — no matter the order size.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Our cost-effective manufacturing process allows us to provide high-quality products at the most reasonable prices.",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    description:
      "We believe in long-term partnerships. Our dedicated support team assists clients from inquiry to after-sales service.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "True to our name Prakriti (Nature), we adopt eco-friendly methods to reduce waste and promote sustainable manufacturing.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-700 text-center mb-14 max-w-3xl mx-auto">
          At <span className="font-semibold">Prakriti Shot Industries</span>, we don’t just
          manufacture products — we deliver trust, reliability, and performance.
          Here’s why businesses across industries choose us as their preferred partner:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
