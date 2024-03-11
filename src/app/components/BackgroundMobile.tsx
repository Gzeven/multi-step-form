import Image from "next/image";
import bgMobileImage from '../../../public/static/images/bg-sidebar-mobile.svg';

export default function BgImgMobile() {
  return <Image 
  alt=""
  src={bgMobileImage}
  fill
  priority
  sizes="100vw"
  style={{
    objectFit: 'cover',
    zIndex: -1
  }}
  />
}

// export default function BgImgMobile() {
//   return <Image 
//   src={bgMobileImage}
//     alt="Picture of the author"
    
//   />
// }

