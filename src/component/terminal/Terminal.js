import React, { Component } from 'react';
import Terminal from 'react-bash';

export const intro = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({ value: ">_ Hi, I'm Keerati Yuonghirun, Tung" })
                .concat({ value: '>_ November 21, 1990, THAILAND' })
                .concat({ value: '>_ Now, .Net Developer, Full Stack, Blogger' })
                .concat({ value: '>' })
        };
    }
};

export const edu = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({ value: '>_ Bachelor of Engineering Program' })
                .concat({ value: '>_ Computer Engineering, Naresuan University' })
                .concat({ value: '>_ Grade point average : 2.7' })
                .concat({ value: '>' })
        };
    }
};

export const lang = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({ value: ">_ THAI : 4/5 => WHY! I'm Programmer" })
                .concat({
                    value: '>_ ENGLISH : 3/5 => Netflix every day make you Raccoon eyes'
                })
                .concat({
                    value: '>_ JEPANESE : 2/5 => Simple sentence, Introduce myself'
                })
                .concat({ value: '>' })
        };
    }
};

export const stskill = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({ value: '>_ Learn fast Eat faster' })
                .concat({ value: ">_ Can talk just one word for a day 'KRUB' :)" })
                .concat({ value: '>' })
        };
    }
};

export const pskill = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({
                    value: '>_ Now, Expertise about .Net C#, Full Stack Developer'
                })
                .concat({ value: '>_ ' })
                .concat({ value: '>_ Backend  => 9/10' })
                .concat({ value: '>_ Frontend => 8/10' })
                .concat({ value: '>_ Windows => 9/10' })
                .concat({ value: '>_ Linux => 8/10' })
                .concat({ value: '>_ ' })
                .concat({ value: '>_ PROGRAMMING LANGUAGE' })
                .concat({ value: '>_ Advanced => C#, Javascript, CSS, Html' })
                .concat({ value: '>_ Intermediate => Java, C++' })
                .concat({ value: '>_ Beginner => Python' })
                .concat({ value: '>_ ' })
                .concat({ value: '>_ WEB STACK & TOOLS' })
                .concat({
                    value: '>_ React, Node.js, jQuery, Bootstrap, Scss, Npm, Wordpress, Sql, Firebase, Git, Docker'
                })
                .concat({ value: '>_ ' })
                .concat({ value: '>_ INTERESTED NOW' })
                .concat({ value: '>_ Blockchain, Electronics' })
                .concat({ value: '>' })
        };
    }
};

export const sskill = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({ value: '>_ Photographer => IG : Directorysc' })
                .concat({ value: '>_ Blogger => engineerindy.com (No Update)' })
                .concat({ value: '>' })
        };
    }
};

export const awards = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history.concat({ value: '>_ ???' }).concat({ value: '>' })
        };
    }
};

export const exp = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({ value: '>_ 2012 : Apprentice : TESA Hyper Camp' })
                .concat({
                    value: '>_ 2013 - 2015 : Java Developer, AR Soft Advanced Research Group Co., Ltd.'
                })
                .concat({ value: '>_ 2015 - NOW : .Net Developer, Piesoft Co., Ltd.' })
                .concat({ value: '>' })
        };
    }
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
                .concat({ value: '>' })
        };
    }
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
            contact
        };
        const history = [{ value: 'Welcome to the my profile!' }].concat({
            value: 'Please typed the command'
        });
        return <Terminal prefix={'portfolio'} theme={Terminal.Themes.DARK} history={history} extensions={extensions} />;
    }
}

export default terminal;
