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
              <option value={"Setda"}>Setda</option>
              <option value={"Setwan"}>Setwan</option>
              <option value={"Inspektorat"}>Inspektorat</option>
              <option value={"Dinas Pendidikan"}>Dinas Pendidikan</option>
              <option value={"Dinas Kesehatan"}>Dinas Kesehatan</option>
              <option value={"Dinas PUPR"}>Dinas PUPR</option>
              <option value={"Dinas Perkim"}>Dinas Perkim</option>
              <option value={"DPPPA"}>DPPPA</option>
              <option value={"Dinas LH"}>Dinas LH</option>
              <option value={"Dinas Dukcapil"}>Dinas Dukcapil</option>
              <option value={"Dishub"}>Dishub</option>
              <option value={"Diskominfo"}>Diskominfo</option>
              <option value={"Dinas Perindustrian"}>Dinas Perindustrian</option>
              <option value={"DPMPTSP"}>DPMPTSP</option>
              <option value={"Dinas Ketapang"}>Dinas Ketapang</option>
              <option value={"Dispora"}>Dispora</option>
              <option value={"Dinas Sosial"}>Dinas Sosial</option>
              <option value={"Dinas Tenaga Kerja"}>Dinas Tenaga Kerja</option>
              <option value={"Damkar"}>Damkar</option>
              <option value={"Dinas Pariwisata"}>Dinas Pariwisata</option>
              <option value={"Diarpus"}>Diarpus</option>
              <option value={"Dinas Pertanian"}>Dinas Pertanian</option>
              <option value={"Dinas Perikanan"}>Dinas Perikanan</option>
              <option value={"BAPPEDA"}>BAPPEDA</option>
              <option value={"Balitbang"}>Balitbang</option>
              <option value={"BKD"}>BKD</option>
              <option value={"BKPSDM"}>BKPSDM</option>
              <option value={"BPBD"}>BPBD</option>
              <option value={"Bakesbangpol"}>Bakesbangpol</option>
              <option value={"SatPol PP"}>SatPol PP</option>
              <option value={"RSUD"}>RSUD</option>
              <option value={"Kec Mataram"}>Kecamatan Mataram</option>
              <option value={"Kec Selaparang"}>Kecamatan Selaparang</option>
              <option value={"Kec Cakranegara"}>Kecamatan Cakranegara</option>
              <option value={"Kec Sandubaya"}>Kecamatan Sandubaya</option>
              <option value={"Kec Ampenan"}>Kecamatan Ampenenan</option>
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
