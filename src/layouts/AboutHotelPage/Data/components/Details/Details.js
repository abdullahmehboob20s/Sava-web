import React, { useEffect, useRef, useState } from "react";
import styles from "./Details.module.css";
import detailsImg from "assets/images/details-img.png";
import Tabs from "components/Tabs/Tabs";
import TabButton from "components/Tabs/TabButton";
import TabPanel from "components/Tabs/TabPanel";
import Bullet from "components/Bullet/Bullet";

import { ReactComponent as SportIcon } from "assets/images/sport.svg";
import { ReactComponent as DinnerIcon } from "assets/images/dinner-icon.svg";
import { ReactComponent as WindIcon } from "assets/images/wind-icon-2.svg";
import ContactUsFooter from "layouts/ContactUsFooter/ContactUsFooter";
import ResponsiveStyling from "hooks/ResponsiveStyling";

function Details() {
  const markerRef = useRef(null);
  const containerRef = useRef(null);
  const [defaultTabIndex, setdefaultTabIndex] = useState(0);

  useEffect(() => {
    const button =
      containerRef.current.querySelectorAll("button")[defaultTabIndex];

    markerRef.current.style.top = button.offsetTop + "px";
    markerRef.current.style.height = button.scrollHeight + "px";
  }, []);

  const indicator = (e) => {
    markerRef.current.style.top = e.currentTarget.offsetTop + "px";
    markerRef.current.style.height = e.currentTarget.scrollHeight + "px";
  };

  return (
    <div>
      <div className={ResponsiveStyling("mb-40px", "mb-80px", "760px")}>
        <div className="container-wrapper">
          <div className={`${styles.details}`}>
            <header className="mb-40px">
              <div className={`${styles.headerLeft}`}>
                <p className="fs-22px black opacity-0_5 lh-1_4 font-hel-medium">
                  Pishina 3800 m2 dhe 6 rrëshqitëset zenë hapësira të mëdha në
                  këtë rezort. Do të gjeni 7 bare dhe restorante, një miniclub,
                  ambiente sportive dhe një qendër SPA.
                </p>
              </div>
              <div className={`${styles.headerRight}`}>
                <img src={detailsImg} alt="" />
              </div>
            </header>

            <Tabs defaultTab={defaultTabIndex}>
              <main>
                <div className={`${styles.tabsWrapper}`} ref={containerRef}>
                  <div className={`${styles.marker}`} ref={markerRef}></div>
                  <TabButton
                    tabIndex={0}
                    onClick={indicator}
                    className={`${styles.tabButton} block pointer text-blue`}
                    activeClassName={`${styles.tabButton_active} btn-blue`}
                  >
                    <span className={`${styles.tabButtonIcon} text-blue`}>
                      <WindIcon />
                    </span>
                    <span className="fs-26px font-hel-medium block">
                      PLAZHI & PISHINAT
                    </span>
                  </TabButton>
                  <TabButton
                    tabIndex={1}
                    onClick={indicator}
                    className={`${styles.tabButton} block pointer text-blue`}
                    activeClassName={`${styles.tabButton_active} btn-blue`}
                  >
                    <span className={`${styles.tabButtonIcon} text-blue`}>
                      <DinnerIcon />
                    </span>
                    <span className="fs-26px font-hel-medium block">
                      USHQIMI DHE PIJET
                    </span>
                  </TabButton>
                  <TabButton
                    tabIndex={2}
                    onClick={indicator}
                    className={`${styles.tabButton} block pointer text-blue`}
                    activeClassName={`${styles.tabButton_active} btn-blue`}
                  >
                    <span className={`${styles.tabButtonIcon} text-blue`}>
                      <SportIcon />
                    </span>
                    <span className="fs-26px font-hel-medium block">
                      ARGETIM DHE SPORT
                    </span>
                  </TabButton>
                </div>

                <div className={`${styles.tabBody}`}>
                  <TabPanel tabIndex={0}>
                    <h4 className="fs-28px black opacity-0_6 mb-25px font-hel-bold">
                      Plazhi & Pishinat
                    </h4>

                    <div>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">
                          Plazhi privat 400 mt larg hotelit.(ka nënkalim). Falas
                          edhe sherbimi me furgon (çdo 15 minuta)
                        </p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">
                          Shezlonët, Çadrat, Peshqirët e plazhit – pa pagesë
                        </p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">Beach Bar </p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">
                          Kabina zhveshjeje
                        </p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">
                          Pishina qendrore 3800 m2
                        </p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">
                          4 Rrëshqitëse për të rritur
                        </p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">
                          2 Rrëshqitëse për fëmijë
                        </p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">Pool Bar</p>
                      </Bullet>
                    </div>
                  </TabPanel>

                  <TabPanel tabIndex={1}>
                    <h4 className="fs-28px black opacity-0_6 mb-25px font-hel-bold">
                      Ultra All Inclusive (deri në 2 pas mesnate)
                    </h4>

                    <div>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">
                          Vaktet me vetëshërbim
                        </p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">
                          Snack në plazh dhe në pishinë
                        </p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">
                          Akullore në orë të caktuara
                        </p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">
                          Pije freskuese
                        </p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">
                          Pije alkoolike turke
                        </p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">Embëlsira</p>
                      </Bullet>
                      <Bullet className="mb-25px" bulletColor="#4C4C4C">
                        <p className="bullet fs-22px text-blue">Fruta</p>
                      </Bullet>
                    </div>
                  </TabPanel>

                  <TabPanel tabIndex={2}>
                    <div className="mb-55px">
                      <h4 className="fs-28px black opacity-0_6 mb-25px font-hel-bold">
                        Argëtim & Sport
                      </h4>

                      <div>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">
                            Rrëshqitëse uji
                          </p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">
                            Animacion aktiv
                          </p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">
                            Lojëra në pishinë
                          </p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Aquagym</p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">
                            Beach Volley
                          </p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Palestër</p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Ping-Pong</p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Tenis</p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Hamam</p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Sauna</p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Show</p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Muzikë</p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">live</p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Disko</p>
                        </Bullet>
                      </div>
                    </div>

                    <div className="mb-55px">
                      <h4 className="fs-28px black opacity-0_6 mb-25px font-hel-bold">
                        Për fëmijët
                      </h4>

                      <div>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">
                            3 rrëshqitëse
                          </p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Pishinë</p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">
                            Miniklub 4-12 vjeç
                          </p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Lodra</p>
                        </Bullet>
                      </div>
                    </div>

                    <div className="mb-55px">
                      <h4 className="fs-28px black opacity-0_6 mb-25px font-hel-bold">
                        Me pagesë
                      </h4>

                      <div>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">
                            Sportet ujore{" "}
                          </p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Bilardo</p>
                        </Bullet>
                        <Bullet className="mb-25px" bulletColor="#4C4C4C">
                          <p className="bullet fs-22px text-blue">Masazh</p>
                        </Bullet>
                      </div>
                    </div>
                  </TabPanel>
                </div>
              </main>
            </Tabs>
          </div>
        </div>
      </div>

      <ContactUsFooter />
    </div>
  );
}

export default Details;
