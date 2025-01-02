"use client"

import { IKImage } from 'imagekitio-next';

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({path, w, h, alt, className, tr} : ImageType) => {
  return  (
    <IKImage 
    urlEndpoint={urlEndpoint}
    path={path}
    {...(tr
       ?{transformation: [{ width: `s{w}`, height:`${h}` }]}
       :{width:w, height:h}
    )}
    alt={alt}
    className={className}
   />
  );  

};

export default Image