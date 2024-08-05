import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Welcome to PA GUINAAR, where our journey begins with a deep passion for responsible farming and delivering top-quality chicken. From our humble beginnings, our commitment to excellence has been evident at every stage, from nurturing rearing to our customers' tables. At PA GUINAAR, every piece of chicken embodies our story of passion and dedication to quality.
          </p>
          <p>As a dedicated farming family, we're more than just a chicken retailing business. We take pride in our experience and expertise in the agricultural industry, as well as our commitment to animal welfare and environmental sustainability. At PA GUINAAR, our history and passion converge to provide our customers with an exceptional culinary experience with every meal.</p>
          <p>At PA GUINAAR, our commitment to quality and customer satisfaction is our utmost priority. Every piece of chicken we offer is raised with care, adhering to the strictest standards of freshness, flavor, and food safety. Discover our story, our passion, and our commitment to excellence at PA GUINAAR, where every bite tells a tale of dedication and finesse.</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+221775944088">
            +221 77 594 40 88
          </a>
        </div>
      </section>
    </>
  )
}
