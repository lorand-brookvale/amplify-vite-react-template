import React from 'react';
import { uploadData } from 'aws-amplify/storage';

function StorageUpload() {
  const [file, setFile] = React.useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
    setFile(event.target?.files[0]);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
        <button
          onClick={() =>
            {
                if (file) {
                    uploadData({
                        path: `files/${file.name}`,
                        data: file,
                    })
                }
            }
        }
      >
        Upload
      </button>
    </div>
  );
}

export default StorageUpload