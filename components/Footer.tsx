/** @format */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const [t] = useTranslation("global");
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="px-8 bg-customBlue text-white">
      <div className="max-w-7xl mx-auto py-14 px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Columns1 */}
          <div className="lg:col-span-1 col-span-12">
            <h3 className="tracking-wide text-gray-300 font-semibold">
              {/* A PROPOS */}
              {t("footer.footer1.titre")}
            </h3>
            <ul className="list-none mt-6 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  {/* Partenaires et sponsors */}
                  {t("footer.footer1.text1")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  {/* Membre */}
                  {t("footer.footer1.text2")}
                </a>
              </li>
            </ul>
          </div>
          {/* Columns2 */}
          <div className="lg:col-span-1 col-span-12">
            <h3 className="tracking-wide text-gray-300 font-semibold">
              {t("footer.footer2.t0")}
            </h3>
            <ul className="list-none mt-6 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  {t("footer.footer2.t1")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  {t("footer.footer2.t2")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  {t("footer.footer2.t3")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  {t("footer.footer2.t4")}
                </a>
              </li>
            </ul>
          </div>
          {/* Columns3 */}
          <div className="lg:col-span-1 col-span-12">
            <h3 className="tracking-wide text-gray-300 font-semibold">
              {/* RESSOURCES */}
              {t("footer.footer3.t0")}
            </h3>
            <ul className="list-none mt-6 space-y-2">
              <li>
                <a
                  href="tel:1234567890"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  {/* Blogue */}
                  {t("footer.footer3.t1")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  {/* Partenaire */}
                  {t("footer.footer3.t2")}
                </a>
              </li>

              <li>
                <a
                  href="tel:1234567890"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  {/* Volontaire */}
                  {t("footer.footer3.t3")}
                </a>
              </li>
              <li>
                <a
                  href="tel:1234567890"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  {/* Carrières */}
                  {t("footer.footer3.t4")}
                </a>
              </li>
            </ul>
          </div>

          {/* Columns4 */}
          <div className="lg:col-span-1 col-span-12">
            <h3 className="tracking-wide text-gray-300 font-semibold">
              {/* CONTACT */}
              {t("footer.footer4.t0")}
            </h3>
            <ul className="list-none mt-6 space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a
                  href="tel:1234567890"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  +243 997 235 577
                </a>
              </li>

              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <a
                  href="#"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  Av. du Cadastre, Lubumbashi, Congo - Kinshasa
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:company@email.com"
                  className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out"
                >
                  Support@soracert.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-4 mt-5">
          <a
            className="text-white text-2xl hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out"
            href=""
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            className="text-white text-2xl hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out"
            href=""
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            className="text-white text-2xl hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out"
            href=""
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className="text-white text-2xl hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out"
            href=""
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Logo Section */}
        <div className="lg:col-span-4 col-span-12 mt-8">
          <a href="/">
            <img
              src="/Soracertlogo.png"
              width={128}
              height={82}
              alt="soracert"
              className="brand-2"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t max-w-7xl mx-auto border-slate-700">
        <div className="text-center md:text-right container mx-auto py-7 px-6">
          <p className="mb-0">&copy; {year}, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
