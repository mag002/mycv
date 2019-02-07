import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";

class App extends Component {
  state = {
    about: {
      title: "about",
      firstname: "Le",
      middlename: "Hong",
      lastname: "Phuc",
      age: "22",
      email: "lehongphuc7394@gmail.com",
      phone: "0921805325",
      address: "304 Bui Dinh Tuy · F12 · Binh Thanh · Ho Chi Minh",
      additional:
        "People always tell me that I’m a person who has a sense of humor. Because the way I communicate with the other makes them feel really interesting. In even toward to the strangers, I also “Break the Ice” with them.",
      social: {
        facebook: "http://fb.com/hongphuc.908",
        insta: "http://instagram.com/phucinsta",
        youtube: "https://www.youtube.com/channel/UChJ2plecj0xOlXqMdviKoGA"
      }
    },
    experience: {
      title: "experience",
      exp1: {
        company: "Hune",
        position: "Designer",
        time: "Mar 2018 - June 2018",
        detail: `Main responsibilities:
        - Design and upload Poster, Voucher, Advertising post via Facebook, Forum...
        - Check and upgrade app UI.
        - Assist to design Website. 
        - Doing other tasks like sale, publishing a news item
        
        Recognition and Gains:
        - Facebook Post increase 20% reach.`
      },
      exp2: {
        company: "Kmin",
        position: "Front-end Developer",
        time: "Sep 2018 - Now",
        detail: `Main responsibilities:
        - Create web applications from visual designs.
        - Monitor user behaviours and offer suggestions to improve UI/UX products.
        - Assist to design Website. `
      }
    },
    skills: {
      title: "skills",
      main: {
        html: {
          name: "html"
        },
        css: {
          name: "css"
        },
        javascript: {
          name: "javascript"
        }
      },
      sub: {
        all:
          "golang, c#, canvas, svg, photoshop, bootstrap, jquery, google cloud platform",
        language: "english, japanese",
        softskill: "public speaking, teamwork"
      }
    },
    interest: {
      title: "interest",
      content:
        "Apart from being a web developer, I enjoy most of my time being outdoors. I go dance when i am free. When forced indoors, I icompose a piece of musics or write some rap song."
    }
  };
  render() {
    return (
      <div className="App">
        <Navbar state={this.state} />
        <Content state={this.state} />
      </div>
    );
  }
}

export default App;
