import React, { useState } from "react";
import S3 from "aws-sdk/clients/s3";

export function Upload() {
  const [fileObj, setFileObj] = useState(null);

  // declare s3 instance
  const s3 = new S3({
    apiVersion: "2006-03-01",
    region: process.env.REACT_APP_AWS_S3_REGION,
    credentials: {
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    }
  });

  const uploadFile = file => {
    const fileName = file.name;

    const uploadParams = {
      Body: file,
      Bucket: process.env.REACT_APP_AWS_S3_BUCKET,
      Key: fileName,
      ACL: "public-read"
    };

    s3.upload(uploadParams, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        return data;
      }
    });

    return null;
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    uploadFile(fileObj);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="file"
        id="filePicker"
        accept=".mp3"
        onChange={e => {
          setFileObj(e.target.files[0]);
        }}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
