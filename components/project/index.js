import "tailwindcss/tailwind.css";

export default function Project() {
  return (
    <div class="flex flex-col py-12 px-12 gap-8">
      <h1 class="text-5xl font-bold text-center">Project</h1>
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-1/3 sm:w-1/2 p-3 relative">
          <div class="bg-gray-300 h-64 relative">
            <p class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-lg leading-relaxed text-center">
              Lorem ipsum dolor sit amet consectet ur adipisicing elit.
              Quisquam, voluptate.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 sm:w-1/2 p-3 relative">
          <div class="bg-gray-300 h-64 relative">
            <p class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-lg leading-relaxed text-center">
              Lorem ipsum dolor sit amet consectet ur adipisicing elit.
              Quisquam, voluptate.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 sm:w-1/2 p-3 relative">
          <div class="bg-gray-300 h-64 relative">
            <p class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-lg leading-relaxed text-center">
              Lorem ipsum dolor sit amet consectet ur adipisicing elit.
              Quisquam, voluptate.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 sm:w-1/2 p-3 relative">
          <div class="bg-gray-300 h-64 relative">
            <p class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-lg leading-relaxed text-center">
              Lorem ipsum dolor sit amet consectet ur adipisicing elit.
              Quisquam, voluptate.
            </p> b
          </div>
        </div>
      </div>
        <div class="flex justify-center">
            <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
                See More
            </button>
        </div>
    </div>
  );
}
