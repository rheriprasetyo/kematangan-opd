function Question8({ data, setData }) {
  return (
    <>
      <div className="relative overflow-x-auto">
        <h1 class="text-2xl font-bold mb-8">
          VIII. MANAJEMEN RESIKO PELAKSANAAN TUGAS APARATUR
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
                Belum ada manajemen resiko dalam pelaksanaan tugas pada
                perangkat daerah.
              </td>
            </tr>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium">
                II
              </th>
              <td className="px-6 py-4">
                Sudah ada sebagian pegawai yang melakukan analisis resiko dalam
                pelaksanaan tugasnya, namun hanya bersifat individu.
              </td>
            </tr>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium ">
                III
              </th>
              <td className="px-6 py-4">
                Perangkat daerah sudah menetapkan prosedur pengelolaan resiko
                dalam pelaksanaan tugas tertentu yang dipandang mempunyai resiko
                tinggi.
              </td>
            </tr>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium">
                IV
              </th>
              <td className="px-6 py-4">
                Perangkat daerah sudah menetapkan prosedur pengelolaan resiko
                untuk seluruh tugas pada perangkat daerah yang bersangkutan,
                namun belum dilakukan evaluasi secara berkala.
              </td>
            </tr>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium">
                V
              </th>
              <td className="px-6 py-4">
                Perangkat Daerah sudah menetapkan prosedur pengelolaan resiko
                dalam pelaksanaan tugas serta semua resiko dapat dikendalikan
                tanpa ada kerugian baik bagi pegawai maupun instansi.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-start mt-5">
          <form id="form" noValidate>
            <div className="relative z-0 w-full mb-5">
              <select
                name="select"
                value={data.question8}
                onChange={(event) =>
                  setData({ ...data, question8: event.target.value })
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

              {/* <label
              htmlFor="select"
              className="absolute duration-300 top-3 -z-1 origin-0"
            >
              Pilih Perangkat Daerah
            </label> */}
              <span className="text-sm text-red-600 hidden" id="error">
                Option has to be selected
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Question8;
