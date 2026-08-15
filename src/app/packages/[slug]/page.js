import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PackageDetailsPage from "@/components/sections/PackageDetailsPage";
import { packageDetails } from "@/data/packageDetails";

export default async function PackagePage({ params }) {
  const { slug } = await params;
  const trip = packageDetails[slug];
  if (!trip) notFound();
  return <><Header /><PackageDetailsPage trip={trip} /><Footer /></>;
}
