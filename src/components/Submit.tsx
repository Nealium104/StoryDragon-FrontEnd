export default function Submit() {
  return (
    <form className="flex flex-col bg-background-secondary">
      <div>
        <textarea
          className="w-2/3 text-xl text-black"
          name="post"
          id="post"
        ></textarea>
      </div>
      <button className="w-24 px-4 py-1 transition duration-150 border-2 border-white rounded hover:text-black bg-gray-300/25 hover:bg-gray-100">
        submit
      </button>
    </form>
  );
}
