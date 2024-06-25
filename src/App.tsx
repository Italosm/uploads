import axios from "axios";
import { FormEvent, useState } from "react";

function App() {
  const [files, setFiles] = useState<FileList | null>(null);

  function handleUploadFile(e: FormEvent) {
    e.preventDefault();
    if (!files || files.length === 0) return;
    const file = files[0];

    axios
      .put("", file, {
        headers: {
          "Content-Type": file.type,
        },
      })
      .then(() => {
        console.log("File uploaded");
      })
      .catch((error) => {
        console.error("Error uploading file", error);
      });
  }

  return (
    <form onSubmit={handleUploadFile}>
      <input
        type="file"
        name="file"
        onChange={(e) => setFiles(e.target.files)}
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default App;
