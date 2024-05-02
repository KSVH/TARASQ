import React from "react";
import icon from "../../../../images/social/linkedin.png";
import "./footer.css";

export default function FooterTwo() {
  return (
    <>
      <footer className="bg-background-pink">
        <div className="container mx-auto px-4">
          <div class="grid grid-cols-2 gap-4 py-5">
            <div className="flex items-center">
              <h5 className="font-bold text-paragraph" data-text="Created by Yuna ❤️">
                Created by Yuna ❤️
              </h5>
            </div>
            <div>
              <div className="flex justify-end items-center">
                <div>
                  <a href="https://www.linkedin.com/in/camille-frau-636556194/">
                    <img src={icon} className="h-10 w-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
