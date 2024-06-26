import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { useState } from "react";
import { Landing } from "../components/landing";
import { Services } from "../components/services";
import { Footer } from "../components/footer";
import { Testimonials } from "../components/testimonials";
import { Customers } from "../components/customers";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";
import { Pricing } from "../components/pricing";
import { Cookie } from "../components/cookie";

const IndexPage: React.FC<PageProps> = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  function contactUs(): void {
    console.log("contact us");
    setIsContactFormOpen(true);
  }

  return (
    <>
      <main>
        <Landing />
        <Services />
        <Contact />
        <Footer />
      </main>
      <script
        src="//code.tidio.co/hcyxoxvjdiquuqu7t6vsrg6pydi9cqtr.js"
        async
      ></script>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    keywords,
  } = useSiteMetadata();

  return (
    <>
      <title>Mindly: {defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={keywords} />
    </>
  );
};
