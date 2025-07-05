import { NavLink, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  return (
    <>
       <section className="w-screen h-screen flex flex-col pt-20 lg:gap-30">
  <div className="max-w-[1200px] w-full flex flex-row justify-between items-center mx-auto px-4 gap-10">
    
    {/* Image Section */}
    <div className="lg:w-[490px] md:w-[400px] sm:w-[300px] hidden md:flex -mt-20">
      <img
        className=" object-contain"
        src="https://media.istockphoto.com/id/1394392106/vector/error-404.jpg?s=612x612&w=0&k=20&c=u3zSIHVsTwy2-acobMX3sdCIQiGnEdKGIsDXOWKPAOA="
        alt="404 illustration"
      />
    </div>

    {/* Text Section */}
    <div className="text-center flex flex-col gap-3 w-full md:w-1/2">
      <p className="text-5xl md:text-7xl lg:text-8xl font-semibold text-blue-700">404</p>
      <h1 className="text-2xl lg:text-4xl text-red-600">Page not found</h1>
      <p className="text-lg md:text-2xl">Sorry, We could not find the page you are looking for</p>
      <p className="text-lg md:text-2xl text-blue-600 font-semibold">
        <i>{error.statusText || error.message}</i>
      </p>

      <NavLink
        className="bg-blue-600 text-white text-lg md:text-2xl py-3 px-4 rounded hover:bg-blue-800 mt-6 w-fit mx-auto"
        to="/"
      >
        <span className="arrow"> ← </span> Go to Home 🏠
      </NavLink>
    </div>
  </div>
</section>

    </>
  )
}

export default Error
