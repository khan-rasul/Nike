import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import PopularProducts from "@/components/sections/PopularProducts";
import SuperQuality from "@/components/sections/SuperQuality";
import Services from "@/components/sections/Services";
import SpecialOffer from "@/components/sections/SpecialOffer";
import CustomerReviews from "@/components/sections/CustomerReviews";
import Subscribe from "@/components/sections/Subscribe";
import Footer from "@/components/sections/Footer";

const Home = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x py-16 sm:py-32 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
