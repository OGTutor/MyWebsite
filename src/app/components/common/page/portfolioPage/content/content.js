import image from "../media/img/neon-japan-light.jpg";
import video from "../media/video/preloader.mp4";

const content = {
    first: { title: "Portfolio Page" },
    secondLeft: {
        position: "left",
        image: `${image}`,
        bg: false,
        contents: "image"
    },
    thirdRight: {
        position: "right",
        video: `${video}`,
        bg: true,
        contents: "video"
    },
    fourthRight: {
        position: "right",
        title: "Lorem ipsum",
        paragraph:
            "Lorem ipsum dolor sit amet, consectetur elit. Rerum dolorem assumenda consequatur dicta error iure laboriosam temporibus omnis quae eaque aliquam esse unde accusamus dolores non soluta.",
        bg: false,
        contents: "text"
    },
    fifthLeft: {
        position: "left",
        image: `${image}`,
        bg: true,
        contents: "image"
    },
    sixthRight: {
        position: "right",
        image: `${image}`,
        bg: true,
        contents: "image"
    },
    seventhLeft: {
        position: "left",
        title: "Lorem ipsum",
        paragraph:
            "Lorem ipsum dolor sit amet, consectetur elit. Rerum dolorem assumenda consequatur dicta error iure laboriosam temporibus omnis quae eaque aliquam esse unde accusamus dolores non soluta.",
        bg: false,
        contents: "text"
    },
    eighthRight: {
        position: "right",
        image: `${image}`,
        bg: true,
        contents: "image"
    },
    ninthLeft: {
        position: "left",
        video: `${video}`,
        bg: false,
        contents: "video"
    },
    tenthRight: {
        position: "right",
        image: `${image}`,
        bg: true,
        contents: "image"
    }
};

export default content;
