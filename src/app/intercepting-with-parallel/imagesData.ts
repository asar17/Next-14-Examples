import { StaticImageData } from 'next/image'
import one from './img/one.png'
import two from './img/two.png'
import three from './img/three.png'

export type ImgProps={
    id:string;
    name:string;
    src:StaticImageData;
    photographer:string;
}
export const dataImages : ImgProps[] = [
    {
        id:"1",
        name:'image one',
        src:one,
        photographer:"athar"
    },

    {
        id:"2",
        name:'image two',
        src:two,
        photographer:"mohamed"
    },

    {
        id:"3",
        name:'image three',
        src:three,
        photographer:"elhaidary"
    },
]