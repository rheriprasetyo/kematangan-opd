import { useState } from "react";
import { supabase } from "@/supabase";
import Link from "next/link";

export default function Upload({ data, setData }) {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [hidden, setHidden] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // data.evidence1 = `https://pusjaotypxzrwwkvbqwk.supabase.co/storage/v1/object/public/upload-kematangan-opd/${url}`;
  // data.url = url;

  const handleFileUpload = async () => {
    try {
      if (!file) {
        throw new Error("Please select a file to upload.");
      }
      // const { error } = await supabase.storage
      //   .from("upload-kematangan-opd")
      //   .upload(file.name, file);
      else if (file.name.includes(" ")) {
        setError("Nama file tidak boleh menggunakan spasi");
        setTimeout(() => setError(null), 7000);
        // return;
      } else {
        await supabase.storage
          .from("upload-kematangan-opd")
          .upload(file.name, file);
      }

      console.log("File uploaded successfully:", file.name);
      setUrl(file.name);
      setError(null);
      setTimeout(() => setHidden(true), 5000);
    } catch (error) {
      console.error(error);
      setUrl(null);
      setError(error.message);
    }
  };

  return (
    <div className="w-max sm:w-9/12">
      {/* <input id="file-input" type="file" onChange={handleFileChange} /> */}
      <input
        className="p-2 block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="default_size"
        type="file"
        onChange={handleFileChange}
      ></input>
      <button className="h-10 px-5 text-indigo-700" onClick={handleFileUpload}>
        Upload File
      </button>
      {error && <p className="mt-4 font-bold text-red-700">{error}</p>}
      {url && (
        <div className={hidden ? "hidden" : " "}>
          <div
            className="mt-2 px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg"
            role="alert"
          >
            <p>File berhasil diupload.</p>

            <Link
              href={`https://pusjaotypxzrwwkvbqwk.supabase.co/storage/v1/object/public/upload-kematangan-opd/${url}`}
              target="_blank"
            >
              {url}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
