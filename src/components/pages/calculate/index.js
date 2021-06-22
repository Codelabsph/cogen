import React, { useState, useEffect } from "react";
import Section from "src/components/section";
import Map from "src/components/map";
import PersonalizeCard from "src/components/personalizeCard";
import MapDetails from "src/components/mapDetails";
import { postContacts } from "src/helpers/api.service";
import Personalize from "./personalize";
import { toast } from "src/components/toast";
import { listErrors, isEmail, scrollToTop } from "src/helpers/utils.service";
import Modal from "src/components/modal";
import { useRouter } from "next/router";
import AutocompletePlaces from "src/components/form/autocompletePlaces";

const Calculate = () => {
  const [center, setCenter] = useState({ lat: 14.599512, lng: 120.984222 });
  const [description, setDescription] = useState("");
  const [personalizeDone, setPersonalizeDone] = useState(false);
  const [area, setArea] = useState(0);
  const [openModal, setCloseModal] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    estimate_monthly_bill: "",
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
    if (!data?.estimate_monthly_bill)
      return toast.error("Please enter your estimate monthly bill");

    if (!area && area <= 0)
      return toast.error("Please draw your calculated roof area above");
    else {
      setLoading(true);
      postContacts(data)
        .then(() => {
          scrollToTop();
          setPersonalizeDone(true);
          toast.success("Successfully sent your contact details");
          setLoading(false);
        })
        .catch((err) => {
          toast.error(listErrors(err));
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (router?.query?.lat && router?.query.lng) {
      setCenter({
        lat: parseFloat(router?.query?.lat),
        lng: parseFloat(router?.query?.lng),
      });
    }
    if (router?.query?.address) {
      setDescription(router?.query?.address);
    }
  }, [router]);

  return (
    <>
      {!personalizeDone ? (
        <>
          {openModal && <Modal onClose={() => setCloseModal(false)} />}
          <Section title={"Let’s calculate your savings!"} marginTop={"lg"}>
            <div className="w-4/12 ">
              <AutocompletePlaces border="yes"
                setSelected={setCenter}
                inputLabel="Your address"
                setDescription={setDescription}
              />
            </div>
          </Section>
          <Map center={center} setArea={setArea} />
          <Section>
            <MapDetails address={description} area={area} />
          </Section>
          <Section margin="s">
            <PersonalizeCard
              data={data}
              handleOnChange={handleOnChange}
              handleSave={handleSave}
              loading={loading}
            />
          </Section>
        </>
      ) : (
        <Personalize data={data} area={area} address={description} />
      )}
    </>
  );
};

export default Calculate;
