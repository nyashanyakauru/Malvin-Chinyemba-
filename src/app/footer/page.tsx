"use client";
import React, { useRef } from "react";
import { FaAddressCard, FaWhatsapp, FaFacebook, FaInstagram} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import Button from "../button";


const PageHeader = ({
  headerText,
  icon,
}: {
  headerText: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center mb-6 sm:gap-10 sm:mb-12">
    {icon}
    <h2 style={{ fontSize: 28, margin: 5, color:"white"}}>{headerText}</h2>
  </div>
);

const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    alert("Message sent!");
    if (formRef.current) formRef.current.reset();
  };

  return (
    <div className="bg-(--second-theme) md-p-30 py-10 border-1  min-h-screen w-full  md:px-0 " id="contact">
      <PageHeader
        headerText="Get in Touch"
        icon={<FaAddressCard size={40} className="text-(--main-text-color)"/>}
      />

      <div className="flex flex-wrap gap-2 space-between px-5">
        
  <form
  ref={formRef}
  action="https://formspree.io/f/mqabnwrn"
  method="POST"
  onSubmit={handleSendEmail}
  target="_blank"
  className="flex-1-1-[320px] flex-col gap-1"
>
          <h3 className=" m-0 text-(--main-text-color)">Let’s Talk</h3>
          <p className="m-0 text-(--main-text-color) mb-5">
            Have a project or question? Send me a message or connect with me
            directly.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col">
              <input  
                type="text"
                name="name"
                required
                   style={{
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                  marginTop: "0.25rem",

                }}
                className="p-0.5 border-1-solid(--main-text-color) text-lg  mt-0.25 text-(--main-text-color) mt-0.25"
              />

              <label className="mt-0.25 text-(--main-text-color)" >
                Name
              </label>
            </div>
            <div className="flex flex-col">
              <input className="text-(--main-text-color) text-[40px]"
                type="email"
                name="email"
                required
                style={{
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                  marginTop: "0.25rem",

                }}
              
              />
              <label style={{ marginTop: "0.25rem", fontSize: "0.9rem", color: "#D9D9D9" }}>
                Email
              </label>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <textarea className=" text-(--main-text-color) text-[40px]"
                name="message"
                rows={5}
                required
                style={{
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                  marginTop: "0.25rem",
                  
                }}
              />
              <label style={{ marginTop: "0.25rem", fontSize: "0.9rem", color: "#666" }}>
                Message
              </label>
            </div>
          </div>
           <Button
                            bgcolor="bg-(--forth-theme-color)"
                            textcolor="text-(--text-color-gold)"
                            label="Send Message "
                        />       
                        
                        
</form>
<div 
          style={{
            flex: "1 1 240px",
            background: "#2C3457",
            borderRadius: "1rem",
            padding: "5rem",
            marginTop: 16,
            marginLeft:10,
          }}
        >
          <h4 className=" text-xl font-bold text-(--second-theme-color)">Contact Info</h4>
          <ul className="text-(--text-color-gold)" style={{ listStyle: "none", padding: 0, margin: "1rem 0 0 0" }}>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <MdEmail  size={30}    className="text-white" /> chinyembamalvin9@gmail.com
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
                
              }}
            >
              <MdPhone size={30} className="text-white"  /> +263 77 658 3679
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
                
              }}
            >
              <a
                href="https://wa.me/263776583679"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#374151", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaWhatsapp size={30} className="text-white"   /><p className="text-(--text-color-gold)">WhatsApp</p>
              </a>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <a
                href="https://www.instagram.com/malvinchinyemba11?igsh=YzljYTk1ODg3Zg== "
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#374151", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaFacebook size={30}  className="text-white"/> <p className="text-(--text-color-gold)">LinkedIn</p>
              </a>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <a
                href="https://www.facebook.com/share/1AtNwtezWE/ "
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#374151", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaInstagram size={30}  className="text-white" /> <p className="text-(--text-color-gold)"> Instagram</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
