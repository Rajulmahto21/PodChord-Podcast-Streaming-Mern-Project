import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import image1 from "./audiobookshelf_files/1.jpg";
import image2 from "./audiobookshelf_files/2.jpg";
import image3 from "./audiobookshelf_files/3.jpg";
import image4 from "./audiobookshelf_files/4.jpg";
import image5 from "./audiobookshelf_files/5.jpg";
import image6 from "./audiobookshelf_files/6.jpg";
import image7 from "./audiobookshelf_files/7.jpg";
import image8 from "./audiobookshelf_files/8.jpg";
import image9 from "./audiobookshelf_files/9.jpg";
import image10 from "./audiobookshelf_files/10.jpg";
import image11 from "./audiobookshelf_files/11.jpg";
import image12 from "./audiobookshelf_files/12.jpg";
import image13 from "./audiobookshelf_files/13.jpg";
import image14 from "./audiobookshelf_files/14.jpg";
import image15 from "./audiobookshelf_files/15.jpg";
import image16 from "./audiobookshelf_files/16.jpg";
import image17 from "./audiobookshelf_files/17.jpg";
import image18 from "./audiobookshelf_files/18.jpg";
import image19 from "./audiobookshelf_files/19.jpg";
import image20 from "./audiobookshelf_files/20.jpg";
import image21 from "./audiobookshelf_files/21.jpg";
import image22 from "./audiobookshelf_files/22.jpg";
import image23 from "./audiobookshelf_files/23.jpg";
import image24 from "./audiobookshelf_files/24.jpg";
import image25 from "./audiobookshelf_files/25.jpg";
import image26 from "./audiobookshelf_files/26.jpg";
import image27 from "./audiobookshelf_files/27.jpg";
import image28 from "./audiobookshelf_files/28.jpg";
import image29 from "./audiobookshelf_files/29.jpg";
import image30 from "./audiobookshelf_files/30.jpg";
import image31 from "./audiobookshelf_files/31.jpg";
import image32 from "./audiobookshelf_files/32.jpg";
import image33 from "./audiobookshelf_files/33.jpg";
import image34 from "./audiobookshelf_files/34.webp";
import image35 from "./audiobookshelf_files/35.webp";
import image36 from "./audiobookshelf_files/36.jpg";
import image37 from "./audiobookshelf_files/37.webp";
import image38 from "./audiobookshelf_files/38.webp";
import image39 from "./audiobookshelf_files/39.jpg";
import image40 from "./audiobookshelf_files/40.jpg";
import image41 from "./audiobookshelf_files/41.webp";
import image42 from "./audiobookshelf_files/42.jpg";
import image43 from "./audiobookshelf_files/43.webp";
import image44 from "./audiobookshelf_files/44.jpg";
import image45 from "./audiobookshelf_files/45.jpg";
import image46 from "./audiobookshelf_files/46.jpg";
import image47 from "./audiobookshelf_files/47.jpg";
import image48 from "./audiobookshelf_files/48.jpg";
import image49 from "./audiobookshelf_files/49.jpg";
import logo from "./audiobookshelf_files/Logo.png";
import ProtectedPage from "./Protected_new";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react"


function HomePage() {
  return (
    <div>
      <div>
        <div className="w-screen h-screen max-w-full max-h-screen overflow-hidden text-white bg-gradient">
          <div className="w-full h-full overflow-hidden bg-gradient">
            <div className="absolute top-0 left-0 w-full h-screen max-h-screen overflow-hidden pointer-events-none max-w-screen">
              <div className="relative flex w-full h-32 px-2 bookshelfRow md:h-48 md:px-8">
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image9}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image10}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image3}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image4}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image5}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image6}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image7}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image8}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image1}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image12}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-3 bookshelfDivider md:h-4" />
              </div>
              <div className="relative flex w-full h-32 px-2 bookshelfRow md:h-48 md:px-8">
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image11}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image18}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image13}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image14}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image15}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image16}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image17}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image2}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image31}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image32}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-3 bookshelfDivider md:h-4" />
              </div>
              <div className="relative flex w-full h-32 px-2 bookshelfRow md:h-48 md:px-8">
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image19}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image20}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image21}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image22}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image23}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image24}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image36}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image35}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image34}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image33}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-3 bookshelfDivider md:h-4" />
              </div>
              <div className="relative flex w-full h-32 px-2 bookshelfRow md:h-48 md:px-8">
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image25}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image26}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image27}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image28}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image42}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image41}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image40}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image39}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image38}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image37}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-3 bookshelfDivider md:h-4" />
              </div>
              <div className="relative flex w-full h-32 px-2 bookshelfRow md:h-48 md:px-8">
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image29}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image30}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image43}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image44}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image45}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image46}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image47}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image48}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300">
                  <div className="relative w-24 h-24 md:h-40 md:w-40 bg-primary">
                    <img
                      src={image49}
                      className="absolute top-0 left-0 z-10 object-contain w-full h-full box-shadow-book"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-3 bookshelfDivider md:h-4" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-3 bookshelfDivider md:h-4" />
            </div>
            <div className="absolute top-0 left-0 z-20 w-full h-full overlay" />
          </div>
          <div className="absolute top-0 left-0 z-30 w-full h-full">
            <div className="absolute bottom-0 left-0 w-10 h-10" />
            <div className="button-container">
              <div className="button-container">
                <button style={{ "--content": "'Explore'" }} onClick={() => {
    console.log("Hello");
    window.location.href = "https://explore-deploy.vercel.app/";
  }}>
                  <div className="left"></div>
                  Explore
                  <div className="right"></div>
                </button>
                < SignedOut>
                <button style={{ "--content": "'LogIn'" }}>
                  <div className="left"></div>
                  
                  <a href="/sign-in">LogIn</a>
                  <div className="right"></div>
                </button>
                </SignedOut>
                < SignedIn>
                  <div>
                  <ProtectedPage>
                  </ProtectedPage>
                  </div>
                </SignedIn>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <img src={logo} width={300} height={250} alt="Logo" />
              <h1 className="pt-4 text-4xl text-white custom-font md:text-6xl md:pt-8 font-book">
                PodChord
              </h1>
              <p className="pt-4 text-sm text-center text-gray-300 md:text-3xl">
                Podcast Streaming Platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
