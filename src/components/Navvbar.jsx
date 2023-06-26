import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./Navvbar.css";

const Navvbar = () => {
  const navv = {
    btn1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAACTUlEQVRoge2ZS6+rIBRGP8Q38ZiYjvv/f1fHjQkxovV5JrdJuaJCq1hv7hoK6lI3W9iQcRxHnBTnaIFP+C9/FO4WF2maBo/HA23bous69H2P51AihIBSCtd14XkegiCA7/tb3Bbk3QHbdR2EEKiqCn3fG51LKUUURYjjGK77/vszlh+GAUVRoCzLt2/6CmMMSZLAccwj2EheCAHOObbOroQQpGmKOI7NztOV55xv9rbnYIwhTVPt/lryeZ6jruuPxHQJwxBZlmn1XQ00m+IAUNc18jzX6rsozzm3Kv6krmtwzlf7zcoLIXaP8SXKsoQQYrGPUn4YBq0n3xvOOYZhmG1XyhdFsXk6fIdxHFEUxWz7RL7rukPD5W/KskTXdcq2ifxanB3BnNNkYlFVldYFr9frZ0Z/uN1uq32qqsLPz8/kuPSTapoG9/t9E6mtuVwuk9moFDaPx8OqkAkqN0m+bVtrMqao3CT5uVH9DajcJHnTRYVNVG5StjH5MdnMNoDa7e01mO5N90QKG0LIUR6rqNwkeUqpNRlTVG6S/Ccr+b1RuUnynudZkzFF5SY9ThAEi1PQV2xnmyAIJscked/3QSnVyvc2sw2lVFllm0yJoyiyImTCnNNE3rTwY4M5p4m867pgjO0upAtjbDYLKtewSZJ8xQ+LEIIkSWbblfKO4xiV3fYiTdPFAuxsSxzHh4YPY2x1/C1WzNI0RRiGm0rpEIah1pdfrVVmWWb1AUwKrf9+ifvJaTcXnpx2W+eVU26oqTjdVuY3cOod8FPL/wKdYzK1cLOTowAAAABJRU5ErkJggg==",
    img1: "http://127.0.0.1:5500/logo%20youtube.PNG",
    btn2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAABe0lEQVRIie3VMW6DMBQG4D9VZ5/DPkHmoPgAyezImZE4AXMkTsCcp2T2BWyJYzzEzJKVC7QTVKpScETStFL+FUsftvkfi8vl8oEn5O0Z6Av+1bzHLuy6DkSEEAKYGQCglMJ6vYa1FkKIm+CoHTvnkCQJ2rZFURRomgZN06AoCrRti9VqBefcTfBiqk7OORwOB5zPZyilrq5hZhhjkOc5ttvtfLjrOiRJgtPp9CP6Ha+qKurYR4+aiLDZbCZR4Ou+iWhy7STsvY8+OgDY7/fw3s+H67qO2m0fpRTqup4PPzKjsJRy6GxMmBlSyvmw1vqmfh6PR2it58PWWjjnonbNzAghwFo7HxZCIM9zGGNGcWbGbrdDlmXRo3NyVvd1MsZAaw1r7fClMzOICN57ZFkGIsJyuYxqwuTI7NP/JLz3Q2WklMPLCCHAzEjTFGVZTuLRcGxi8bv3WCmFsiyRpunod/GQARKDP2xy9XgI4erzu99xbP7mrH7BL/hfwp+isrndQD7iYgAAAABJRU5ErkJggg==",
    img2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAABQklEQVRYhe2W0W2EMAyGc10AFshNQLIAYRIWCCMwQTIBLJIN2AAmiFjAG7hPnC53lVwCVWnlT+LFsn4+WcjmhogoLsTHbwu8wkIULETBQhQsRMFCFCxEcYqQ915orYXWWnjvj4XhQZxzWBRF8jjnsvNuR/+HlFJiXdekdr/fxTzPWXmHhcqy/LIOAFl5//OjPhMWovj7Qt77ZPlJKd96nmuv/acLKaWSHdO27VvPc22eZ6GU+v4L9m5SAEApJcYYk21dVRVWVZVs6RgjSil35WedjmEY0BhD9tV1jcMw/LwQIqK1Fo0xyaQ2YoxojEFr7e7cQ6djHEfhnBNN0zy+k2VZxDRNou970XXd/tDcCW0AAIYQHpc+hIAAkJ13+LhubEc296huXG4xnjahs7jchFiIgoUoWIiChShYiIKFKFiI4hN67t1fnTgWswAAAABJRU5ErkJggg==",
    btn3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAqCAYAAAD8pHgAAAABA0lEQVRoge2Y0QmEMAyG49lBBF2kdAIX8MHN3EA30D0cRcg9CZ549c5E/Cn5Hq2GfE0aihkzMyXE6+kEtDEhdEwIHRNCx4TQMSF0khNy4gBOFmJZFmkKH4iFiK4nJd2MI2BabhgGCiHIA7GQPM+ja2frXddxWZbsvY+++yuPC9V1zeM4nsb6Ff0m/oN5nqkoCtWY6kJHB337THuq7Xl0KFRVRSEEmqZJLaZ6hbYVWCsTq0rTNNS2rV7rSQ+hdCis9H3P3ntpOpwxy35jOee+VuCsQrFvL+ejGm3H3QPgCJibghYqFbrjTnYV8RlCI7mWMyF0TAgdE0LHhNAxIXRMCJ3khN6OIGu2e9IErgAAAABJRU5ErkJggg==",
    btn4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAYAAADl9UilAAAC6klEQVRYhe2XP0wTURzHv9VHAA166ZUQHXrpFRJNHGjFARKHskBINMFNE9MwtSYSAhIX46LODiQaupSezjKYQNqBdOMWzpYFTNSC7YSVtLRBKlR+DlrttXfQa4vUhE9yy/vz7efuvXu/q4mICA3IqeMW0KNhxVg9QrZlGZuShGw4jO+xGCif1xxnYgzNoog2lwu8242zvb26maZa91jc60XS56tqbrvHA+v0dP3FPgwOIhMKVTsdAHBuYABdwWBZe9V7LO71qqTOT71D9x7hKhEca3Po6KwsJxMKIe71VicmSRIsFgtGR0cB/NpTquW7+wbCPRu+PXFCuXYfGQzh4swjdcjIM9hePkCbRn7S58O2LBsXm5iYQDqdhsvlAgBsSpJ6gOsymtbn8flpBFh6gU+vZeBKPzqKx1y/BfPtIZzR+Y3SzEPFJEnC1tYWAKCnpwcAkA2HD56U2gFxF9ByWHgRZZmkQyqVIqfTScPDwxSNRlV9CmO0BPy9RuZol1KUeeygpc479CWyQ0QrlAQouaqZTplxqDIUxlQjdMUcDgcFAgHNvjIx2CjxNkY/9ohob4dykRjlUwuUKB7jXyEqbTtATHMpJUkCx3Fwu92aj71ZFEta1rBxU0SkyQSlqRWJtVacXo9gw8BSlmbqio2NjemGtP1+Ccro7IdlahG2Gy3IvppU9+Vy2E/nsF9hpuYBa7fboSgKOI7TDNmWZbzv61M3ji+g+3k/TF9XkZ2ZxMeH8zoK2lxaXFSVKE0xxhjyOvWuQC2lqBSt0lS1GNCgJQkAuoJBtHs8Vc9v93g0pYAan1iBf/bZY0QsHo/DarVWeAuVU7aUy8vLhgJEUUQikaib0B+KT9toNEo8z+ue+FoEAgEym81lZatWVGJms9mQVIGCXD1R7THGavsLYOSFOYyav/mPiorOMZ7nwRgDYwx2u/2onQBUKDY7OwtBECAIAvx+/1E7Afjfl/I4OBEzyomYUU7EjNKwYj8BGy78/HmCm54AAAAASUVORK5CYII=",
    img3: "http://127.0.0.1:5500/logo%20utilisateur.PNG",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const tab1 = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/2948/2948025.png",
      titre: "Acceuil",
    },

    {
      logo: "https://vectorseek.com/wp-content/uploads/2022/02/Youtube-Shorts-Black-Icon-Logo-Vector-730x730.jpg",
      titre: "Shorts",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngG6coDabAT2fu5RUTWxcAvk__YJxFZ329Q&usqp=CAU",
      titre: "Abonnements",
    },
  ];
  const tab2 = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/2989/2989835.png",
      titre: "Bibliothèque",
    },

    {
      logo: "data:image/png;base64,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",
      titre: "Historique",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUQsjYRHMxGiEJi_W1BYVXSHBi4Y1wAwtAgSZcA5B_r1O9cLvFOaSoFWkzfBsbXVMBBg&usqp=CAU",
      titre: "A regarder plus",
    },

    {
      logo: "https://e7.pngegg.com/pngimages/880/497/png-clipart-thumb-signal-computer-icons-like-button-duimpje-angle-text.png",
      titre: "Vidéos Jaime ",
    },
    {
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-youtube-playlist-4896336-4069402.png",
      titre: "Virage club  ",
    },
  ];
  const tab3 = [
    {
      logo: "https://yt3.ggpht.com/ytc/AGIKgqP7VgBaMeD7YlCic3LYVr-TZo8CNh0VvbDlq3-rYg=s88-c-k-c0x00ffffff-no-rj",
      titre: "Elhiwar Ettounsi",
    },

    {
      logo: "https://yt3.ggpht.com/Dxa3QFzeLu3qnIGbDzeCS45s7IrFrdYh9c1FVhzFG_mAFw9LeqLCL-zHa2XFcJ0Lz2jYntyo=s88-c-k-c0x00ffffff-no-rj",
      titre: "Mehdi Mouelhi",
    },
    {
      logo: "https://yt3.ggpht.com/ytc/AGIKgqNwyFEsAqFhWwlhk6LBa0Ikt_1ymVHlOW4B_XzR=s88-c-k-c0x00ffffff-no-rj",
      titre: "CoconutMusicGermany ",
    },

    {
      logo: "https://yt3.ggpht.com/RXfYqtcetDmtyfJ5z7Ht2l0DVeidqNX19i7Hnlq6XwgfgM00ofpZyD4_pR-VcWmlAf936Ke6TQ=s88-c-k-c0x00ffffff-no-rj",
      titre: "Spacetoon",
    },
    {
      logo: "https://yt3.ggpht.com/ytc/AGIKgqPWwZVx-1j8NFl50SKogBtpgV2ts3BfIa9A0kyn=s88-c-k-c0x00ffffff-no-rj",
      titre: "VocalNationalAnthems",
    },
  ];

  return (
    <div className="nav">
      <div className="left-nvbar">
        <Button variant="none" onClick={handleShow}>
          <img src={navv.btn1} alt="" />
        </Button>
        <Offcanvas style={{ width: "224px" }} show={show} onHide={handleClose}>
          <Offcanvas.Header className="side-head">
            <Offcanvas.Title>
              {" "}
              <img src={navv.btn1} alt="" />
            </Offcanvas.Title>
            <img src={navv.img1} alt="" />
          </Offcanvas.Header>
          <Offcanvas.Body>
            {tab1.map((el) => (
              <button className="side1">
                <img src={el.logo} alt="" />
                <h1>{el.titre}</h1>
              </button>
            ))}
            <hr />
            {tab2.map((el) => (
              <button className="side1">
                <img src={el.logo} alt="" />
                <h1>{el.titre}</h1>
              </button>
            ))}
            <hr />
            {tab3.map((el) => (
              <button className="side1">
                <img src={el.logo} alt="" />
                <h1>{el.titre}</h1>
              </button>
            ))}
            <hr />
          </Offcanvas.Body>
        </Offcanvas>

        <img src={navv.img1} alt="" />
      </div>
      <div className="midle-nvbar">
        <input type="text" placeholder="Rechercher" />
        <button>
          <img src={navv.btn2} alt="" />
        </button>
        <img src={navv.img2} alt="" />
      </div>
      <div className="right-nvbar">
        <button>
          <img src={navv.btn3} alt="" />
        </button>
        <button>
          <img src={navv.btn4} alt="" />
        </button>
        <img src={navv.img3} alt="" />
      </div>
    </div>
  );
};

export default Navvbar;
