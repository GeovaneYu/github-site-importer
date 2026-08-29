import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import BioSection from "@/components/sections/BioSection";
import ContentSection from "@/components/sections/ContentSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { personalInfo, experience, education } from "@/data/portfolio-data";

export default function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: `mailto:${personalInfo.email}`,
    telephone: personalInfo.phone,
    url: `https://${personalInfo.website}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location.city,
      addressCountry: personalInfo.location.country,
    },
    alumniOf: education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
    })),
    worksFor: experience.slice(0, 1).map((job) => ({
      "@type": "Organization",
      name: job.company,
    })),
    knowsAbout: personalInfo.skills.split(",").map((s) => s.trim()),
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <BioSection />
      <ContentSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}
