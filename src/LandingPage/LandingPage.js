import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section className="landingPage">
      <article className="landingPageArt">
        {/* "shake it up" section */}
        <section className="shakeItUp">
          <article className="shakeItUpArt">
            {/* section - 1 - left side */}
            <div className="shakeItUpLeftDiv">
              <article className="shakeItUpLeftArt">
                <h1 className="shakeItUpHeading">Shake It Up!!!</h1>
                <p className="shakeItUpPara">
                  Integer et massa nisi. Quisque fermentum leo eget sagittis
                  aliquet. Vivamus tincidunt blandit vestibulum. Nunc vitae
                  faucibus libero. Duis cursus arcu nec tincidunt placerat.
                </p>
                <button className="OrderNowBtn">ORDER NOW</button>
              </article>
            </div>
            {/* section - 2 - right side */}
            <div className="shakeItUpRightDiv">
              <img src="assets/bg.png" alt="shake image" />
            </div>
          </article>
        </section>

        {/* "shake Heaven" section */}
        <section className="shakeHeaven">
          <article className="shakeHeavenArt">
            {/* section - 2 - left side */}
            <div className="shakeHeavenLeftDiv">
              <img src="assets/pics.png" alt="shake heaven image" />
            </div>
            {/* section - 2 - right side */}
            <div className="shakeHeavenRightDiv">
              <article className="shakeHeavenRightArt">
                <h1 className="shakeHeavenh1">
                  <span className="shakeHeavenspan">Shake Heaven </span>{" "}
                  <span>&nbsp; is &nbsp; </span>
                  {"  "}
                  <img src="assets/lit.svg" alt="fire lit image" />
                </h1>
                <p className="shakeHeavenPara">
                  Maecenas et tempus urna. Quisque rhoncus eget arcu condimentum
                  lobortis. Integer pharetra mauris ac mauris vehicula lobortis.
                  Sed vitae nibh dolor. Nullam aliquet, odio eu molestie
                  posuere, mauris quam ultricies leo, nec tempor nibh nunc ac
                  eros. Etiam nec tristique diam. Aliquam venenatis nulla id
                  tincidunt facilisis. Sed eu mattis nibh.
                </p>
                <h6 className="shakeHeavenh6">Store Locations</h6>
              </article>
                      </div>
                      {/* smaller screen */}
            <div className="shakeHeavenLeftDiv1">
              <img src="assets/pics.png" alt="shake heaven image" />
            </div>
          </article>
        </section>
      </article>
    </section>
  );
};

export default LandingPage;
