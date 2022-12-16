import React, { useState } from 'react';
import Link from 'next/link';
import countries from 'i18n-iso-countries';

var RadioButtonComponent = function RadioButtonComponent(_ref) {
  var span = _ref.span;
  return React.createElement("label", {
    className: 'radio'
  }, React.createElement("input", {
    name: "radio",
    type: "radio"
  }), React.createElement("span", null, span));
};

var LinkButtonComponent = function LinkButtonComponent(_ref) {
  var href = _ref.href,
    text = _ref.text;
  return React.createElement(Link, {
    href: href,
    className: 'link_button'
  }, text);
};

var ButtonComponent = function ButtonComponent(_ref) {
  var text = _ref.text;
  return React.createElement("button", {
    className: 'link_button'
  }, text);
};

var InputComponent = function InputComponent(_ref) {
  var placeholder = _ref.placeholder,
    type = _ref.type;
  return React.createElement("label", {
    className: 'input-label'
  }, React.createElement("span", null, placeholder), React.createElement("input", {
    type: type
  }), React.createElement("div", {
    className: 'border'
  }));
};

var SelectCountryComponent = function SelectCountryComponent() {
  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  countries.registerLocale(require("i18n-iso-countries/langs/fr.json"));
  var _useState = useState(""),
    selectedCountry = _useState[0],
    setSelectedCountry = _useState[1];
  var selectCountryHandler = function selectCountryHandler(value) {
    return setSelectedCountry(value);
  };
  var countryObj = countries.getNames("fr", {
    select: "official"
  });
  var countryArr = Object.entries(countryObj).map(function (_ref) {
    var key = _ref[0],
      value = _ref[1];
    return {
      label: value,
      value: key
    };
  });
  return React.createElement("select", {
    name: "country-select",
    id: "country-select",
    className: 'select',
    onChange: function onChange(e) {
      selectCountryHandler(e.target.value);
    }
  }, !!(countryArr !== null && countryArr !== void 0 && countryArr.length) && countryArr.map(function (_ref2) {
    var label = _ref2.label,
      value = _ref2.value;
    return React.createElement("option", {
      key: value,
      value: selectedCountry
    }, label);
  }));
};

var CheckboxComponent = function CheckboxComponent(_ref) {
  var text = _ref.text;
  return React.createElement("label", {
    className: "checkbox"
  }, React.createElement("input", {
    name: "check",
    type: "checkbox"
  }), React.createElement("span", null, text));
};

export { ButtonComponent, CheckboxComponent, InputComponent, LinkButtonComponent, RadioButtonComponent, SelectCountryComponent };
//# sourceMappingURL=index.modern.js.map
