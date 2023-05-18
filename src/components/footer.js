import React from "react";

// import Ball from "./images/boll.svg";

import MyLogo from "./mylogo";
function footer() {
  return (
    <>
      <footer className="container-fluid secGap">
        <div className="foot-row">
          {/* 1st Column  */}
          <div className="col-A">
            <a href="/">
              <MyLogo />
            </a>
            <p>
              Dribbble is the world’s leading community for creatives to share,
              grow, and get hired.
            </p>

            {/* Social boc  */}
            <div className="social-icons-div mt-4">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i class="fa-regular fa-circle-dot"></i>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-pinterest"></i>
              </a>
            </div>
          </div>

          {/* 2nd Column  */}
          <div className="col-X">
            <h4>For designers</h4>
            <ul>
              <li>
                <a href="/">Go Pro!</a>
              </li>
              <li>
                <a href="/">Explore design work</a>
              </li>
              <li>
                <a href="/">Design blog</a>
              </li>
              <li>
                <a href="/">Overtime podcast</a>
              </li>
              <li>
                <a href="/">Playoffs</a>
              </li>
              <li>
                <a href="/">Code of conduct</a>
              </li>
            </ul>
          </div>

          {/* 3rd Column  */}
          <div className="col-X">
            <div className="mb-4">
              <h4>Hire designers</h4>
              <ul>
                <li>
                  <a href="/">Post a job opening</a>
                </li>
                <li>
                  <a href="/">Post a freelance project</a>
                </li>
                <li>
                  <a href="/">Search for designers</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Brands</h4>
              <ul>
                <li>
                  <a href="/">Advertise with us</a>
                </li>
              </ul>
            </div>
          </div>

          {/* 4th Column  */}
          <div className="col-X">
            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
                <li>
                  <a href="/">Media kit</a>
                </li>
                <li>
                  <a href="/">Testimonials</a>
                </li>
                <li>
                  <a href="/">API</a>
                </li>
                <li>
                  <a href="/">Terms of service</a>
                </li>
                <li>
                  <a href="/">Privacy policy</a>
                </li>
                <li>
                  <a href="/">Cookie policy</a>
                </li>
              </ul>
            </div>
          </div>

          {/* 5th Column  */}
          <div className="col-X">
            <div className="mb-4">
              <h4>Directories</h4>
              <ul>
                <li>
                  <a href="/">Design jobs</a>
                </li>
                <li>
                  <a href="/">Designers for hire</a>
                </li>
                <li>
                  <a href="/">Freelance designers for hire</a>
                </li>
                <li>
                  <a href="/">Tags</a>
                </li>
                <li>
                  <a href="/">Places</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Design assets</h4>
              <ul>
                <li>
                  <a href="/">Dribbble Marketplace</a>
                </li>
                <li>
                  <a href="/">Creative Market</a>
                </li>
                <li>
                  <a href="/">Fontspring</a>
                </li>
                <li>
                  <a href="/">Font Squirrel</a>
                </li>
              </ul>
            </div>
          </div>

          {/* 6th Column  */}
          <div className="col-X">
            <div className="mb-4">
              <h4>Design Resources</h4>
              <ul>
                <li>
                  <a href="/">Freelancing</a>
                </li>
                <li>
                  <a href="/">Design Hiring</a>
                </li>
                <li>
                  <a href="/">Design Portfolio</a>
                </li>
                <li>
                  <a href="/">Design Education</a>
                </li>
                <li>
                  <a href="/">Creative Process</a>
                </li>
                <li>
                  <a href="/">Design Industry Trends</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <p className="copyright">© 2023 Dribbble. All rights reserved.</p>
          <div className="mini-f">
            <div className="storts-div">
              <p>
                <span>555458449</span>
                shots dribbbled
              </p>
              <img src="https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg" alt="foot-icons" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
