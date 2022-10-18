import React from "react";

import NavBar from "../navBar/navBar";

const PortfolioPage = () => {
    return (
        <>
            <NavBar />
            <div className="screen" id="Portfolio">
                <div className="main">
                    <header className="header_three">
                        <div className="container">
                            <div id="progressBar" className="progressBar"></div>
                            <div id="scrollPath"></div>
                            <section className="gallery">
                                <div className="frame">
                                    <div className="frame__content">
                                        <h2>Beautiful World</h2>
                                    </div>
                                </div>

                                <div className="frame">
                                    <div className="frame__content">
                                        <div
                                            className="frame-media frame-media_left"
                                            style="background-image: url(./img/ScrollImages/1.jpg)"
                                        ></div>
                                    </div>
                                </div>

                                <div className="frame frame_bg">
                                    <div className="frame__content">
                                        <video
                                            className="frame-media frame-media_right"
                                            src="media/video_optimized.mp4"
                                            autoplay
                                            loop
                                            muted
                                        ></video>
                                    </div>
                                </div>

                                <div className="frame"></div>

                                <div className="frame">
                                    <div className="frame__content text-right">
                                        <h3>Pure planet</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur elit adipisicing. Nemo
                                            fugit, rerum dolorem assumenda
                                            consequatur dicta error iure
                                            laboriosam temporibus.
                                        </p>
                                    </div>
                                </div>

                                <div className="frame frame_bg">
                                    <div className="frame__content">
                                        <div
                                            className="frame-media frame-media_left"
                                            style="background-image: url(./img/ScrollImages/2.jpg)"
                                        ></div>
                                    </div>
                                </div>

                                <div className="frame"></div>

                                <div className="frame frame_bg">
                                    <div className="frame__content">
                                        <div
                                            className="frame-media frame-media_right"
                                            style="background-image: url(./img/ScrollImages/3.jpg)"
                                        ></div>
                                    </div>
                                </div>

                                <div className="frame"></div>

                                <div className="frame">
                                    <div className="frame__content text-left">
                                        <h3>Ask the Mountains</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur elit. Rerum dolorem
                                            assumenda consequatur dicta error
                                            iure laboriosam temporibus omnis
                                            quae eaque aliquam esse unde
                                            accusamus dolores non soluta.
                                        </p>
                                    </div>
                                </div>

                                <div className="frame frame_bg">
                                    <div className="frame__content">
                                        <div
                                            className="frame-media frame-media_right"
                                            style="background-image: url(./img/ScrollImages/4.jpg)"
                                        ></div>
                                    </div>
                                </div>

                                <div className="frame">
                                    <div className="frame__content">
                                        <video
                                            className="frame-media frame-media_left"
                                            src="media/video_optimized.mp4"
                                            autoplay
                                            loop
                                            muted
                                        ></video>
                                    </div>
                                </div>

                                <div className="frame"></div>
                                <div className="frame"></div>

                                <div className="frame frame_bg">
                                    <div className="frame__content">
                                        <div
                                            className="frame-media frame-media_right"
                                            style="background-image: url(./img/ScrollImages/5.jpg)"
                                        ></div>
                                    </div>
                                </div>

                                <div className="frame frame_bg">
                                    <div className="frame__content">
                                        <video
                                            className="frame-media"
                                            src="media/video_optimized.mp4"
                                            autoplay
                                            loop
                                            muted
                                        ></video>
                                    </div>
                                </div>

                                <div className="frame"></div>
                                <div className="frame"></div>

                                <div className="frame">
                                    <div className="frame__content">
                                        © WebDesign Master
                                    </div>
                                </div>
                            </section>
                        </div>

                        <img
                            className="soundbutton paused"
                            src="./img/ScrollImages/gif/sound.gif"
                            alt="Alt"
                        />
                        <audio
                            className="audio"
                            src="media/sound.mp3"
                            loop
                        ></audio>
                    </header>
                </div>
                <div className="shadow one"></div>
                <div className="shadow two"></div>
            </div>
        </>
    );
};

export default PortfolioPage;
