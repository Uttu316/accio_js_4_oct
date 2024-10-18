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
  const { name, email, phone, age, gender, photo } = cardData;
  const card = $(`<div class="card">
        <div class="photo">
          <img src=${photo} alt=${name} />
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

const showUserDetails = (user) => {
  const { name, email, phone, gender, dob, picture } = user;
  const { title, first, last } = name;
  const { thumbnail } = picture;
  const { age } = dob;

  let fullname = title + " " + first + " " + last;

  let cardData = {
    name: fullname,
    email: email,
    phone,
    photo: thumbnail,
    age,
    gender,
  };
  const card = create_card(cardData);
  return card;
};

getUsers();
