import React from "react";
import MyLogo from "./mylogo";
import "../style/nav.css";


import dummy from "../assests/boll.svg";
export default function nav() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <MyLogo />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <div className="nav-mb-search">
                <div>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Inspiration Dropdown  */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Inspiration
                  </a>
                  <div className="dropdown-menu custom-down c-width-A">
                    <div className="row">
                      {/* Box 1 */}
                      <div className="col-12 col-lg-8 box-1">
                        <ul className="drop-ul">
                          {/* li 1 */}
                          <li>
                            <a href="/" className="nv-link">
                              {/* Icon box  */}
                              <div className="icon-bx">
                                <span>
                                  <img src={dummy} alt="/" />
                                </span>
                              </div>

                              {/* Title txt box  */}
                              <div className="naming">
                                <h5>Explore Design Work</h5>
                                <h6>Trending designs to inspire you</h6>
                              </div>

                              {/* Arrow box  */}
                              <div className="arrow-div">
                                <i class="fa-solid fa-arrow-right"></i>
                              </div>
                            </a>
                          </li>

                          {/* li 2 */}
                          <li>
                            <a href="/" className="nv-link">
                              {/* Icon box  */}
                              <div className="icon-bx">
                                <span>
                                  <img src={dummy} alt="/" />
                                </span>
                              </div>

                              {/* Title txt box  */}
                              <div className="naming">
                                <h5>New & Noteworthy</h5>
                                <h6>Up-and-coming designers</h6>
                              </div>

                              {/* Arrow box  */}
                              <div className="arrow-div">
                                <i class="fa-solid fa-arrow-right"></i>
                              </div>
                            </a>
                          </li>

                          {/* li 3 */}
                          <li>
                            <a href="/" className="nv-link">
                              {/* Icon box  */}
                              <div className="icon-bx">
                                <span>
                                  <img src={dummy} alt="/" />
                                </span>
                              </div>

                              {/* Title txt box  */}
                              <div className="naming">
                                <h5>Playoffs</h5>
                                <h6>Work designers are riffing on</h6>
                              </div>

                              {/* Arrow box  */}
                              <div className="arrow-div">
                                <i class="fa-solid fa-arrow-right"></i>
                              </div>
                            </a>
                          </li>

                          {/* li 4 */}
                          <li>
                            <a href="/" className="nv-link">
                              {/* Icon box  */}
                              <div className="icon-bx">
                                <span>
                                  <img src={dummy} alt="/" />
                                </span>
                              </div>

                              {/* Title txt box  */}
                              <div className="naming">
                                <h5>blog</h5>
                                <h6>Interviews, tutorials, and more</h6>
                              </div>

                              {/* Arrow box  */}
                              <div className="arrow-div">
                                <i class="fa-solid fa-arrow-right"></i>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>

                      {/* Box2  */}
                      <div className="col-4 box-2">
                        <h6 className="mini-hd">Browse Categories</h6>
                        <ul>
                          <li>
                            <a href="/">Animation</a>
                          </li>
                          <li>
                            <a href="/">Branding</a>
                          </li>
                          <li>
                            <a href="/">Illustration</a>
                          </li>
                          <li>
                            <a href="/">Mobile</a>
                          </li>
                          <li>
                            <a href="/">Print</a>
                          </li>
                          <li>
                            <a href="/">Product Design</a>
                          </li>
                          <li>
                            <a href="/">Typography</a>
                          </li>
                          <li>
                            <a href="/">Web Design</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Find Work Dropdown  */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Find Work
                  </a>
                  <div className="dropdown-menu custom-down c-width-B">
                    {/* Box 1 */}
                    <div className="box-1">
                      <ul className="drop-ul">
                        {/* li 1 */}
                        <li>
                          <a href="/" className="nv-link">
                            {/* Icon box  */}
                            <div className="icon-bx">
                              <span>
                                <img src={dummy} alt="/" />
                              </span>
                            </div>

                            {/* Title txt box  */}
                            <div className="naming">
                              <h5>Job Board</h5>
                              <h6>Find your dream design job</h6>
                            </div>

                            {/* Arrow box  */}
                            <div className="arrow-div">
                              <i class="fa-solid fa-arrow-right"></i>
                            </div>
                          </a>
                        </li>

                        {/* li 2 */}
                        <li>
                          <a href="/" className="nv-link">
                            {/* Icon box  */}
                            <div className="icon-bx">
                              <span>
                                <img src={dummy} alt="/" />
                              </span>
                            </div>

                            {/* Title txt box  */}
                            <div className="naming">
                              <h5>
                                Freelance Projects{" "}
                                <span
                                  class=" badge ms-2"
                                  style={{ backgroundColor: "var(--primary)" }}
                                >
                                  PRO+
                                </span>
                              </h5>
                              <h6>An exclusive list for contract work</h6>
                            </div>

                            {/* Arrow box  */}
                            <div className="arrow-div">
                              <i class="fa-solid fa-arrow-right"></i>
                            </div>
                          </a>
                        </li>

                        {/* li 3 */}
                        <li>
                          <a href="/" className="nv-link">
                            {/* Icon box  */}
                            <div className="icon-bx">
                              <span>
                                <img src={dummy} alt="/" />
                              </span>
                            </div>

                            {/* Title txt box  */}
                            <div className="naming">
                              <h5>Want freelance design projects?</h5>
                              <h6>Get new leads in your inbox every day</h6>
                            </div>

                            {/* Arrow box  */}
                            <div className="arrow-div">
                              <i class="fa-solid fa-arrow-right"></i>
                            </div>
                          </a>
                        </li>

                        {/* li 4 */}
                        <li>
                          <a href="/" className="nv-link">
                            {/* Icon box  */}
                            <div className="icon-bx">
                              <span>
                                <img src={dummy} alt="/" />
                              </span>
                            </div>

                            {/* Title txt box  */}
                            <div className="naming">
                              <h5>Personalize your profile with video</h5>
                              <h6>
                                Introduce yourself to new clients with Pitch
                              </h6>
                            </div>

                            {/* Arrow box  */}
                            <div className="arrow-div">
                              <i class="fa-solid fa-arrow-right"></i>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Learn Design Dropdown  */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Learn Design
                  </a>
                  <div className="dropdown-menu custom-down c-width-B">
                    {/* Box 1 */}
                    <div className="box-1">
                      <ul className="drop-ul">
                        {/* li 1 */}
                        <li>
                          <a href="/" className="nv-link">
                            {/* Icon box  */}
                            <div className="icon-bx">
                              <span>
                                <img src={dummy} alt="/" />
                              </span>
                            </div>

                            {/* Title txt box  */}
                            <div className="naming">
                              <h5>Certified Product Design Course</h5>
                              <h6>Learn product design in just 16 weeks...</h6>
                            </div>

                            {/* Arrow box  */}
                            <div className="arrow-div">
                              <i class="fa-solid fa-arrow-right"></i>
                            </div>
                          </a>
                        </li>

                        {/* li 2 */}
                        <li>
                          <a href="/" className="nv-link">
                            {/* Icon box  */}
                            <div className="icon-bx">
                              <span>
                                <img src={dummy} alt="/" />
                              </span>
                            </div>

                            {/* Title txt box  */}
                            <div className="naming">
                              <h5>Introduction to UI Design</h5>
                              <h6>
                                Learn UI Design Basics and Figma Fundamentals...
                              </h6>
                            </div>

                            {/* Arrow box  */}
                            <div className="arrow-div">
                              <i class="fa-solid fa-arrow-right"></i>
                            </div>
                          </a>
                        </li>

                        {/* li 3 */}
                        <li>
                          <a href="/" className="nv-link">
                            {/* Icon box  */}
                            <div className="icon-bx">
                              <span>
                                <img src={dummy} alt="" />
                              </span>
                            </div>

                            {/* Title txt box  */}
                            <div className="naming">
                              <h5>Design Systems Course</h5>
                              <h6>Scale Design Systems in 8 weeks...</h6>
                            </div>

                            {/* Arrow box  */}
                            <div className="arrow-div">
                              <i class="fa-solid fa-arrow-right"></i>
                            </div>
                          </a>
                        </li>

                        {/* li 4 */}
                        <li>
                          <a href="/" className="nv-link">
                            {/* Icon box  */}
                            <div className="icon-bx">
                              <span>
                                <img src={dummy} alt="" />
                              </span>
                            </div>

                            {/* Title txt box  */}
                            <div className="naming">
                              <h5>Design Career Prep Course</h5>
                              <h6>
                                Land your dream job! You'll have a career
                                support specialist to review your portfolio...
                              </h6>
                            </div>

                            {/* Arrow box  */}
                            <div className="arrow-div">
                              <i class="fa-solid fa-arrow-right"></i>
                            </div>
                          </a>
                        </li>

                        {/* li 5 */}
                        <li>
                          <a href="/" className="nv-link">
                            {/* Icon box  */}
                            <div className="icon-bx">
                              <span>
                                <img src={dummy} alt="" />
                              </span>
                            </div>

                            {/* Title txt box  */}
                            <div className="naming">
                              <h5>Browse our courses & workshops</h5>
                              <h6>
                                Level up your skills with our interactive
                                courses and workshops…
                              </h6>
                            </div>

                            {/* Arrow box  */}
                            <div className="arrow-div">
                              <i class="fa-solid fa-arrow-right"></i>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Go Pro  */}
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    go pro
                  </a>
                </li>

                {/* Hire Designer  */}
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    hire designers
                  </a>
                </li>
              </ul>
            </div>

            {/* BTN Box  */}
            <div className="nav-btn-box">
              <div className="d-m-none">
                <button type="button" class="btn search-Btn">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              <div>
                <a href="/" type="button" class="btn signin-btn">
                  Sign in
                </a>
              </div>

              <div className="d-m-none">
                <a href="/" type="button" class="btn my-btn btn-prim">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
