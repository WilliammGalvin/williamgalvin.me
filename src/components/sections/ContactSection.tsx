import ContactCard from "@/components/ContactCard";
import SectionWrapper from "@/components/SectionWrapper";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactSection = () => {
  return (
    <SectionWrapper
      title={{
        header: "Get in touch",
        description:
          "Below is my Email if you wish to get in contact with me. My GitHub hosts all the code to my projects (including this website).",
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
