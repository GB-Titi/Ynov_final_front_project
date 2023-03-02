function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Link = _interopDefault(require('next/link'));
var countries = _interopDefault(require('i18n-iso-countries'));

var RadioButtonComponent = function RadioButtonComponent(_ref) {
  var span = _ref.span;
  return React__default.createElement("label", {
    className: 'radio'
  }, React__default.createElement("input", {
    name: "radio",
    type: "radio"
  }), React__default.createElement("span", null, span));
};

var LinkButtonComponent = function LinkButtonComponent(_ref) {
  var href = _ref.href,
    text = _ref.text;
  return React__default.createElement(Link, {
    href: href,
    className: 'link_button'
  }, text);
};

var ButtonComponent = function ButtonComponent(_ref) {
  var text = _ref.text;
  return React__default.createElement("button", {
    className: 'link_button'
  }, text);
};

var InputComponent = function InputComponent(_ref) {
  var placeholder = _ref.placeholder,
    type = _ref.type,
    name = _ref.name;
  return React__default.createElement("label", {
    className: 'input-label'
  }, React__default.createElement("span", null, placeholder), React__default.createElement("input", {
    type: type,
    name: name
  }), React__default.createElement("div", {
    className: 'border'
  }));
};

var SelectCountryComponent = function SelectCountryComponent() {
  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  countries.registerLocale(require("i18n-iso-countries/langs/fr.json"));
  var _useState = React.useState(""),
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
  return React__default.createElement("select", {
    name: "countrySelect",
    id: "countrySelect",
    className: 'select',
    onChange: function onChange(e) {
      selectCountryHandler(e.target.value);
    }
  }, !!(countryArr !== null && countryArr !== void 0 && countryArr.length) && countryArr.map(function (_ref2) {
    var label = _ref2.label,
      value = _ref2.value;
    return React__default.createElement("option", {
      key: value,
      value: selectedCountry
    }, label);
  }));
};

var CheckboxComponent = function CheckboxComponent(_ref) {
  var text = _ref.text;
  return React__default.createElement("label", {
    className: "checkbox"
  }, React__default.createElement("input", {
    name: "check",
    type: "checkbox"
  }), React__default.createElement("span", null, text));
};

exports.ButtonComponent = ButtonComponent;
exports.CheckboxComponent = CheckboxComponent;
exports.InputComponent = InputComponent;
exports.LinkButtonComponent = LinkButtonComponent;
exports.RadioButtonComponent = RadioButtonComponent;
exports.SelectCountryComponent = SelectCountryComponent;
//# sourceMappingURL=index.js.map
