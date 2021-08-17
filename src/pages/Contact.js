import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="relative">

          {/* Section background (needs .relative class on parent and next sibling elements) */}
          <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-blue-800 pointer-events-none" aria-hidden="true"></div>
          <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-4">Contact with us</h2>
                  <p className="text-xl text-gray-600">
                  <div class="flex text-left items-center mt-8 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-80">
                                Achilles Polska Sp. z o.o.,
                                <br />ul. Miałki Szlak 52,
                                <br />80 - 717 Gdańsk
                            </div>
                        </div>

                        <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div class="ml-4 text-left text-md tracking-wide font-semibold w-60">
                                +48 58 683 60 30
                            </div>
                        </div>

                        <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                contact@unifoil.com
                            </div>
                        </div>
                  </p>
              </div>

              {/* Items */}
              <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

                {/* 1st item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-1">Himanshu Goel</h3>
                  <p class="font-medium text-gray-600 mt-2">
                    Managing Director
                  </p>
                  <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    +48 690 162 097
                    </div>
                  </div>

                  <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                      himanshu@unifoil.com
                    </div>
                  </div>
                </div>

                {/* 2nd item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-1">Jarek Ciołkowski</h3>
                  <p class="font-medium text-gray-600 mt-2">
                    Operations Director
                  </p>
                  <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    +48 690 162 187
                    </div>
                  </div>

                  <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    jarek@unifoil.com
                    </div>
                  </div>
                </div>

                {/* 3rd item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-1">Krzysztof Chmal</h3>
                  <p class="font-medium text-gray-600 mt-2">
                    Customer Service Assistant
                  </p>
                  <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                      +48 881 456 756
                    </div>
                  </div>

                  <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                      k.chmal@unifoil.com
                    </div>
                  </div>
                </div>

                {/* 4th item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-1">Olga Szkrawan</h3>
                  <p class="font-medium text-gray-600 mt-2">
                  Specialist for logistics and export
                  </p>
                  <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    +48 733 456 467
                    </div>
                  </div>

                  <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    o.szkrawan@unifoil.com
                    </div>
                  </div>
                </div>

                {/* 5th item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-1">Małgorzata Wołosz</h3>
                  <p class="font-medium text-gray-600 mt-2">
                    Quality Specialist
                  </p>
                  <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                      +48 506 934 669
                    </div>
                  </div>

                  <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    m.wolosz@unifoil.com
                    </div>
                  </div>
                </div>

                {/* 6th item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-1">Przemysław Czarnul</h3>
                  <p class="font-medium text-gray-600 mt-2">
                  Director of production and logistics
                  </p>
                  <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    +48 733 456 785 

                    </div>
                  </div>

                  <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    p.czarnul@unifoil.com
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default Contact;