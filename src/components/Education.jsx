import React from 'react';
import uwImage from '../images/uw.png';

const Education = () => (
    <section id="education">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h1>Education</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-9 col-sm-push-3">
                    <h2>Bachelor of Arts in Business Administration: Finance and Marketing</h2>
                    <p>Foster School of Business
                        <br/> University of Washington
                        <br/> className of 2010
                    </p>
                </div>
                <div className="col-sm-3 col-sm-pull-9">
                    <img className="scale-image" src={uwImage}/>
                </div>
            </div>
        </div>
    </section>
);

export default Education;