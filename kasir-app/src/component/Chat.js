function Chat(props) {
  return (
    <div>
      <div
        id="bottom-right-modal"
        data-modal-placement="bottom-right"
        tabindex="-1"
        class="fixed top-2 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                Makan Yuk!!
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="bottom-right-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-4 md:p-5 space-y-2">
              <div class="p-2 max-w-md">
                <h2 class="mb-4 text-lg border-l-2 pl-2 rounded border-green-800">
                  Hai, gimana harimu?
                </h2>
                <div class="flex flex-wrap gap-2">
                  <a
                    href="tags/php-programming"
                    class="px-2 py-1 text-sm bg-green-100/80 rounded-lg hover:bg-green-300"
                  >
                    Sedih
                  </a>
                  <a
                    href="tags/php"
                    class="px-2 py-1 text-sm bg-green-100/80 rounded-lg hover:bg-green-300"
                  >
                    Bingung
                  </a>
                  <a
                    href="tags/internal-communication"
                    class="px-2 py-1 text-sm bg-green-100/80 rounded-lg hover:bg-green-300"
                  >
                    Senang
                  </a>
                  <a
                    href="tags/require-statement"
                    class="px-2 py-1 text-sm bg-green-100/80 rounded-lg hover:bg-green-300"
                  >
                    Berbunga-bunga
                  </a>
                </div>
              </div>
            </div>
            <div class="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="bottom-right-modal"
                type="button"
                class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chat;
