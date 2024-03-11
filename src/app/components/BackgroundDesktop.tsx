import Image from "next/image";
import bgDesktopImage from '../../../public/static/images/bg-sidebar-desktop.svg';


// export default function BgImgDesktop() {
//   return <Image 
//     src={bgDesktopImage}
//     fill
//     alt=""
//     priority
//     sizes="100vw"
//     style={{
//       objectFit: 'cover'

    
//     }}
//   />
// }


export default function BgImgDesktop() {
  return <Image 
  alt=""
  src={bgDesktopImage}
  fill
  priority
  sizes="100vw"
  style={{
    objectFit: 'cover',
  
  }}
  />
}



