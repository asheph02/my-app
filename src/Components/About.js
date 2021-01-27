import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      /*var name = "Andrew Shepherd";
      var profilepic= "http://asheph02.github.io/my-app/images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;*/
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src= "http://asheph02.github.io/my-app/images/profilepic.png" alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Andrew Shepherd</span><br />
						   <span>Biomedical Engineering Co-op <br />
						         University of Guelph
                   </span><br />
						   <span>Based in Kitchener, Ontario</span><br />
                     <span>asheph02@uoguelph.ca</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
