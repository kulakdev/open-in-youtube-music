// List all the YouTube subdomains here
const youtubeURLs = [
    "www.youtube.com/",
    "m.youtube.com/",
    "youtube.com/",
];

// List all the YouTube Music subdomains here
const youtubeMusicURLs = [
    "music.youtube.com/",
    "www.music.youtube.com/",
    "music.youtube.com/",
    "m.youtube.com/music",
];

const currentUrl = window.location.href;

let urlObject = new URL(currentUrl);
console.log(urlObject.hostname);

const toggleButton = document.getElementById("toggleButton");

if (youtubeURLs.includes(urlObject.hostname + "/")) {
    console.log("Standard YouTube detected");
    renderStandardButton();
}

if (youtubeMusicURLs.includes(urlObject.hostname + "/")) {
    console.log("Youtube music detected");
    renderMusicButton()
}

function renderStandardButton() {
    setTimeout(() => {
        const buttonYoutube = document.querySelector("#owner");

        if (buttonYoutube) {
            let button = document.createElement("button");
            button.textContent = "▶";
            button.classList.add("button-style");
            buttonYoutube.appendChild(button);

            button.addEventListener("click", handleClick);
            button.addEventListener("mouseover", handleMouseOver);
            button.addEventListener("mouseout", handleMouseOut);

            let mouseIsHovering = false;

            button.addEventListener("mouseenter", () => {
                isMouseHovering(true);
            });

            button.addEventListener("mouseleave", () => {
                isMouseHovering(false);
            });

            function handleClick() {
                const replacedString = currentUrl.replace(/www\.(?!m\.|\/\/)/, "music.");
                window.open(replacedString, "_self");
            }

            function handleMouseOver() {
                setTimeout(() => {
                    if (mouseIsHovering) {
                        button.textContent = "▶ Music";
                    }
                }, 100);
            }

            function handleMouseOut() {
                button.textContent = "▶";
            }

            function isMouseHovering(didEnter) {
                mouseIsHovering = didEnter;
            }
        }
    }, 2000);
}

// function renderMusicButton() {
//     if (toggleButton) {
//         const buttonsYoutubeMusic = document.getElementsByClassName("middle-controls-buttons");

//         // Iterate through the collection of elements
//         for (const buttonYoutubeMusic of buttonsYoutubeMusic) {
//             let button = document.createElement("div");
//             button.textContent = "▷";
//             button.classList.add("music-button-style");
//             buttonYoutubeMusic.appendChild(button);

//             button.addEventListener("click", handleClick)

//             function handleClick() {
//                 const replacedString = currentUrl.replace(/music\.youtube/g, "www.youtube");
//                 window.open(replacedString, "_self");
//             }
//         }
//     }
// }