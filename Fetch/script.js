const url = "https://api.freeapi.app/api/v1/public/randomusers";

const getUsers = async () => {
  const res = await fetch(url);
  const data = await res.json();

  const users = data.data.data;
  const box = document.getElementById("users_box");

  const usersUI = users.map((user) => {
    const userCard = showUserDetails(user);
    return userCard;
  });

  box.append(...usersUI);
};

const create_card = (cardData) => {
  const card = document.createElement("div");

  card.classList.add("card");

  const p = document.createElement("p");

  p.classList.add("details_heading");
  const subHeading = document.createElement("p");

  subHeading.classList.add("details_subHeading");
  const { name, email } = cardData;
  p.innerHTML = name;
  subHeading.innerHTML = email;

  card.append(p, subHeading);
  return card;
};

const showUserDetails = (user) => {
  const { name, email } = user;
  const { title, first, last } = name;

  let fullname = title + " " + first + " " + last;

  let cardData = {
    name: fullname,
    email: email,
  };
  const card = create_card(cardData);
  return card;
};

getUsers();
