import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <img src="/placeholder.svg" alt="Car background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Unlock Your Car's Potential</h1>
          <p className="text-xl mb-8">Expert Chip Tuning and Coding Services</p>
          <Button size="lg" onClick={scrollToContact}>Get Started</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Performance Tuning", "ECU Remapping", "Diagnostic Services"].map((service, index) => (
              <Card key={index} className="transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-center max-w-3xl mx-auto">
            We are a team of passionate automotive experts specializing in car chip tuning and coding. With years of experience and cutting-edge technology, we help car enthusiasts unlock their vehicle's true potential. Our mission is to provide safe, reliable, and performance-enhancing solutions tailored to each client's needs.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <img src="/placeholder.svg" alt={`Client ${index}`} className="w-20 h-20 rounded-full mb-4" />
                    <h3 className="font-semibold mb-2">John Doe</h3>
                    <p className="text-sm text-gray-600">
                      "Incredible service! My car's performance has significantly improved after their tuning. Highly recommended!"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone Number" />
                <Textarea placeholder="Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p>123 Tuning Street, Engine City, 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@cartuning.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
              <p>&copy; 2024 Car Chip Tuning. All rights reserved.</p>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="hover:text-gray-300"><Facebook /></a>
                <a href="#" className="hover:text-gray-300"><Twitter /></a>
                <a href="#" className="hover:text-gray-300"><Instagram /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;