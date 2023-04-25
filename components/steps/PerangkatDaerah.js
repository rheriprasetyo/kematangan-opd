function PerangkatDaerah({ data, setData }) {
  return (
    <>
      <div className="mx-5">
        <label
          htmlFor="perangkatdaerah"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Pilih OPD
        </label>
        <select
          id="perangkatdaerah"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={data.opd}
          onChange={(event) => setData({ ...data, opd: event.target.value })}
        >
          <option selected>Pilih Perangkat Daerah</option>
          <option value={"Sekretariat Daerah"}>Sekretariat Daerah</option>
          <option value={"Sekretariat Dewan"}>Sekretariat Dewan</option>
          <option value={"Inspektorat"}>Inspektorat</option>
          <option value={"Dinas Pendidikan"}>Dinas Pendidikan</option>
        </select>
      </div>
    </>
  );
}

export default PerangkatDaerah;
