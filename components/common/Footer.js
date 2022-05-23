import React from "react";
import { Row, Container } from "react-bootstrap";
// icons
import { BsGithub, BsLinkedin, BsSkype } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5 shadow-lg footer-container">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span className="fw-bold">Contact Me:</span>
        </div>

        <div>
          <a
            href="https://github.com/parham-ab"
            target={"_blank"}
            className="me-4 text-reset github"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/parham-abolghasemi/"
            target={"_blank"}
            className="me-4 text-reset linkdin"
          >
            <BsLinkedin />
          </a>
          <a
            href="mailto:parhamab17@gmail.com"
            target={"_blank"}
            className="me-4 text-reset gmail"
          >
            <SiGmail />
          </a>
        </div>
      </section>
      <Container className="p-4">
        <Row>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h4>About This Project</h4>

            <p>
              This is actually my second project with Next Js & it's more
              complex compare to my first Next project, so I hope you enjoy it
              anyway. I'd be appreciate if you send me your suggestions,
              comments, criticisms & job offers ✌.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h4>About Me</h4>

            <p>
              Im' Parham Abolghasemi, Im a Front-End developer & I currently
              learning Next Js. here on my portfolio website, I have prepared a
              box for you that you can{" "}
              <a
                href="https://parham-portfolio.netlify.app/#contact"
                target={"_blank"}
                className="fw-bold text-dark"
              >
                Contact me
              </a>
              . I'll be happy if you send me your suggestions, comments,
              criticisms & job offers .
            </p>
          </div>
        </Row>
      </Container>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Made width <span className="text-danger">❤ </span> by{" "}
        <a
          className="text-dark fw-bold"
          href="https://parham-ab.netlify.app/"
          target={"_blank"}
        >
          Parham Abolghasemi
        </a>
      </div>
    </footer>
  );
};

export default Footer;
