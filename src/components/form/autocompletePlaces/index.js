import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const PlacesAutocomplete = ({
  inputLabel,
  buttonlabel,
  buttonAction,
  setSelected,
  setDescription,
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();
      setDescription && setDescription(description);
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          setSelected && setSelected({ lat, lng });
        })
        .catch((error) => {
          console.log("😱 Error: ", error);
        });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <div
          className="py-1"
          role="none"
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
          >
            <strong>{`${main_text}, `}</strong>
            {secondary_text}
          </a>
        </div>
      );
    });

  return (
    <div ref={ref} className="relative mb-8">
      <div className="flex rounded-md border mt-6 h-12">
        <input
          className="font-manrope block w-full xxs:w-full px-3 py-2 rounded-r-none rounded-l-md sm:text-sm focus:outline-none"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder={inputLabel}
        />
        {buttonlabel && (
          <button
            onClick={() => buttonAction()}
            className="inline-flex items-center font-bold  font-manrope px-7 py-4 rounded-r-md  bg-primary text-white  text-md  hover:bg-secondary hover:text-primary sm:text-sm  focus:outline-none"
          >
            {buttonlabel}
          </button>
        )}
      </div>
      <div
        className="absolute mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none z-40"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>
    </div>
  );
};

export default PlacesAutocomplete;
