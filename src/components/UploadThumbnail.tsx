import ImageKit from "imagekit-javascript";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import React, { MouseEvent, MouseEventHandler } from "react";
import MyImage from "./MyImage";

type Props = {
    file: UploadResponse;
    onClick?: () => void;
}

export default function UploadThumbnail({file,onClick}:Props) {
    const ik = new ImageKit({
        urlEndpoint: process.env.NEXT_PUBLIC_IK_ENDPOINT as string
    });
    ik.url({
        path: file.url,
        transformation: [
            {w: '200'},
            {h: '200'},
        ],
    });
    function handleClick(ev:React.MouseEvent) {
        if (onClick) {
            ev.preventDefault();
            return onClick();
        }
        location.href = file.url;
    }
    if (file.fileType === 'image') {
        return (
            <a onClick={ev => handleClick(ev)} target="_blank">
                <MyImage 
                width={300}
                height={300}
                alt={'product thumbnail'} 
                aiCrop={true}
                src={file.filePath}/>
            </a>
        );
    }
    return(
        <div>{file.url} &raqup;</div>
    );
}