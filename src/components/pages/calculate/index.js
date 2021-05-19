import React, { useState } from "react";
import Section from "src/components/section";
import Map from "src/components/map";
import PersonalizeCard from "src/components/personalizeCard";
import MapDetails from "src/components/mapDetails";
import { usePlacesWidget } from "react-google-autocomplete";

const Calculate = () => {
  const [center, setCenter] = useState({ lat: 14.599512, lng: 120.984222 });
  const { ref } = usePlacesWidget({
    onPlaceSelected: (place, inputRef, autocomplete) => {
      const lat = place?.geometry?.location?.lat();
      const lng = place?.geometry?.location?.lng();
      setCenter({
        lat: lat,
        lng: lng,
      });
    },
  });

  return (
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
            <button className="inline-flex items-center font-bold  font-manrope px-7 py-4 rounded-r-md  bg-primary text-white  text-md  hover:bg-secondary hover:text-primary sm:text-sm  focus:outline-none">
              Search
            </button>
          </div>
        </div>
      </Section>
      <Map center={center} />
      <Section>
        <MapDetails address="90 Bedford Street, New York, NY, USA" />
      </Section>
      <Section>
        <PersonalizeCard />
      </Section>
    </>
  );
};

export default Calculate;
