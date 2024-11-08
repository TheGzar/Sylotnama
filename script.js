function toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function showSection(sectionId) {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";


    document.getElementById("learnlink").style.backgroundColor = "rgba(174, 221, 176, 0)";
    document.getElementById("transliteratelink").style.backgroundColor = "rgba(174, 221, 176, 0)";
    document.getElementById("aboutlink").style.backgroundColor = "rgba(174, 221, 176, 0)";


    document.getElementById("learnlink").style.color = "#66BB6A";
    document.getElementById("transliteratelink").style.color = "#66BB6A";
    document.getElementById("aboutlink").style.color = "#66BB6A";

    if (sectionId != 'home') {
    //     document.getElementById('transliterate').style.display = "block";
    // }
    // else {
        document.getElementById(sectionId + "link").style.backgroundColor = "#66BB6A";
        document.getElementById(sectionId + "link").style.color = "white";
    }
    // document.getElementById('menuDropdown').style.display = "none";
}

// document.getElementById("nagriInput").addEventListener("input", function() {
//     const input = document.getElementById("nagriInput").value;
//     document.getElementById("banglaOutput").value = input;
// });

document.querySelector('#logo').addEventListener('click', () => {
    showSection('home');
});

// document.getElementById("nagriText").addEventListener("input", function() {
//     const updatedValue = document.getElementById("nagriText").value;
//     document.getElementById("banglaText").value = updatedValue;
// });

// document.getElementById("banglaText").addEventListener("input", function() {
//     const updatedValue =  document.getElementById("banglaText").value;
//     document.getElementById("nagriText").value = updatedValue;
// });

var nagriToBangla = {
    "ꠅ": "অ", // ও
    "ꠀ": "আ",
    "ꠁ": "ই",
    "ꠁ": "ঈ",
    "ꠃ": "উ",
    "ꠃ": "ঊ",
    "ꠞꠤ": "ঋ", // রি
    "ꠄ": "এ",
    "ꠅꠁ": "ঐ", // ওই
    "ꠅ": "ও",
    "ꠅꠃ": "ঔ", // ওউ
    "ꠇ": "ক",
    "ꠈ": "খ",
    "ꠉ": "গ",
    "ꠊ": "ঘ",
    "ꠋ": "ঙ", // ং
    "ꠌ": "চ",
    "ꠍ": "ছ",
    "ꠎ": "জ",
    "ꠏ": "ঝ",
    "ꠋ": "ঞ", // ং
    "ꠐ": "ট",
    "ꠑ": "ঠ",
    "ꠒ": "ড",
    "ꠓ": "ঢ",
    "ꠘ": "ন", // ণ
    "ꠔ": "ত",
    "ꠕ": "থ",
    "ꠖ": "দ",
    "ꠗ": "ধ",
    "ꠘ": "ন",
    "ꠙ": "প",
    "ꠚ": "ফ",
    "ꠛ": "ব",
    "ꠜ": "ভ",
    "ꠝ": "ম",
    "ꠎ": "জ", // য
    "ꠞ": "র",
    "ꠟ": "ল",
    "ꠡ": "স", // শ
    "ꠡ": "স", // স
    "ꠡ": "স", // ষ
    "ꠢ": "হ",
    "ꠁ": "ই", // য়
    "ꠠ": "ড়",
    "ꠠ": "ড়", // ঢ়
    "ꠔ": "ত",
    "ꠋ": "ং",
    "ꠂ": "ঃ",
    "ꠘ": "ন", // ঁ (চন্দ্রবিন্দু)

    "꠆": "্", // হসচিহ্ন
    "ꠣ": "া", // আ-কার
    "ꠤ": "ি", // ই-কার
    "ꠥ": "ু", // উ-কার
    "ꠦ": "ে", // এ-কার
    "ꠧ": "ো", // ও-কার

    "*": "।", // দাঁড়ি
    "॥": "॥", // দ্বৈত দাঁড়ি
    " ": " ", // space, ফাঁকা স্থান
};

var banglaToNagri = {
    অ: "ꠅ", // ও
    আ: "ꠀ",
    ই: "ꠁ",
    ঈ: "ꠁ",
    উ: "ꠃ",
    ঊ: "ꠃ",
    ঋ: "ꠞꠤ", // রি
    এ: "ꠄ",
    ঐ: "ꠅꠁ", // ওই
    ও: "ꠅ",
    ঔ: "ꠅꠃ", // ওউ
    ক: "ꠇ",
    খ: "ꠈ",
    গ: "ꠉ",
    ঘ: "ꠊ",
    ঙ: "ꠋ", // ং
    চ: "ꠌ",
    ছ: "ꠍ",
    জ: "ꠎ",
    ঝ: "ꠏ",
    ঞ: "ꠘ", // ন
    ট: "ꠐ",
    ঠ: "ꠑ",
    ড: "ꠒ",
    ঢ: "ꠓ",
    ণ: "ꠘ", // ন
    ত: "ꠔ",
    থ: "ꠕ",
    দ: "ꠖ",
    ধ: "ꠗ",
    ন: "ꠘ",
    প: "ꠙ",
    ফ: "ꠚ",
    ব: "ꠛ",
    ভ: "ꠜ",
    ম: "ꠝ",
    য: "ꠎ", // জ
    র: "ꠞ",
    ল: "ꠟ",
    শ: "ꠡ", // স
    স: "ꠡ", // স
    ষ: "ꠡ", // স
    হ: "ꠢ",
    য়: "ꠁ", // ই
    ড়: "ꠠ",
    ঢ়: "ꠠ", // ড়
    ৎ: "ꠔ",
    "ং": "ꠋ",
    "ঃ": "ꠂ",
    "ঁ": "ꠘ", // ন

    "্": "꠆", // হসচিহ্ন
    "া": "ꠣ", // আ-কার
    "ি": "ꠤ", // ই-কার
    "ী": "ꠤ", // ই-কার
    "ু": "ꠥ", // উ-কার
    "ূ": "ꠥ", // উ-কার
    "ে": "ꠦ", // এ-কার
    "ৈ": "ꠧꠁ", // োই
    "ো": "ꠧ", // ও-কার
    "ৌ": "ꠧꠃ", // ৌউ

    "।": "*", // দাঁড়ি
    "॥": "॥", // দ্বৈত দাঁড়ি
    " ": " ", // space, ফাঁকা স্থান
};



document.getElementById("nagriText").addEventListener("input", function () {
    const updatedValue = document.getElementById("nagriText").value;
    document.getElementById("banglaText").value = Array.from(updatedValue).map(c => nagriToBangla[c] || c).join('');
});

document.getElementById("banglaText").addEventListener("input", function () {
    const updatedValue = document.getElementById("banglaText").value;
    document.getElementById("nagriText").value = Array.from(updatedValue).map(c => banglaToNagri[c] || c).join('');

});

window.onscroll = function () {
    scrollFunction()
    console.log("Scrolled");
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        console.log("Called crollFunction()");
        document.getElementById("navbar").style.boxShadow = "0 4px 16px rgba(0, 151, 113, 0.288)";
        document.getElementById("navbar").style.paddingBlock = "10px";
        document.getElementById("logo").style.fontSize = "20px";
        document.getElementById("nav").style.fontSize = "12px";
        document.getElementById("nav").style.marginBlock = "2px";

    } else {
        document.getElementById("navbar").style.boxShadow = "none";
        document.getElementById("navbar").style.paddingBlock = "15px";
        document.getElementById("logo").style.fontSize = "30px";
        document.getElementById("nav").style.fontSize = "18px";
        document.getElementById("nav").style.marginBlock = "20px";
    }
}