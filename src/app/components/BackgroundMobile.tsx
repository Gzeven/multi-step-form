import Image from "next/image";
import bgMobileImage from '../assets/images/bg-sidebar-mobile.svg';

export default function BgImgMobile() {
  return <Image 
  alt=""
  src={bgMobileImage}
  quality={100}
  fill
  priority
  sizes="100vw"
  style={{
    objectFit: 'cover',
    zIndex: -1
  }}
  />
}

