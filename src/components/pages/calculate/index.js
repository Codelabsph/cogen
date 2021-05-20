import React, { useState } from "react";
import Section from "src/components/section";
import Map from "src/components/map";
import PersonalizeCard from "src/components/personalizeCard";
import MapDetails from "src/components/mapDetails";
import { usePlacesWidget } from "react-google-autocomplete";
import { postContacts } from "src/helpers/api.service";
import Personalize from "./personalize";
import { toast } from "src/components/toast";
import { listErrors, isEmail } from "src/helpers/utils.service";

const Calculate = () => {
  const [center, setCenter] = useState({ lat: 14.599512, lng: 120.984222 });
  const [place, setPlace] = useState();
  const [personalizeDone, setPersonalizeDone] = useState(false);
  const [area, setArea] = useState(0);

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    estimate_monthly_bill: "",
  });

  const { ref } = usePlacesWidget({
    onPlaceSelected: (place, inputRef, autocomplete) => {
      setPlace(place);
    },
  });

  const handleSetCenter = () => {
    if (place) {
      const lat = place?.geometry?.location?.lat();
      const lng = place?.geometry?.location?.lng();
      setCenter({
        lat: lat,
        lng: lng,
      });
    }
  };

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
    if (!data?.estimate_monthly_bill)
      return toast.error("Please enter your estimate monthly bill");

    if (!area && area <= 0)
      return toast.error("Please draw your calculated roof area above");
    else {
      postContacts(data)
        .then(() => {
          setPersonalizeDone(true);
          toast.success("Successfully sent your contact details");
        })
        .catch((err) => {
          toast.error(listErrors(err));
        });
    }
  };

  return (
    <>
      {!personalizeDone ? (
        <>
          <Section title={"Let’s calculate your savings!"} marginTop={"lg"}>
            <div className="w-4/12 ">
              <div className="flex rounded-md border mt-6">
                <input
                  type="text"
                  name="mapAddress"
                  ref={ref}
                  placeholder="Your address"
                  className="font-manrope block w-full xxs:w-full px-3 py-2 rounded-r-none rounded-l-md sm:text-sm focus:outline-none"
                />
                <button
                  onClick={() => handleSetCenter()}
                  className="inline-flex items-center font-bold  font-manrope px-7 py-4 rounded-r-md  bg-primary text-white  text-md  hover:bg-secondary hover:text-primary sm:text-sm  focus:outline-none"
                >
                  Search
                </button>
              </div>
            </div>
          </Section>
          <Map center={center} setArea={setArea} />
          <Section>
            <MapDetails address={place?.formatted_address} area={area} />
          </Section>
          <Section>
            <PersonalizeCard
              data={data}
              handleOnChange={handleOnChange}
              handleSave={handleSave}
              disabledButton={area < 0}
            />
          </Section>
        </>
      ) : (
        <Personalize
          data={data}
          area={area}
          address={place?.formatted_address}
        />
      )}
    </>
  );
};

export default Calculate;
