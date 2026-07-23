import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const contactDetails = [
  {
    title: "Visit us",
    description: siteConfig.address,
    value: "View on Google Maps",
    href: siteConfig.mapUrl,
    Icon: MapPin,
    external: true,
  },
  {
    title: "Phone",
    description: "Speak with our travel team",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    Icon: Phone,
  },
  {
    title: "Email",
    description: "Send us your travel plans",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
  },
];
