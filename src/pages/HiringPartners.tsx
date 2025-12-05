import React from "react";
const HiringPartners = () => {
  const partners = ["TCS", "Infosys", "Wipro", "Accenture", "Capgemini", "Amazon", "Microsoft", "Google", "IBM", "Oracle", "Flipkart", "Zomato", "PayTM", "Ola", "Swiggy"];
  return <>
      <section className="pt-15">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Our <span className="gradient-text">Accreditions</span>
            </h2>
            <p className="text-xl text-muted-foreground"> Backed by </p>
          </div>
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-8">
              {partners.concat(partners).map((partner, index) => {})}
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default HiringPartners;