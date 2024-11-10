import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
  
  <>
 <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]" >

  <HeroSection/>
  <FeaturedCourses/>
  <WhyChooseUs/>
  <MusicSchoolTestimonials/>
  <Footer/>
 </main>
  
  </>
  );
}