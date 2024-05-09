import { dataImages } from './imagesData'
import Image from 'next/image'
import './styles.css'
import Link from 'next/link'
export default function InterWithPar (){
    return(
        <div>
            <h1>
                Intercepting with Parallel Routes
            </h1>
            <div className="grid grid-cols-3">
                {dataImages.map((img)=>(
                    <div key={img?.id}>
                        <Link href={`/intercepting-with-parallel/${img?.id}`}>
                          <Image src={img?.src} alt="paralleImg"/>
                        </Link>
                        <p>{img?.id}</p>
                        <p>{img?.name}</p>
                        <p>{img?.photographer}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}