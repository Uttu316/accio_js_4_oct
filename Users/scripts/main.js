const url = "https://api.freeapi.app/api/v1/public/randomusers";

const getUsers = async () => {
  const res = await fetch(url);
  const data = await res.json();

  const users = data.data.data;
  const box = $("#users_box");

  const usersUI = users.map((user) => {
    const userCard = showUserDetails(user);
    return userCard;
  });

  box.append(...usersUI);
};

const create_card = (cardData) => {
  const { name, email, large, phone, age, gender, photo } = cardData;
  const card = $(`<div class="card">
        <div class="photo">
          <img  src=${photo} alt="${name}" />
        </div>

        <div class="details">
          <h3 class="name">${name}</h3>
          <p class="email">${email}</p>
          <p class="phone">${phone}</p>
          <div class="gender_info">
            <span class="gender"> ${gender} </span>
            <span> ${age} <span class="yrs">Yrs</span> </span>
          </div>
        </div>
      </div>`);
  return card;
};

const onImgClick = (event) => {
  const { target } = event;

  const { src, alt } = target;
  const body = $("body");

  body.addClass("no_scroll");

  const modal = $("#modal");
  const modalImg = modal.find("img")[0];

  modalImg.src = src;
  modalImg.alt = alt;

  modal.fadeIn();
  event.stopPropagation();
};

const onCardClick = (event, user) => {
  const { target } = event;
  localStorage.setItem("user", JSON.stringify(user));
  location.pathname = location.pathname.replace("index", "user");
};

const showUserDetails = (user) => {
  const { name, email, phone, gender, dob, picture } = user;
  const { title, first, last } = name;
  const { thumbnail, large } = picture;
  const { age } = dob;

  let fullname = title + " " + first + " " + last;

  let cardData = {
    name: fullname,
    email: email,
    phone,
    photo: thumbnail,
    age,
    gender,
    large,
  };
  const card = create_card(cardData);
  const img = $(card).find("img");

  img.on("click", onImgClick);

  card.on("click", (event) => {
    onCardClick(event, user);
  });

  return card;
};

const registerModalClose = () => {
  const modalClose = $("#modal_close_btn");
  modalClose.on("click", (e) => {
    const modal = $("#modal");
    const body = $("body");

    body.removeClass("no_scroll");
    modal.fadeOut();
  });
};

getUsers();
registerModalClose();
