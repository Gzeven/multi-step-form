import Image from "next/image";
import bgDesktopImage from '../assets/images/bg-sidebar-desktop.svg';

export default function BgImgDesktop() {
  return <Image 
    src={bgDesktopImage}
    fill
    alt=""
    sizes="100vw"
    priority
    style={{
      objectFit: 'cover',
    
    }}
  />
}