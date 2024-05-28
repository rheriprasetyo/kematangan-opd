import Image from "next/image";
function WelcomePage() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/Lambang_Kota_Mataram.png"
        width={60}
        height={60}
        alt="Picture of the author"
      />
      <h1>Evaluasi Kematangan Perangkat Daerah</h1>
      <h1>Kota Mataram</h1>
    </div>
  );
}

export default WelcomePage;
