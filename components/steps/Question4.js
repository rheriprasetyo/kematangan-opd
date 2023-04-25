function Question4({ data, setData }) {
  return (
    <>
      <div className="relative overflow-x-auto">
        <h1 class="text-2xl font-bold mb-8">
          IV. STANDAR OPERASIONAL PROSEDUR (SOP) PELAYANAN PERANGKAT DAERAH
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
                Tidak ada definisi resmi proses pelaksanaan pekerjaan pada
                perangkat daerah.
              </td>
            </tr>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium">
                II
              </th>
              <td className="px-6 py-4">
                Definisi proses organisasi sudah dituangkan dalam standar
                operasi prosedur (SOP).
              </td>
            </tr>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium ">
                III
              </th>
              <td className="px-6 py-4">
                Definisi proses organisasi sudah dituangkan ke dalam SOP dan
                telah dilakukan evaluasi berkala terhadap penerapan SOP.
              </td>
            </tr>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium">
                IV
              </th>
              <td className="px-6 py-4">
                Definisi proses organisasi sudah dituangkan dalam SOP, sudah
                dievaluasi secara berkala dan dilakukan tindak lanjut terhadap
                hasil evaluasi penerapan SOP berupa tindakan koreksi atau
                perbaikan SOP.
              </td>
            </tr>
            <tr className="border-b-2">
              <th scope="row" className="px-6 py-4 font-medium">
                V
              </th>
              <td className="px-6 py-4">
                Definisi proses organisasi sudah dituangkan dalam SOP dan sudah
                dilakukan evaluasi serta tindak lanjut, kemudian disesuaikan
                dengan kebutuhan/keluhan pelanggan serta didukung oleh teknologi
                berbasis internet.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-start mt-5">
          <form id="form" noValidate>
            <div className="relative z-0 w-full mb-5">
              <select
                name="select"
                value={data.question4}
                onChange={(event) =>
                  setData({ ...data, question4: event.target.value })
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

export default Question4;