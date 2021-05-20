import React, { useState } from "react";
import Buttons from "src/components/buttons";
import Input from "src/components/form/input";
import { postContacts } from "src/helpers/api.service";
import { toast } from "src/components/toast";
import { listErrors, isEmail } from "src/helpers/utils.service";
import Select from "src/components/form/select";
import Textarea from "src/components/form/textarea";

const ContactUsForm = ({}) => {
  const defaultData = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    how_can_our_sales_team_help_you: "",
    how_did_you_hear_about_us: "",
    what_can_help_with_you: "",
  };
  const [data, setData] = useState({
    ...defaultData,
  });

  const handleOnChange = (e) => {
    const name = e?.target?.name;
    const value = e?.target?.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (!data?.first_name) return toast.error("Please enter your first name");
    if (!data?.last_name) return toast.error("Please enter your last name");
    if (!data?.email) return toast.error("Please enter your email");
    if (!isEmail(data?.email))
      return toast.error("Please enter your valid email");
    if (!data?.phone_number)
      return toast.error("Please enter your phone number");
    else {
      postContacts(data)
        .then(() => {
          setData(defaultData);
          toast.success("Successfully sent your contact details");
        })
        .catch((err) => {
          toast.error(listErrors(err));
        });
    }
  };

  return (
    <div className="w-1/2 lg:w-1/2 bg-gray-100  md:w-full xxs:w-full sm:w-full">
      <form>
        <div className="flex justify-center  mt-20">
          <div className="w-3/4 xxs:w-full px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <h3 className="text-xl tracking-widest font-semibold my-24 uppercase xxs:my-12">
              Contact Us
            </h3>
            <h1 className="text-4xl font-bold font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-5xl xxs:text-3xl mb-20">
              Want to learn more?
            </h1>
            <div className=" flex flex-row mb-6 xxs:flex-col space-x-4 xxs:space-x-0">
              <Input
                marginBottom={"xs"}
                id={"firstname"}
                type={"text"}
                label={"First Name"}
                placeholder={"Jane"}
                value={data?.first_name}
                onChange={handleOnChange}
                name="first_name"
              />
              <Input
                marginBottom={"xs"}
                id={"Lastname"}
                type={"textarea"}
                rows="6"
                label={"Last Name"}
                placeholder={"Doe"}
                value={data?.last_name}
                onChange={handleOnChange}
                name="last_name"
              />
            </div>
            <div className=" mb-6 ">
              <Input
                marginBottom={"xs"}
                id={"email"}
                type={"email"}
                label={"Email"}
                placeholder={"JaneDoe@gmail.com"}
                value={data?.email}
                onChange={handleOnChange}
                name="email"
              />
            </div>
            <div className="mb-6">
              <Input
                marginBottom={"xs"}
                id={"text"}
                type={"text"}
                label={"Phone number"}
                placeholder={"(123) 456-7890"}
                value={data?.phone_number}
                onChange={handleOnChange}
                name="phone_number"
              />
            </div>
            <div className="mb-6">
              <div className=" mb-6 md:mb-0">
                <Select
                  name={"how_can_our_sales_team_help_you"}
                  label="How can our sales team help you?"
                  value={data?.how_can_our_sales_team_help_you}
                  options={[
                    {
                      id: "",
                      value: "Select One",
                      disabled: true,
                      selected: true,
                    },
                    {
                      id: "I want to co-own a property",
                      value: "I want to co-own a property",
                    },
                    {
                      id: "I want to co-generate in my property",
                      value: "I want to co-generate in my property",
                    },
                    {
                      id: "I want to buy outright",
                      value: "I want to buy outright",
                    },
                    {
                      id: "Others",
                      value: "Others",
                    },
                  ]}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className=" mb-6 ">
              <div className=" mb-6 md:mb-0">
                <Select
                  name={"how_did_you_hear_about_us"}
                  label="How did you hear about us?"
                  value={data?.how_did_you_hear_about_us}
                  options={[
                    {
                      id: "",
                      value: "Select One",
                      disabled: true,
                      selected: true,
                    },
                    {
                      id: "Word of Mouth",
                      value: "Word of Mouth",
                    },
                    {
                      id: "Online Search",
                      value: "Online Search",
                    },
                    {
                      id: "Facebook",
                      value: "Facebook",
                    },
                    {
                      id: "Others",
                      value: "Others",
                    },
                  ]}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className=" mb-6 ">
              <div className=" mb-6 md:mb-0">
                <Textarea
                  label=" What can we help you with?"
                  onChange={handleOnChange}
                  name="what_can_help_with_you"
                  value={data?.what_can_help_with_you}
                />
              </div>
            </div>
            <div className="mt-6  mb-24 xxs:mb-12 xs:mb-12">
              <Buttons
                text={"Submit"}
                id={"btnContactUs"}
                paddingY={"xs"}
                btnColor={"primary"}
                textColor={"white"}
                width={"xs"}
                border="xs"
                onClick={handleSave}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
