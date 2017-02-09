import React from 'react';
import jsonInspectImage from '../images/json-inspect.png';

const Projects = () => (
    <section id="projects">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-9 col-sm-push-3">
                    <h2>JSON Inspect</h2>
                    <h3>Android App</h3>
                    <p>This app provides an easy way to navigate through JSON documents stored on your device or online. It was written in Java using Android Studio and key features include a web request composer, file explorer and JSON viewer.</p>
                    <p>
                        <a href="https://play.google.com/store/apps/details?id=com.brianelting.jsoninspect" target="_blank">View on Google Play</a>
                    </p>
                </div>
                <div className="col-sm-3 col-sm-pull-9">
                    <img className="scale-image" src={jsonInspectImage} />
                </div>
            </div>
        </div>
    </section>
);

export default Projects;