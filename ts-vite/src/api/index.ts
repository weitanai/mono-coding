import http from "./http";
import axios from "axios";
async function uploadFile(url: string, data: any) {
    try {
        const response = await axios.post(
            url,
            data,
            {
                onUploadProgress: function (axiosProgressEvent) {
                    const {total, progress, loaded} = axiosProgressEvent;
                    /*{
                      loaded: number;
                      total?: number;
                      progress?: number; // in range [0..1]
                      bytes: number; // how many bytes have been transferred since the last trigger (delta)
                      estimated?: number; // estimated time in seconds
                      rate?: number; // upload speed in bytes
                      upload: true; // upload sign
                    }*/
                    console.log("total upload", loaded/total, progress, "--------------------");
                },
            }
        );
        return response;
    } catch (err) {
        console.error(err);
    }
}

export { uploadFile };