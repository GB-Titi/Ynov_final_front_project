import React, { useState } from 'react'
import countries from "i18n-iso-countries";
// Import the languages you want to use


type SelectCountryComponentProps = {

};
const SelectCountryComponent = (props: SelectCountryComponentProps) => {
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
    countries.registerLocale(require("i18n-iso-countries/langs/fr.json"));

    const [selectedCountry, setSelectedCountry] = useState("");
    const selectCountryHandler = (value: any) => setSelectedCountry(value);

    const countryObj = countries.getNames("en", { select: "official" });

    const countryArr = Object.entries(countryObj).map(([key, value]) => {
        return {
            label: value,
            value: key
        };
    });




    return (
        <div>
            <select name="country-select" id="country-select"
            onChange={e => {selectCountryHandler(e.target.value)}}>
                {!!countryArr?.length &&
                    countryArr.map(({ label, value }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
            </select>
        </div>
    )
}
export default SelectCountryComponent;