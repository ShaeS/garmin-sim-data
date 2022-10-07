function FileUploader({ label, setter }) {
  const handleChange = (e, setter) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setter(JSON.parse(e.target.result));
    };
  };

  return (
    <div className="overflow-hidden rounded-lg bg-white px-6 py-2 shadow">
      <label
        htmlFor="formFileMultiple"
        className="truncate text-sm font-medium text-gray-500"
      >
        {label}
      </label>
      <input
        className="w-full py-2 text-gray-700"
        type="file"
        onChange={(e) => handleChange(e, setter)}
      />
    </div>
  );
}

export default FileUploader;
