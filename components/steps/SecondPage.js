function SecondPage({ data, setData }) {
  return (
    <div className="text-center mt-5">
      <input
        className="input-style-base text-black p-2 border border-slate-300"
        placeholder="Isi alamat Anda"
        type="text"
        value={data.address}
        onChange={(event) => setData({ ...data, address: event.target.value })}
      />
    </div>
  );
}

export default SecondPage;
