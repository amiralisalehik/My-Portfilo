import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Send,
  MessageCircle,
} from "lucide-react";

import {cn} from "@/lib/utils"
import {useToast} from "@/hooks/use-toast"
import { useState } from "react";

export const ContactSection = () => {

  const {toast} = useToast();
  const [isSubmitting , setIsSubmitting] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(()=>{
      toast({
        title: "Message DID NOT sent!",
        description: "Please reach out to me via social media.",
      })
      setIsSubmitting(false);
    }, 2000)
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4  text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-6 justify-center ">
              <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary " />
                </div>

                <div className="flex flex-col items-start w-full">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:amiralisalehik@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    amiralisalehik@gmail.com
                  </a>
                </div>
              </div>

              {/*  */}

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary " />
                </div>

                <div className="flex flex-col items-start w-full">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+989120387219"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+98) 9120387219
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Send className="h-6 w-6 text-primary" />
                </div>

                <div className="flex flex-col items-start w-full">
                  <h4 className="font-medium">Telegram</h4>
                  <a
                    href="https://t.me/amirali_salehik" target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @amirali_salehik
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Contact with me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://ir.linkedin.com/in/amirali-salehi-a724b824a"
                  target="_blank"
                >
                  <Linkedin></Linkedin>
                </a>
                <a href="https://x.com/AmirAli_Salehik" target="_blank">
                  <Twitter></Twitter>
                </a>

                <a href="https://wa.me/989120387219" target="_blank">
                  <MessageCircle className="w-8 h-8" />
                </a>

                <a href="https://t.me/amirali_salehik" target="_blank">
                  <Send className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>

          <div onSubmit={handleSubmit} 
          className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2"> Name</label>
                <input type="text" id="name" name="name" required 
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden"
                placeholder="Enter your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" required 
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden"
                placeholder="user@domain.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" required 
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden resize-none"
                placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button   type="submit" 
               className={cn("cosmic-button w-full flex items-center justify-center gap-2 ")} >
                { (isSubmitting) ? "Loading ..." : "Send Message" }
                <Send></Send>
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
