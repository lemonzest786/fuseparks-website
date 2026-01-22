import { Container } from "@/components";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      "Brand Strategy",
      "Digital Design",
      "Web Development",
      "Marketing",
    ],
    Company: ["About", "Work", "Careers", "Contact"],
    Social: ["Twitter", "LinkedIn", "Instagram", "Dribbble"],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container className="px-4 sm:px-6">
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {/* Brand */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Fuseparks
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We design brands that spark growth and create digital
                experiences that matter.
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                  {category}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Fuseparks. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-xs sm:text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-xs sm:text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
