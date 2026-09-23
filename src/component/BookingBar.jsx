const BookingBar = () => {
  return (
    <div className="relative z-10 w-11/12 h-fit p-5 -mt-6 mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-md md:w-full md:p-6 md:-mt-16">
      <form className="flex flex-col gap-4 md:flex-row md:items-end md:gap-5">
        <label
          htmlFor="checkin"
          className="flex flex-col gap-1 text-xs font-body font-semibold text-gray-700 dark:text-gray-200 md:flex-1"
        >
          Check in
          <input
            id="checkin"
            type="date"
            className="w-full rounded-sm border border-gray-300 dark:border-gray-600 bg-transparent px-2 py-2 text-sm font-normal"
          />
        </label>
        <label
          htmlFor="checkout"
          className="flex flex-col gap-1 text-xs font-body font-semibold text-gray-700 dark:text-gray-200 md:flex-1"
        >
          Check out
          <input
            id="checkout"
            type="date"
            className="w-full rounded-sm border border-gray-300 dark:border-gray-600 bg-transparent px-2 py-2 text-sm font-normal"
          />
        </label>
        <label
          htmlFor="guests"
          className="flex flex-col gap-1 text-xs font-body font-semibold text-gray-700 dark:text-gray-200 md:flex-1"
        >
          Guests
          <input
            id="guests"
            type="number"
            min="1"
            defaultValue="1"
            className="w-full rounded-sm border border-gray-300 dark:border-gray-600 bg-transparent px-2 py-2 text-sm font-normal"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-xs bg-black dark:bg-[#967e56] px-4 py-2.5 text-sm font-body font-semibold text-white md:w-auto md:whitespace-nowrap"
        >
          Check availability
        </button>
      </form>
    </div>
  );
};

export default BookingBar;
