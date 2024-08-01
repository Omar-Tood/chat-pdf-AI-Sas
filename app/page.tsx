import Image from "next/image";
import{
 BrainCogIcon,
 EyeIcon,
 GlobeIcon,
 MonitorCogIcon,
 ServerCogIcon,
 ZapIcon 
}from "lucide-react"

const features = [
   {
      name: "Store your PDF Documents",
      description: "Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
      icon: GlobeIcon
   },
   {
      name: "Blazing Fast response",
      description: "Experience lighting-fast answers to your, queries, ensuring you get the information you need instantly",
      icon: ZapIcon
   },
   {
      name: "Chat Memorization",
      description: "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience",
      icon: BrainCogIcon
   },
   {
      name: "Interactive PDF Viewer",
      description: "Engage with your PDFs like never before using our intuitive and interactive viewer",
      icon: EyeIcon
   },
   {
      name: "Cloud Backup",
      description: "Rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage",
      icon: ServerCogIcon
   },
   {
      name: "Responsive Across Devices",
      description: "Access and chat with your PDFs seamlessly on any device, wether it's your desktop, tablet, or smartphone",
      icon: MonitorCogIcon
   },
]

export default function Home() {
  return (
     <main className="bg-gradient-to-bl from-white to-indigo-600">
       <div>
         <div>
           hello
         </div>
       </div>
     </main>
  );
}
