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
      description: "Keep all your important PDF files securely stored and easily accessible anytime, anywhere"
   }
]

export default function Home() {
  return (
     <div>
        <h1>Welcome</h1>
     </div>
  );
}
