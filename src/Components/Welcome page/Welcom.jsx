import React from "react";
import "./Welcome.css";
import { ReactTyped } from "react-typed";

function Welcom() {
  return (
    <div id="Welcompage">
      <div id="underwelcom">
        <h2 id="h2forwelcome">Welcome To</h2>
        <h1 id="h2forwelcometyped">
          <ReactTyped
            strings={["MY PG FINDER"]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </h1>
        <p id="paratext">
          Welcome to MY PG FINDER, your go-to destination for finding the
          perfect PG (Paying Guest) accommodation tailored to students' needs!
          Whether you're a college freshman embarking on your educational
          journey or a seasoned student seeking a comfortable and convenient
          living space, our platform offers an extensive database of PG listings
          to match your preferences. At StudentPGSearch.com, we understand the
          importance of finding a suitable living arrangement that complements
          your academic pursuits. Our user-friendly interface allows you to
          effortlessly browse through a variety of PG options based on location,
          amenities, budget, and other customizable filters. Whether you're
          looking for a cozy single room or shared accommodation with fellow
          students, we've got you covered. Our website provides comprehensive
          information for each listing, including photos, detailed descriptions,
          amenities offered, rental rates, and contact information for property
          owners or managers. With our intuitive search functionality, you can
          easily narrow down your options and find the perfect PG that meets
          your specific requirements. In addition to simplifying the search
          process, MY PG FINDER also strives to ensure transparency and
          reliability. We verify each listing to ensure accuracy and legitimacy,
          giving you peace of mind when making your accommodation decision. Our
          platform also features user reviews and ratings, allowing you to learn
          from the experiences of previous tenants and make informed choices.
          Whether you're studying in a bustling metropolis or a quaint college
          town, StudentPGSearch.com is your trusted companion in finding the
          ideal PG accommodation. Start your search today and embark on your
          academic journey with confidence and comfort!
        </p>
        <h2 id="h2forbeni">Benifets of our website</h2>
        <p className="pforbeni">
          <div className="numbericon">
            <i class="fa-solid fa-1 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            PG finder websites provide a convenient platform for individuals to
            search for paying guest accommodations according to their
            preferences and requirements. Users can easily browse through
            various options from the comfort of their homes or on-the-go using
            their smartphones.
          </p>
        </p>
        <p className="pforbeni">
          <div className="numbericon">
            <i class="fa-solid fa-2 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            These websites typically feature a wide range of PG accommodations,
            including different locations, amenities, and price ranges, allowing
            users to explore multiple options before making a decision.
          </p>
        </p>
        <p className="pforbeni">
          <div className="numbericon">
            <i class="fa-solid fa-3 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            PG finder websites usually provide detailed information about each
            listing, including photos, amenities, rental prices, and contact
            details. This information helps users make informed decisions based
            on their specific needs and preferences.
          </p>
        </p>
        <p className="pforbeni">
          <div className="numbericon">
            <i class="fa-solid fa-4 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            By using PG finder websites, individuals can save time that would
            otherwise be spent visiting multiple locations or contacting
            numerous landlords or agents. They can quickly narrow down their
            search based on criteria such as location, budget, and amenities
          </p>
        </p>
        <p className="pforbeni">
          <div className="numbericon">
            <i class="fa-solid fa-5 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            Many PG finder websites allow users to read reviews and ratings from
            previous tenants, providing valuable insights into the quality of
            accommodations, landlord/owner behavior, and overall living
            experience. This helps users make more confident decisions and avoid
            potential issues.
          </p>
        </p>
        <p className="pforbeni">
          <div className="numbericon">
            <i class="fa-solid fa-6 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            PG finder websites often offer advanced filtering options that allow
            users to refine their search based on specific criteria such as
            location, rent range, amenities, and preferences (e.g.,
            gender-specific accommodations, pet-friendly options).
          </p>
        </p>
        <p className="pforbeni">
          <div className="numbericon">
            <i class="fa-solid fa-7 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            These platforms are accessible 24/7, allowing users to search for PG
            accommodations at any time that suits them, regardless of their
            location.
          </p>
        </p>
        <p className="pforbeni">
          <div className="numbericon">
            <i class="fa-solid fa-8 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            Using PG finder websites can potentially save users money by helping
            them find accommodations within their budget and avoid unnecessary
            expenses associated with traditional house-hunting methods
          </p>
        </p>
      </div>
    </div>
  );
}

export default Welcom;
