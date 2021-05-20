import React, { useState } from "react";
import Section from "src/components/section";
import Map from "src/components/map";
import PersonalizeCard from "src/components/personalizeCard";
import MapDetails from "src/components/mapDetails";
import { usePlacesWidget } from "react-google-autocomplete";
import { postContacts } from "src/helpers/api.service";
import Personalize from "./personalize";
import { useSnackbar } from 'notistack';


const Calculate = () => {
  const [center, setCenter] = useState({ lat: 14.599512, lng: 120.984222 });
  const [place, setPlace] = useState();
  const [personalizeDone, setPersonalizeDone] = useState(false);


  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    estimate_monthly_bill: 0,
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
    alert("bobo");

      postContacts(data).then((res) => console.log(res)).catch(err => {
        console.log(err?.response, 'qweqeqe')
      });
  
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
          <Map center={center} />
          <Section>
            <MapDetails address={place?.formatted_address} />
          </Section>
          <Section>
            <PersonalizeCard
              data={data}
              handleOnChange={handleOnChange}
              handleSave={handleSave}
            />
          </Section>
        </>
      ) : (
        <Personalize />
      )}
    </>
  );
};

export default Calculate;
