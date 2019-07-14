import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
import AppContainer from '../imports/containers/AppContainer';

Meteor.startup(() => {
  render(<AppContainer />, document.getElementById("react-target"));
});
