import React from "react";
import videoLogo from "../assets/video-posting.png";
import { Button, Card } from "flowbite-react";

function VideoUpload() {
  return (
    <div classNameName="text-white">
      <Card>
        <h1>
          Upload Videos
        </h1>
        <div>
        <form className="flex items-center space-x-6">
        <div className="shrink-0">
          <img
            className="h-16 w-16 object-cover"
            src={videoLogo}
            alt="Current profile photo"
          />
        </div>
        <label className="block">
          {/* <span className="sr-only"></span> */}
          <input
            type="file"
            className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
          />
          
        </label>
        
        
      </form>
        </div>
        <div className="flex justify-center">
        <Button>Upload</Button>
        </div>
      </Card>
    </div>
  );
}

export default VideoUpload;
