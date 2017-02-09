import React from 'react';

const Skills = ({skills}) => (
    <section id="skills">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h1>Skills</h1>
                </div>
            </div>
            <div className="row">
                {skills.map((col, i) => (
                    <div key={i} className="col-sm-6">
                        <ul>
                            {col.map((skill, j) => (
                                <li key={j}>
                                    <span className="skill">{skill.name}</span>
                                    <span className={`level-${skill.level}`}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;