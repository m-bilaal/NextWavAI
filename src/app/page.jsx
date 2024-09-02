import Navbar from "@/app/components/common/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="max-w-screen-xl w-full mx-auto px-4">
          <div>
            <h1 className="text-center">Unlock the Future with NextWavAI</h1>
            <p className="text-center">
              Explore in-depth reviews, ethical discussions, and the latest
              trends in artificial intelligence to stay ahead in the AI
              revolution.
            </p>
            <div className="">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
