import { Footer as FFooter } from "@/components/ui/footer";
// import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { BRAND } from "@/constants/brand";
import { Logo } from "../icons/logo";

export function Footer() {
  return (
    <FFooter
      logo={<Logo className="size-10" />}
      brandName={BRAND.name}
      // socialLinks={[
      //   {
      //     icon: <TwitterLogoIcon className="h-5 w-5" />,
      //     href: "https://twitter.com",
      //     label: "Twitter",
      //   },
      //   {
      //     icon: <GitHubLogoIcon className="h-5 w-5" />,
      //     href: "https://github.com",
      //     label: "GitHub",
      //   },
      // ]}
      mainLinks={[
        // { href: "/products", label: "Products" },
        { href: "/about", label: "About" },
        // { href: "/blog", label: "Blog" },
        // { href: "/contact", label: "Contact" },
      ]}
      legalLinks={[
        { href: "/privacy", label: "Privacy" },
        // { href: "/terms", label: "Terms" },
      ]}
      copyright={{
        text: "© 2025 " + BRAND.name,
        license: "All rights reserved",
      }}
    />
  );
}
