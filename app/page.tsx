import Title from '@/app/ui/title/title';

export default function Home() {
  return (
   <div className="bg-gradient-to-b from-white to-zinc-100  bg-no-repeat bg-center bg-contain h-screen w-full">
    
    <div className="bg-gray-200 bg-[url('/bg2.svg')] bg-no-repeat bg-center bg-contain h-screen w-full ">
      <div className="h-screen flex flex-col justify-center items-center text-center p-4 gap-4">
        <h2 className=''><Title /></h2>
        <h1 className="text-lg md:text-xl text-gray-600 max-w-xl">
          a React and Next.js developer focused on building fast, clean, and user-friendly web experiences.
          From frontend design to backend logic, I turn ideas into functional, responsive apps. 
        </h1>
        <button className="text-white text-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Projects</button>

      </div>
    </div>
   </div>
  );
}
