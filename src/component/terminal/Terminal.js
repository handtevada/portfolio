import React, { Component } from 'react';
import Terminal from 'react-bash';

export const intro = {
  exec: ({ structure, history, cwd }, command) => {
    return {
      structure,
      cwd,
      history: history
        .concat({ value: ">_ Hi, I'm Keerati Yuonghirun, Tung" })
        .concat({ value: '>_ November 21, 1990, Bangkok, THAILAND' })
        .concat({ value: '>_ Grew up in Kamphaeng Phet like normal guy.' })
        .concat({
          value: '>_ Now, .Net C# and Node JS Developer, Full Stack, Blogger.',
        })
        .concat({ value: '>_ Future, I wanna be YouTuber' })
        .concat({ value: '>' }),
    };
  },
};

export const edu = {
  exec: ({ structure, history, cwd }, command) => {
    return {
      structure,
      cwd,
      history: history
        .concat({ value: '>_ Bachelor of Engineering Program' })
        .concat({
          value: '>_ Computer Engineering, Naresuan University (Phitsanulok)',
        })
        .concat({ value: '>_ Grade point average : 2.7' })
        .concat({ value: '>_' })
        .concat({ value: '>_ High School' })
        .concat({ value: '>_ Prankratai Pittayakom School (Kamphaeng Phet)' })
        .concat({ value: '>' }),
    };
  },
};

export const lang = {
  exec: ({ structure, history, cwd }, command) => {
    return {
      structure,
      cwd,
      history: history
        .concat({ value: ">_ THAI : 4/5 => WHY! I'm a Programmer" })
        .concat({
          value:
            '>_ ENGLISH : 3/5 => Can survive in foreign country. Read and write are pretty good.',
        })
        .concat({
          value: '>_ JAPANESE : 2/5 => Simple sentence, Introduce myself',
        })
        .concat({ value: '>' }),
    };
  },
};

export const stskill = {
  exec: ({ structure, history, cwd }, command) => {
    return {
      structure,
      cwd,
      history: history
        .concat({ value: '>_ Learn fast Eat faster' })
        .concat({ value: ">_ Can talk just one word for a day 'KRUB' :)" })
        .concat({ value: '>_ Succeed in quitting Facebook' })
        .concat({ value: '>' }),
    };
  },
};

export const pskill = {
  exec: ({ structure, history, cwd }, command) => {
    return {
      structure,
      cwd,
      history: history
        .concat({
          value: '>_ Now, Expertise about .Net C#, Node JS, Full Stack Developer',
        })
        .concat({ value: '>_ ' })
        .concat({ value: '>_ Backend  => 9/10' })
        .concat({ value: '>_ Frontend => 9/10' })
        .concat({ value: '>_ Windows Server => 9/10' })
        .concat({ value: '>_ Linux Server => 8/10' })
        .concat({ value: '>_ ' })
        .concat({ value: '>_ PROGRAMMING LANGUAGE' })
        .concat({ value: '>_ Advanced => C#, Node JS' })
        .concat({ value: '>_ Intermediate => Java, C++, PHP' })
        .concat({ value: '>_ Beginner => Python' })
        .concat({ value: '>_ ' })
        .concat({ value: '>_ WEB STACK & TOOLS' })
        .concat({
          value:
            '>_ React, Node.js, jQuery, Lumen, WordPress, MySql, MongoDB, MicrosoftSQL, Firebase, Git, Docker, Kafka, Kong, GCP, GKE',
        })
        .concat({ value: '>_ ' })
        .concat({ value: '>_ INTERESTED NOW' })
        .concat({
          value: '>_ UX/UI, Artificial Intelligence, Cloud Technology, Politics and Podcasts.',
        })
        .concat({ value: '>' }),
    };
  },
};

export const sskill = {
  exec: ({ structure, history, cwd }, command) => {
    return {
      structure,
      cwd,
      history: history
        .concat({
          value: '>_ Photographer => IG : Directorysc (everyday story)',
        })
        .concat({
          value: '>_ Medium => medium.com/@directorys (About technology or programming)',
        })
        .concat({
          value: '>_ Blogger => engineerindy.com (About review and general thing)',
        })
        .concat({ value: '>_ Sports => Tennis, Table Tennis, Go' })
        .concat({ value: '>_ Games => ROV (For now)' })
        .concat({ value: '>_ Treader => Stock, Crypto' })
        .concat({ value: '>' }),
    };
  },
};

export const awards = {
  exec: ({ structure, history, cwd }, command) => {
    return {
      structure,
      cwd,
      history: history.concat({ value: '>_ ???' }).concat({ value: '>' }),
    };
  },
};

export const exp = {
  exec: ({ structure, history, cwd }, command) => {
    return {
      structure,
      cwd,
      history: history
        .concat({ value: '>_ 2020 - Now : Outsource' })
        .concat({
          value: '>_ 2019 - 2020 : Software Engineer, Tangerine Co.,Ltd.',
        })
        .concat({
          value: '>_ 2015 - 2019 : C#.NET Developer, Piesoft Co.,Ltd.',
        })
        .concat({
          value: '>_ 2013 - 2015 : Java Developer, AR Soft - Advanced Research Group Co.,Ltd.',
        })
        .concat({ value: '>_ 2012 : Apprentice : TESA Hyper Camp' })
        .concat({ value: '>' }),
    };
  },
};

export const contact = {
  exec: ({ structure, history, cwd }, command) => {
    return {
      structure,
      cwd,
      history: history
        .concat({ value: '>_ Email : algobaleno.un@gmail.com' })
        .concat({ value: '>_ Twitter : @Algobaleno' })
        .concat({ value: '>_ Instagram : Directorys' })
        .concat({ value: '>_ Medium : medium.com/@directorys' })
        .concat({ value: '>_ Github : github.com/handtevada' })
        .concat({ value: '>' }),
    };
  },
};

class terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
  }
}

export default terminal;
