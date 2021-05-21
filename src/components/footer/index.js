import React, { useState } from "react";
import FooterIcon from "public/assets/footer-icon.svg";
import FbIcon from "public/assets/fb-icon.svg";
import LinkIcon from "public/assets/link-icon.svg";
import InputWithButton from "src/components/inputWithButton";
import { postContacts } from "src/helpers/api.service";
import LoaderSpinner from "src/components/loaderSpinner";
import { toast } from "src/components/toast";
import { listErrors, isEmail } from "src/helpers/utils.service";
import Link from "next/link";

const Footer = () => {
  const defaultValue = {
    email: "",
  };

  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    const name = e?.target?.name;
    const value = e?.target?.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (!data?.email) return toast.error("Please enter your email");
    if (!isEmail(data?.email))
      return toast.error("Please enter your valid email");
    else {
      setLoading(true);
      postContacts(data)
        .then(() => {
          toast.success("Successfully sent your contact details");
          setLoading(false);
          setData(defaultValue);
        })
        .catch((err) => {
          toast.error(listErrors(err));
          setLoading(false);
        });
    }
  };

  const FooterLink = ({ linkLabel, to }) => {
    return (
      <Link href={to || "/"}>
        <a className="my-3 block text-gray-300 hover:text-gray-300 text-sm font-medium duration-700 cursor-pointer">
          {linkLabel}
        </a>
      </Link>
    );
  };

  return (
    <>
      <footer className="bg-black w-full mx-auto sm:px-8 lg:px-16 xl:px-40 2xl:px-56">
        <div className=" text-gray-800 py-10 flex flex-wrap justify-left xxs:flex-col">
          <div className="py-5 w-1/2 sm:w-4/12 md:w-1/4 xxs:w-full">
            <FooterIcon />
            <div
              href="#"
              className="mt-10 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Copyright © 2020 Landify UI Kit.
            </div>
            <div
              href="#"
              className="mt-2 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              All rights reserved
            </div>

            <div className="flex items-center mt-6 space-x-3">
              <FbIcon />
              <LinkIcon />
            </div>
          </div>

          <div className="p-5 w-1/2 sm:w-4/12 md:w-2/12 xxs:w-full">
            <div className=" text-white text-xl mb-6 font-bold font-poppins">
              Home
            </div>
            <FooterLink linkLabel="Who we are" />
            <FooterLink linkLabel="How to save" />
            <FooterLink linkLabel="Just for You" />
            <FooterLink linkLabel="Property" />
          </div>
          <div className="p-5 w-1/2 sm:w-4/12 md:w-2/12 xxs:w-full">
            <div className=" uppercase text-white text-xl mb-6 font-bold">
              Co-own
            </div>
            <FooterLink linkLabel="Overview" />
            <FooterLink linkLabel=" Get Started" />
          </div>
          <div className="p-5 w-1/2 sm:w-4/12 md:w-1/5 xxs:w-full"></div>
          <div className="p-5 w-1/2 sm:w-4/12 md:w-1/5 xxs:w-full">
            <div className=" uppercase text-white mb-6 font-bold">
              Stay up to date
            </div>
            {loading ? (
              <LoaderSpinner width={20} height={20} />
            ) : (
              <InputWithButton
                placeholder="Your Email Address"
                name="email"
                value={data?.email}
                onChange={handleOnChange}
                onClick={() => handleSave()}
              />
            )}
            <div className="pt-2">
              <FooterLink linkLabel="Contact Us" to="/contactUs" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
