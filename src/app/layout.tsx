"use client";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";

import React, { useState } from "react";

// export const metadata = {
//   title: "My Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visl, setVisual] = useState<string>();
  if (visl === undefined) {
    setVisual("hidden");
  }
  const chgVisl = () => {
    if (visl === "hidden") {
      setVisual("block");
    } else {
      setVisual("hidden");
    }
  };
  return (
    <html lang="en" className="h-full">
      <head>
        <meta
          name="theme-color"
          content="#eaddff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#eaddff"
          media="(prefers-color-scheme: dark)"
        />
        <title>San02</title>
      </head>
      <body className="font-mono bg-white dark:bg-slate-800 text-slate-800 dark:text-white dark:border-gray-800 h-full">
        <nav className="bg-[#eaddff]  dark:bg-gray-900 dark:border-gray-800">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
              {/* <Image
                src="../../public/icon/favicon.ico"
                className="h-8 mr-3 w-auto"
                alt="Flowbite Logo"
                width={32}
                height={32}
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="mr-2"
              >
                <path d="M15.716 1.329a1.341 1.341 0 0 1 2.109 1.55L15.147 9h4.161c1.623 0 2.372 2.016 1.143 3.075L8.102 22.721a1.148 1.148 0 0 1-1.81-1.317L8.996 15H4.674c-1.619 0-2.37-2.008-1.148-3.07l12.19-10.6Zm.452 1.595L4.51 13.061a.25.25 0 0 0 .164.439h5.45a.749.749 0 0 1 .692 1.041l-2.559 6.066 11.215-9.668a.25.25 0 0 0-.164-.439H14a.75.75 0 0 1-.687-1.05Z"></path>
              </svg>
              {/* <svg
                viewBox="0 0 116.86644733256796 116.86644733256794"
                height={32}
                width={32}
                className="mr-4"
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M35.06 116.866c-19.363 0-35.06-15.697-35.06-35.059v-46.747c0-19.363 15.697-35.06 35.06-35.06h46.747c19.363 0 35.06 15.697 35.059 35.06v46.747c0 19.363-15.697 35.06-35.059 35.059z"
                    fill="#6b7280"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    data-fill-palette-color="accent"
                  ></path>
                </g>
                <g transform="matrix(1,0,0,1,20.546362866283978,23.378372876461242)">
                  <svg
                    viewBox="0 0 75.7737216 70.10970157964546"
                    height="70.10970157964546"
                    width="75.7737216"
                  >
                    <g>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0"
                        y="0"
                        viewBox="24.56999969482422 31.56665802001953 50.85900115966797 47.057334899902344"
                        enable-background="new 0 0 100 100"
                        xmlSpace="preserve"
                        height="70.10970157964546"
                        width="75.7737216"
                        className="icon-s-0"
                        data-fill-palette-color="quaternary"
                        id="s-0"
                      >
                        <path
                          d="M70.214 52.501c-0.354-1.415-1.014-2.692-1.895-3.777 0.104-0.056 0.213-0.103 0.314-0.161 1.778-1.024 3.124-2.577 3.892-4.49 0.129-0.319 0.083-0.682-0.119-0.96-0.202-0.277-0.518-0.425-0.878-0.41-0.678 0.051-1.362-0.015-2.004-0.188-1.576-0.422-2.894-1.433-3.71-2.846-0.815-1.412-1.032-3.059-0.61-4.635 0.172-0.644 0.454-1.259 0.839-1.828 0.193-0.285 0.226-0.65 0.086-0.965-0.14-0.315-0.433-0.536-0.773-0.585-2.012-0.284-4.082 0.114-5.832 1.124-1.875 1.082-3.273 2.792-3.997 4.804-2.278-1.426-4.945-2.244-7.741-2.244-5.016 0-9.71 2.605-12.388 6.838C29.39 42.398 24.57 47.354 24.57 53.416c0 6.201 5.045 11.246 11.246 11.246h5.382v9.312c0 0.553 0.447 1 1 1s1-0.447 1-1v-9.312h13.605v9.312c0 0.553 0.447 1 1 1s1-0.447 1-1v-9.312h10.511c3.372 0 6.115-2.743 6.115-6.115C75.43 55.499 73.155 52.939 70.214 52.501zM60.523 34.512c0.937-0.541 1.987-0.859 3.063-0.932-0.125 0.306-0.229 0.618-0.314 0.937-0.561 2.092-0.272 4.276 0.811 6.151 1.083 1.876 2.832 3.217 4.922 3.777 0.318 0.086 0.644 0.151 0.974 0.197-0.598 0.896-1.392 1.639-2.344 2.188-0.265 0.152-0.538 0.287-0.819 0.405-0.371-0.295-0.764-0.563-1.176-0.803-0.001-0.001-0.002-0.001-0.003-0.002-0.403-0.234-0.824-0.441-1.261-0.616-0.009-0.004-0.018-0.007-0.027-0.011-0.427-0.17-0.867-0.312-1.32-0.422-0.011-0.003-0.021-0.004-0.033-0.007-0.449-0.106-0.908-0.187-1.378-0.229-0.124-0.354-0.265-0.699-0.414-1.04-0.016-0.035-0.033-0.069-0.049-0.104-0.141-0.314-0.293-0.623-0.455-0.926-0.009-0.016-0.018-0.03-0.025-0.046-0.868-1.606-2.027-3.042-3.448-4.238C57.719 36.989 58.897 35.45 60.523 34.512zM69.314 62.662H35.816c-5.099 0-9.246-4.147-9.246-9.246s4.147-9.246 9.236-9.246c0 0 0 0 0.001 0 0.026 0.002 0.126 0.007 0.153 0.007 0.357 0 0.687-0.19 0.865-0.499 2.261-3.91 6.46-6.339 10.959-6.339 5.199 0 9.896 3.256 11.78 8.036 0.005 0.014 0.012 0.027 0.018 0.042 0.124 0.319 0.236 0.645 0.335 0.977 0.125 0.418 0.507 0.708 0.943 0.715 1.878 0.029 3.683 0.743 5.082 2.01 0.003 0.002 0.006 0.003 0.009 0.005 1.26 1.143 2.152 2.694 2.448 4.476 0.079 0.478 0.488 0.829 0.973 0.836 2.236 0.031 4.057 1.876 4.057 4.112C73.43 60.816 71.584 62.662 69.314 62.662zM50.002 66.312c-0.553 0-1 0.447-1 1v10.312c0 0.553 0.447 1 1 1s1-0.447 1-1V67.312C51.002 66.76 50.555 66.312 50.002 66.312z"
                          fill="#d2d6dc"
                          data-fill-palette-color="quaternary"
                        ></path>
                      </svg>
                    </g>
                  </svg>
                </g>
              </svg> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-['Helvetica'] mt-1">
                San02
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none  dark:text-gray-400 "
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
              onClick={() => {
                chgVisl();
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="navbar-solid-bg"
              className={`${visl} w-full md:block md:w-auto navbar-solid-bg transition-all`}
              onClick={() => {
                chgVisl();
              }}
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#eaddff] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#eaddff] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 tracking-tighter">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0  md:p-0 dark:text-white "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <p className="hidden md:block cursor-default">|</p>
                <li>
                  <Link
                    href="/todo"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0  md:p-0 dark:text-white "
                  >
                    To do list
                  </Link>
                </li>
                <p className="hidden md:block cursor-default">|</p>
                <li>
                  <Link
                    href="/weather"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0  md:p-0 dark:text-white "
                  >
                    Weather
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
