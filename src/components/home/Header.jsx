import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

function Header(){

    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto lg:mx-12 max-w-4xl xl:mx-14 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 sm:pt-36 font-medium sm:pb-40">
            <div>
              
              <div className="pb-40">
                <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-7xl">
                  Agency for <span> </span>
                        <Typewriter
                                words={['You!', 'Dreamers', 'Creators']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={700}
                                /* onLoopDone={handleDone}
                                onType={handleType} */
                            />
                </h1>
                <ul className="inline-block mx-8 lg:mx-auto lg:flex lg:gap-8">
                    <li className="lg:inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out">
                        <Link to="/servicios/algoAqui" className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                            Diseño Web
                        </Link>
                    </li>
                    <li className="lg:inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out">
                        <Link to="/servicios/algoAqui" className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                            Desarrollo de Software
                        </Link>
                    </li>
                    <li className="lg:inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out">
                        <Link to="/servicios/algoAqui" className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                            Marketing
                        </Link>
                    </li>
                    <li className="lg:inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out">
                        <Link to="/servicios/algoAqui" className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                            Servicio de Mantenimiento
                        </Link>
                    </li>
                </ul>
                
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header;