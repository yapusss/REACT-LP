export default function About () {
   return (
     
     <section className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-pink-50 to-white px-10 md:px-20">
      <div className="max-w-lg space-y-6">
         <h1 className="text-7xl font-extrabold text-gray-900 leading-tight">
          Tentang Kami<br />
        </h1>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
      
      <img
          src="Peyek3.jpg"
          alt="Gambar Tentang Kami"
          className="w-full max-w-md drop-shadow-xl"
        />

      </div>
      
   
     </section>
   );
}