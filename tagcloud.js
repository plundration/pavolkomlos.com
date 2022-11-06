const myTags = [
    "React",
    "Node.js",
    "JS/TS",
    "CSS",
    "HTML",
    "C",
    "C++",
    "C#",
    "git",
    "MySQL",
    "Unity",
    "NeoVIM",
    "Arch btw",
    "RayLib",
];

console.log(document.querySelector(".content"));
var tagCloud = TagCloud(".content", myTags, {
    // radius in px
    radius: 200,

    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "fast",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true,
});
