import { dataImages , ImgProps} from '../imagesData'
import Image from 'next/image'


export default function ImgDetails  ({params}:{params:{id:string}}) {
    const resImg =dataImages.find((img)=>img?.id === params?.id)
    return(
        <div>
            <Image
              src={resImg?.src}
              alt="parrlImg"
            />
            details
            <p>{resImg?.name}</p>
            <p>{resImg?.photographer}</p>

        </div>

    )
}