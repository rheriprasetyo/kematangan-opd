function Wrapper({ children }) {
  return (
    <>
      <div className="min-h-screen p-10 text-start">
        <div className="mx-auto px-6 py-1 bg-white border-0 shadow-lg sm:rounded-3xl">
          {children}
        </div>
      </div>
    </>
  );
}

export default Wrapper;
