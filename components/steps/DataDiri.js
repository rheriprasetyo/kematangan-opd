function DataDiri({ data, setData }) {
  return (
    <>
      {/* new form */}
      <div className="text-start w-80">
        <form id="form" noValidate>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={data.name}
              onChange={(event) =>
                setData({ ...data, name: event.target.value })
              }
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="name"
              className="absolute duration-300 top-3 -z-1 origin-0 "
            >
              Isi nama Anda
            </label>

            <span className="text-sm text-red-600 hidden" id="error">
              Name is required
            </span>
          </div>
          <div className="relative z-0 w-full mb-5">
            <input
              type="tel"
              name="telephone"
              placeholder=" "
              value={data.phone}
              onChange={(event) =>
                setData({ ...data, phone: event.target.value })
              }
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="telephone"
              className="absolute duration-300 top-3 -z-1 origin-0 "
            >
              Isi nomor telephone
            </label>
            <span className="text-sm text-red-600 hidden" id="error">
              Phone number is required
            </span>
          </div>

          <div className="relative z-0 w-full mb-5">
            <select
              name="select"
              value={data.opd}
              onChange={(event) =>
                setData({ ...data, opd: event.target.value })
              }
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            >
              <option value="" selected disabled hidden></option>
              <option value={"Setda"}>Sekretariat Daerah</option>
              <option value={"Setwan"}>Sekretariat Dewan</option>
              <option value={"Inspektorat"}>Inspektorat</option>
              <option value={"Dinas Pendidikan"}>Dinas Pendidikan</option>
              <option value={"Dinas Kesehatan"}>Dinas Kesehatan</option>
              <option value={"Dinas PUPR"}>
                Dinas Pekerjaan Umum dan Perumahan Rakyat
              </option>
              <option value={"Dinas Perkim"}>
                Dinas Perumahan dan Kawasan Permukiman
              </option>
              <option value={"DPPPA"}>
                Dinas Pemberdayaan Perempuan dan Perlindungan Anak
              </option>
              <option value={"Dinas LH"}>Dinas Lingkungan Hidup</option>
              <option value={"Dinas Dukcapil"}>
                Dinas Kependudukan dan Catatan Sipil
              </option>
              <option value={"Dishub"}>Dinas Perhubungan</option>
              <option value={"Diskominfo"}>
                Dinas Komunikasi dan Informatika
              </option>
              <option value={"Dinas Perindustrian"}>
                Dinas Perindustrian, Koperasi Usaha Kecil dan Menengah
              </option>
              <option value={"Dinas Perdagangan"}>Dinas Perdagangan</option>
              <option value={"DPMPTSP"}>
                Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
              </option>
              <option value={"Dinas Ketapang"}>Dinas Ketahanan Pangan</option>
              <option value={"Dispora"}>Dinas Kepemudaan dan Olah Raga</option>
              <option value={"Dinas Sosial"}>Dinas Sosial</option>
              <option value={"Dinas Tenaga Kerja"}>Dinas Tenaga Kerja</option>
              <option value={"Damkar"}>Dinas Pemadam Kebakaran</option>
              <option value={"Dinas Pariwisata"}>Dinas Pariwisata</option>
              <option value={"Diarpus"}>
                Dinas Kearsipan dan Perpustakaan
              </option>
              <option value={"Dinas Pertanian"}>Dinas Pertanian</option>
              <option value={"Dinas Perikanan"}>Dinas Perikanan</option>
              <option value={"DP2KB"}>
                Dinas Pengendalian Penduduk dan Keluarga Berencana
              </option>
              <option value={"BAPPEDA"}>
                Badan Perencanaan Pembangunan Daerah
              </option>
              <option value={"Balitbang"}>
                Badan Penelitian dan Pengembangan
              </option>
              <option value={"BKD"}>Badan Keuangan Daerah</option>
              <option value={"BKPSDM"}>
                Badan Kepegawaian dan Pengembangan SDM
              </option>
              <option value={"BPBD"}>
                Badan Penanggulangan Bencana Daerah
              </option>
              <option value={"Bakesbangpol"}>
                Badan Kesatuan Bangsa dan Politik Dalam Negeri
              </option>
              <option value={"SatPol PP"}>Satuan Polisi Pamong Praja</option>
              <option value={"RSUD"}>Rumah Sakit Uumum Daerah</option>
              <option value={"Kec Mataram"}>Kecamatan Mataram</option>
              <option value={"Kec Selaparang"}>Kecamatan Selaparang</option>
              <option value={"Kec Cakranegara"}>Kecamatan Cakranegara</option>
              <option value={"Kec Sandubaya"}>Kecamatan Sandubaya</option>
              <option value={"Kec Ampenan"}>Kecamatan Ampenan</option>
              <option value={"Kec Sekarbela"}>Kecamatan Sekarbela</option>
            </select>

            <label
              htmlFor="select"
              className="absolute duration-300 top-3 -z-1 origin-0"
            >
              Pilih Perangkat Daerah
            </label>
            <span className="text-sm text-red-600 hidden" id="error">
              Option has to be selected
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default DataDiri;
