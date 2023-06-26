import React from "react";
import "./Comp1.css";

const Compo1 = () => {
  const mainvid = {
    vid: "https://www.youtube.com/embed/JGUGaBJqwzA",
    tit: "ملخص واهداف مباراة السنغال والبرازيل وهدف مانى الخرافى 🔥🔥⚽⚽",
  };

  const soustitleft = {
    im: "https://yt3.ggpht.com/89WH5rAmAmXznPHBcDEUQ7IQaTf4ujG2MEZJ8DnkhsXSlpeNpKVDKv1HzVfWfCJ38fwUmz4s=s48-c-k-c0x00ffffff-no-rj",

    tit: { tit1: "الكورة مع أبوزيد ⚽", tit2: "1,01 k abonnés" },

    btn1: "s'abonner",
  };

  const soustitright = [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAuCAYAAADHhpC9AAAIDElEQVR4nO2cX0xTWR7HP/2PkNaA4MMKazJqMpRNFvWhaBzimqCbrMs66viAxqwCAWNWBh3JGDXGER8WV4FpNoqEZXc1jgkhZjZMIn98IRExUVOzad2EjMLKJItDjBQo7e1t2QcGptBSbntLi3I/SRPae+7v96P59pzf+Z1zj2pycnISBYUoUSc6AIX3G0VACrJQBKQgC0VACrLQxtKYIAgIgoAoioiiiM/nw+fzxdLFe4vRaEx0CDOoVCrUavXMS6PRoNFoorIlW0B+v5+JiQncbjcej0euOYU4MDk5GfTj1mq1My+VSiXZliwBuVwuJiYmFOF8AEyPGhqNBp1Oh06nk3RfVAISRZHx8XHGx8ejuV1hCTPdM/n9fnQ6HWp1+DQ5YgEJgsDY2BhutzvqIBWWPoIg4Pf70ev1YfOjiGZhgiAwOjqqiGeZIIoiHo8n7ERIsoBEUWRsbEzJd6JgaGgo0SFEjc/nm+mNQiFZQOPj40rPs0wRRRGv1xvymiQBuVwuJWFe5giCEFJECwpous6joOD1epm7eWPBWdhi1Hnq6uro6enh1atXNDY2kpubG1P7HxpOp5OSkhIePXoUtY3Xr1/LjsPn8yGK4qwa0YICinXe09XVhdVqpba2lv7+fu7evbtkBGS7bqbIWsEdRxlLI6Iprl69ypo1a7Db7ZhMpgXbZ2VlzRJMVlZWzGKZK6CwQ5ggCDHtfXp7eykuLqaxsZHCwkIcDgerVq2SaXUU29/OU/RbM2azmZ1lV2h7GRDz8wbMZvOcVwM2mV7jSW9vLyUlJZLEs9hMr3FOE7YHEgQhZo7tdjslJSVYrVZ27NgBgM1m49SpUzKsenhxs4yiOii6fIOKX3iw/fMSVX/0YPr2HPmpMPy/74ECTjcUYdZP35fBOpn/T7xwOp04HA5ycnISHcoMPp9vprgYVkCiKMbE4cDAAKWlpZw5c4bCwkIA+vr6UKlUbNiwIXrDHhttdTbS/3SHc59ODToWnYP6Qw28+O+UgNzOHyE9j7xPLGRHZHyQti+LqOrJo+abGnaviT5MOdjtdvLy8hLjfB4Ca0Jhh7D55v6R8PbtW0pLSzl8+DAHDx6c+bynp4etW7fKM27IpfzxY747+nPG4nELQDZ6w9T74eHHkN5L/R/yMZvz2X38Ct0/LGTYg+16FVX/yqTCeilh4oGp4Uv29xRjJAtovuqjVLxeL6WlpRQUFFBeXj7r2sOHD2PwxRgwGo0YfxILLht/tzaTXljO7z8GGMXpsfDRynUUfHGF5q8PkvnvZsq/aObFvDbdDH53nhPWQXZfqaHs14Z5W8aDnp4ezGZzQmOYS6Auwg5hkW4Gu3XrFpcvXyYpKQmAkZER0tLSaG1tDWr75s0bLl68SHV19UxtQRRFtm/fzrVr19Dr9UH3hGeQtq9OUP/Dbmr+UkA6AEbyP28mf6aNBTODWE600fufI2R/HMpOA1WngY8qOPK7zAhjiD12u50tW7YkOoxZBNaCYrql1e12s2fPHjo7O+ns7GTbtm2kpaWFbHvz5k26urro6OiYaf/gwQNSU1Opra2N0PPo1JAjIV8xZmQCLxDCTC7TLRZyX9Zz6R/z91PxwmQyYbfbEx3GvITtgTQaTcS9UFJSEhkZGQDodLp5twKsXr065OdDQ0P09/dH4NGD7XoZRd+YOH1zTr4y2k21pZzvL3bQ/NlUbzL64yCBOVIwRVT/9TQZt4+w78/1tP7mBvt+GUE4MaapqYmTJ0/icDiCru3fvz/ox+Z0OoHY1n7mErhjMayA1Gp1QvY07927V2JLDy9bznPCaiP/8xuYR2w8fvzTpZR15P7KQsHRdO5Yq2lIPUKuYZDOplb45BIFIYcvgAxMyQayD1VRdr+I85dbsTTsI1GDWU5ODu3t7UGfFxcXB+WQTqeTAwcOhBRWLAncZBZWQDqdLiYzsUh4+vQpZ8+eldj6BZ0X2hgGuuvK6Q68tKuG7trdWCrvcCPla2q+OkL9cCa5n56j9UsJgkjOpfxcGd2HzlPdYuHGZ4nPhwLp6OgIEklxcTHZ2dmLKh6IQEBarbw995OTkxFt0B4YGECtVrN27VqJd+RS5nBQFq6JJpP8YzXkH6tZ2NoxB45jP783bKqg1VEhMZb40d7ezs6dO2dVpisrK8nMzFx08UAEAop8JiSPJ0+esGnTprj6fB+5f//+rOGrsrISh8MRcqhbDALz2rCzML1ej8EQvzrIs2fP2Lx5c9z8va+0t7eza9cuAC5cuIDD4aClpSUuvrVarXQBATM1nXjw/PnzuOdc7yOjo6OYTCaampro7e2lpaUlbgutc9OaBZOcFStWRPTQ4O3bt7l37x4qlYqRkRH8fj8bN26cVXwK9ffExAQFBQUcP35ckp/lzNGjR8nJySEvLy+u4tFoNEECUkk5H8jlcvHu3TtJToaHh2cJxOVykZycPNvpnMRapVLR19e35BYNY8XQ0BDr169PdBiySUpKCnrgUNI0Kzk5Ga/XK2lfdHp6elTByd8XpLCY6PX6kE+rSl7KSElJiWs+pLB00Gq18z7qLGkIm2b6wULl2bDIWUqnc0SCRqPBYDDMuyQV0WKqXq/HaDQqPdEyQavVhhUPRLEar9frMZlMpKSkyApOYWkzXQNc6NygqNYqtFotK1euRKfTKce7fGBEerxLRDlQKJQDpqSx1HOgaA+Yki2gQJQj7uZnKQkolkfcxVRACssP5ZRWBVkoAlKQhSIgBVkoAlKQxf8Bw3YrzBrNb6AAAAAASUVORK5CYII=",
    "data:image/png;base64,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",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAxCAYAAACoJ+s+AAAB2UlEQVRYhe2Y3Y6DIBBGPwaI0j5fX6Sv1b5eK4a/vdhoUKHVuiqb9FwRqOFkBigMCyEEFAwdLfCOr+BavoJrEZ9+6L2HtRbeezjnEEJAdyAwxsAYA+ccRAQhBIg+iwVbeswYY2CMgXNu0UScc0gpIaXcRtBai7Zt4b1fNMEYIkJVVRBiXvJmCWqtYYxZJTZGSom6rt/+7qVgCAFN0yxO51w451BKgTG2XDCEgOfzuTql7yAinE6nrGR2azVNs7kc8HsaNE2THU8Kaq03S2sK5xy01smxiaC19s83xByMMbDWTvongm3b7iKUIjX3QNAYs8u6y+G9n2RvIng0WcHuP/VonHODLPaCqQV6FLHLIIKlkIxgCentiF16wSW3rtvthvv9vro/R+wiUp3v5K7Xa//N5XL5qH+u4P+58jPGZkUxjsCa9ivim01/3Xo8HsXsZCLC+Xz+bXednPPDhMbELr3gp6+uLYhd+tbcR8wexC6DCJaQ5u4t3THI69I36xaMHSaCR65FInotCABVVe0mNGfuiaAQ4pBUSymTGzWZz7qud90wnPNslSG74JRSu6xHIoJSKjv+f0sfMcUWj2KKLr/FFFvAHFNsCXhvyrljZfgKruUruJbiBX8A2+s6MDiZZoUAAAAASUVORK5CYII=",
  ];
  const bigcomment = [
    "112 k vues  il y a 3 jours  #brasil #subscribe #share",
    "اهداف مباراة البرازيل والسنغال",
    "لقاء البرازيل والسنغال",
    "السنغال والبرازيل  …Plus",
  ];
  const btn2 = [
    { titt: "Tout", bagcol: "black", col: "white" },
    { titt: "Equipe de Brésil du football", bagcol: "#eeecec", col: "Black" },
    { titt: "Vidéo similaire", bagcol: "#eeecec", col: "black" },
  ];

  const vidd = [
    {
      imm: "https://i.ytimg.com/an_webp/kecPzjJtekE/mqdefault_6s.webp?du=3000&sqp=CKui3aQG&rs=AOn4CLC1rCGS0TIbVLnJLyFgmqglWkCeVQ",
      ti: "SADIO MANÉ A DÉTRUIT L'ÉQUIPE DU BRÉSIL AVEC UN",
      par1: "SIAN SPORTS",
      par2: "447 k vues il y a 3 jours",
    },
    {
      imm: "https://i.ytimg.com/an_webp/Dw8LmDJeT2U/mqdefault_6s.webp?du=3000&sqp=CJ3t3KQG&rs=AOn4CLCoh7GZQ4Pozws6V7X8Whal4YmUKA",
      ti: "ملخص مباراة فرنسا والبرتغال نصف نهائي كأس العالم 2006 جنون عصام الشوالي 🔥",
      par1: "mix football",
      par2: "923 k vues il y a 4 ans",
    },
    {
      imm: "https://i.ytimg.com/an_webp/N6sV_fryGdA/mqdefault_6s.webp?du=3000&sqp=CNCJ3aQG&rs=AOn4CLChhZ4pNH9StUnoD83CL4bYcnu5vQ",
      ti: "افضل مباراه لرياض محرز مع مانشستر سيتي❤️●مانشستر سيتي 4-1 باريس سان",
      par1: "FOOTBALL FOX",
      par2: "392 k vues il y a 3 semaines",
    },
    {
      imm: "https://i.ytimg.com/an_webp/ALXx-GtOXsA/mqdefault_6s.webp?du=3000&sqp=CIDW3KQG&rs=AOn4CLBZTS35ct4NTvV1w9qc05RXi4Y-ZQ",
      ti: "ملخص مباراة فرنسا و بلجيكا 3 - 2 🔥 نصف نهائي دوري الأمم الأوروبية 2021",
      par1: "Koora",
      par2: "2,6 M de vues il y a 1 an",
    },
    {
      imm: "https://i.ytimg.com/an_webp/kecPzjJtekE/mqdefault_6s.webp?du=3000&sqp=CKui3aQG&rs=AOn4CLC1rCGS0TIbVLnJLyFgmqglWkCeVQ",
      ti: "SADIO MANÉ A DÉTRUIT L'ÉQUIPE DU BRÉSIL AVEC UN",
      par1: "SIAN SPORTS",
      par2: "447 k vues il y a 3 jours",
    },
    {
      imm: "https://i.ytimg.com/an_webp/kecPzjJtekE/mqdefault_6s.webp?du=3000&sqp=CKui3aQG&rs=AOn4CLC1rCGS0TIbVLnJLyFgmqglWkCeVQ",
      ti: "SADIO MANÉ A DÉTRUIT L'ÉQUIPE DU BRÉSIL AVEC UN",
      par1: "SIAN SPORTS",
      par2: "447 k vues il y a 3 jours",
    },
    {
      imm: "https://i.ytimg.com/an_webp/kecPzjJtekE/mqdefault_6s.webp?du=3000&sqp=CKui3aQG&rs=AOn4CLC1rCGS0TIbVLnJLyFgmqglWkCeVQ",
      ti: "SADIO MANÉ A DÉTRUIT L'ÉQUIPE DU BRÉSIL AVEC UN",
      par1: "SIAN SPORTS",
      par2: "447 k vues il y a 3 jours",
    },
    {
      imm: "https://i.ytimg.com/an_webp/kecPzjJtekE/mqdefault_6s.webp?du=3000&sqp=CKui3aQG&rs=AOn4CLC1rCGS0TIbVLnJLyFgmqglWkCeVQ",
      ti: "SADIO MANÉ A DÉTRUIT L'ÉQUIPE DU BRÉSIL AVEC UN",
      par1: "SIAN SPORTS",
      par2: "447 k vues il y a 3 jours",
    },
    {
      imm: "https://i.ytimg.com/an_webp/kecPzjJtekE/mqdefault_6s.webp?du=3000&sqp=CKui3aQG&rs=AOn4CLC1rCGS0TIbVLnJLyFgmqglWkCeVQ",
      ti: "SADIO MANÉ A DÉTRUIT L'ÉQUIPE DU BRÉSIL AVEC UN",
      par1: "SIAN SPORTS",
      par2: "447 k vues il y a 3 jours",
    },
    {
      imm: "https://i.ytimg.com/an_webp/kecPzjJtekE/mqdefault_6s.webp?du=3000&sqp=CKui3aQG&rs=AOn4CLC1rCGS0TIbVLnJLyFgmqglWkCeVQ",
      ti: "SADIO MANÉ A DÉTRUIT L'ÉQUIPE DU BRÉSIL AVEC UN",
      par1: "SIAN SPORTS",
      par2: "447 k vues il y a 3 jours",
    },
  ];

  return (
    <div className="Bigmain-div">
      <div className="leftmain-div">
        <iframe
          src={mainvid.vid}
          width="850"
          height="480"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1>{mainvid.tit}</h1>
        <div class="soustitvid">
          <div class="soustitvidleft">
            <img src={soustitleft.im} alt="" />
            <div>
              <h3>{soustitleft.tit.tit1}</h3>
              <p>{soustitleft.tit.tit2}</p>
            </div>
            <button>{soustitleft.btn1}</button>
          </div>
          <div class="soustitvidright">
            {soustitright.map((el) => (
              <button>
                <img src={el} alt="" />
              </button>
            ))}
          </div>
        </div>
        <div class="comment">
          {bigcomment.map((el) => (
            <p>
              {el}
              <br />
            </p>
          ))}
        </div>
      </div>
      <div className="rightmain-div">
        <div class="sectionrightbtn">
          {btn2.map((el) => (
            <button style={{ backgroundColor: el.bagcol, color: el.col }}>
              {el.titt}
            </button>
          ))}
        </div>
        <div class="videos">
          {vidd.map((el) => (
            <div className="vid1">
              <img src={el.imm} alt="" />
              <div className="description1">
                <h1>{el.ti}</h1>
                <p>
                  {el.par1}
                  <br />
                  {el.par2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compo1;
