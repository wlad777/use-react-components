import React from 'react';
import { Button, Space, DatePicker, version } from 'antd';
const App = ({
  text,
  onClick
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '0 24px'
  }
}, /*#__PURE__*/React.createElement("h1", null, "antd version: ", version), /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(DatePicker, null), /*#__PURE__*/React.createElement(Button, {
  type: "primary",
  onClick: onClick
}, text)));
export default App;