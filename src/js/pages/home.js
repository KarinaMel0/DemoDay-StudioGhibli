var i = 0;
var images = [];

images[0] =
  "https://cdn.discordapp.com/attachments/725539486951538750/949121259277525083/Ponyo_2.png";
images[1] =
  "https://cdn.discordapp.com/attachments/725539486951538750/949099146843930686/Spirited.png";
images[2] =
  "https://cdn.discordapp.com/attachments/725539486951538750/949097359026036756/Castle.png";
images[3] =
  "https://cdn.discordapp.com/attachments/725539486951538750/949099147078823936/Totoro.png";
images[4] =
  "https://cdn.discordapp.com/attachments/725539486951538750/949099146063781958/Kiki.png";

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    document
      .querySelector("[name = slide]")
      .animate(
        [
          { opacity: "0" },
          { opacity: "1" },
          { opacity: "1" },
          { opacity: "1" },
          { opacity: "1" },
          { opacity: "0" },
        ],
        {
          duration: 6000,
        }
      );

    i++;
  } else {
    document
      .querySelector("[name = slide]")
      .animate(
        [
          { opacity: "0" },
          { opacity: "1" },
          { opacity: "1" },
          { opacity: "1" },
          { opacity: "1" },
          { opacity: "0" },
        ],
        {
          duration: 6000,
        }
      );
    i = 0;
  }

  setTimeout(() => {
    changeImg();
  }, 6000);
}

changeImg();
