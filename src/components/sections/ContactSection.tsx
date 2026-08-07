import ContactCard from "@/components/ContactCard";
import SectionWrapper from "@/components/SectionWrapper";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiFileText } from "react-icons/fi";

const ContactSection = () => {
  return (
    <SectionWrapper
      title={{
        header: "Get in touch",
        description:
          "I'm looking for Winter 2027 and Summer 2027 internships in systems and trading infrastructure. Email is the fastest way to reach me.",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="space-y-6 w-full max-w-[500px]">
          <ContactCard
            title="Email"
            icon={<FiMail />}
            href="mailto:liam.galvin@bell.net"
          >
            liam.galvin@bell.net
          </ContactCard>
          <ContactCard
            title="Resume"
            icon={<FiFileText />}
            href="/resume.pdf"
          >
            resume.pdf
          </ContactCard>
          <ContactCard
            title="LinkedIn"
            icon={<FaLinkedin />}
            href="https://www.linkedin.com/in/william-galvin-ba065b207/"
          >
            william-galvin
          </ContactCard>
          <ContactCard
            title="GitHub"
            icon={<FaGithub />}
            href="https://github.com/WilliammGalvin"
          >
            WilliammGalvin
          </ContactCard>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
