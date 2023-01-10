import { Storage } from "aws-amplify"
import Image from "next/image"
import {useState, useEffect} from 'react'


const S3Image = (props: {src: string}) => {
    const [image, setImage] = useState<string>("/noimage.jpg")

    useEffect(()=>{
        const fetchImage = async () => {
            setImage(await Storage.get(props.src));
        }
        fetchImage();
    }, [props.src])

    return (
        <div id="image" data-url={props.src} className="relative w-12 aspect-square"><Image quality={10} unoptimized src={image} alt="Image" fill/></div>
    )
}


export default S3Image
