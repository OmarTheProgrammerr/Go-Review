import React, { Component } from "react";
import Ticket from "./../images/movie_tickets.jpg";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>Pick the right movie to watch</h2>
        <hr />

        <div class="twp-video-background">
          <div class="twp-video-foreground">
            <iframe
              width="420"
              height="345"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=2"
            ></iframe>
          </div>
          <div class="twp-video-layer"></div>
        </div>
      </div>
    );
  }
}
