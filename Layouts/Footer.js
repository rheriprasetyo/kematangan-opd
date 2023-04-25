function Footer() {
  return (
    <div className="text-center mt-10">
      {/* footer */}
      <p>
        {/* Copyright */}
        &copy; {new Date().getFullYear()}
        {/* Company */}{" "}
        <a
          href="https://bag-ortal.setda.mataramkota.go.id"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bagian Organisasi
        </a>
      </p>
    </div>
  );
}

export default Footer;
