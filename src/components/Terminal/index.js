import React from 'react';

import Terminal from 'react-bash';

import {
  intro,
  edu,
  lang,
  stskill,
  pskill,
  sskill,
  awards,
  exp,
  contact,
} from 'constants/extensions';

const CustomTerminal = () => {
  const extensions = {
    intro,
    edu,
    lang,
    stskill,
    pskill,
    sskill,
    awards,
    exp,
    contact,
  };
  const history = [{ value: 'Welcome to my profile!' }].concat({
    value: 'Please type the command',
  });
  return (
    <Terminal
      prefix={'portfolio'}
      theme={Terminal.Themes.DARK}
      history={history}
      extensions={extensions}
    />
  );
};

export default CustomTerminal;
