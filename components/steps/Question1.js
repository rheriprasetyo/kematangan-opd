import { useState } from "react";
import { supabase } from "@/supabase";
import Link from "next/link";

function Question1({ data, setData }) {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [hidden, setHidden] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  url === null
    ? (data.evidence1 = "-")
    : (data.evidence1 = `https://pusjaotypxzrwwkvbqwk.supabase.co/storage/v1/object/public/upload-kematangan-opd/${url}`);
  data.url = url;

  const handleFileUpload = async () => {
    try {
      if (!file) {
        throw new Error("Please select a file to upload.");
      } else if (file.name.includes(" ")) {
        setError("Nama file tidak boleh menggunakan spasi");
        setTimeout(() => setError(null), 5000);
        return;
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
    <>
      <div className="sm:w-9/12  relative overflow-x-auto">
        <h1 className="text-2xl font-bold mb-8">
          I. PERENCANAAN PEMBANGUNAN DAERAH
        </h1>
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tingkat
              </th>
              <th scope="col" className="px-6 py-3">
                Indikator
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium ">
                I
              </th>
              <td className="px-6 py-4">
                Penentuan kegiatan yang diprioritaskan dalam dokumen perencanaan
                tahunan (Renja/RKPD) dilakukan tanpa ada kriteria yang terukur.
              </td>
            </tr>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium">
                II
              </th>
              <td className="px-6 py-4">
                Penentuan kegiatan yang diprioritaskan dalam dokumen rencana
                tahunan dilakukan berdasarkan analisis terhadap hasil (outcome)
                apa yang akan dicapai kegiatan tersebut.
              </td>
            </tr>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium ">
                III
              </th>
              <td className="px-6 py-4">
                Penentuan prioritas kegiatan dalam dokumen rencana tahunan
                dilakukan berdasarkan analisis hasil (outcome) dan analisis
                kemampuan kegiatan menghasilkan hasil (outcome).
              </td>
            </tr>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium">
                IV
              </th>
              <td className="px-6 py-4">
                Penentuan prioritas kegiatan dilakukan berdasarkan analisis yang
                membandingkan hasil (outcome) yang akan dicapai antara satu
                alternatif kegiatan dengan alternatif kegiatan yang lain.
              </td>
            </tr>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium">
                V
              </th>
              <td className="px-6 py-4">
                Penentuan prioritas kegiatan dalam dokumen tahunan dilakukan
                dengan perbandingan hasil (outcome) antara satu alternatif
                kegiatan dengan alternatif kegiatan yang lain dan dibantu dengan
                teknologi informasi.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-start mt-5">
          <form id="form" noValidate>
            <div className="relative z-0 w-full mb-5">
              <select
                name="select"
                value={data.question1}
                onChange={(event) =>
                  setData({ ...data, question1: event.target.value })
                }
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              >
                <option value="" selected disabled hidden>
                  Pilih Jawaban
                </option>
                <option value={1}>Tingkat I</option>
                <option value={2}>Tingkat II</option>
                <option value={3}>Tingkat III</option>
                <option value={4}>Tingkat IV</option>
                <option value={5}>Tingkat V</option>
              </select>

              <span className="text-sm text-red-600 hidden" id="error">
                Option has to be selected
              </span>
            </div>
          </form>
        </div>
      </div>

      <div className="w-max sm:w-9/12">
        {/* <input id="file-input" type="file" onChange={handleFileChange} /> */}
        <p className="text-left">
          * Silahkan upload bukti dukung sesuai pilihan jawaban
        </p>
        <p className="text-left">* Nama file tidak boleh menggunakan spasi</p>
        <input
          className="mt-2 p-2 block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="default_size"
          type="file"
          onChange={handleFileChange}
        ></input>
        <button
          className="h-10 px-5 text-indigo-700"
          onClick={handleFileUpload}
        >
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
    </>
  );
}

export default Question1;
