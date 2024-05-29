function ConfirmPage({ data, setData }) {
  return (
    <div className="items-center mt-10">
      <input
        id="link-checkbox"
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        value={(data.agreement = true)}
        onChange={(event) =>
          setData({ ...data, agreement: event.target.checked })
        }
      />
      <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium  ">
        Jawaban dan data dukung sudah sesuai dengan{" "}
        <a
          href="#"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          keadaan yang sebenarnya
        </a>
        .
      </label>
    </div>
  );
}

export default ConfirmPage;
