const getUserData = () => {
  const data = localStorage.getItem("user");

  if (!data) return null;

  const user = JSON.parse(data);

  showUserData(user);
};

const showUserData = (user) => {
  const { name, dob, gender, login, location, email, phone, picture } = user;

  const { title, first, last } = name;
  const fullName = title + " " + first + " " + last;

  const { large: photo } = picture;
  const { date } = dob;
  const dateOfBirth = formattedDOB(date);

  const { city, country, state } = location;
  let address = `${city} ${state}, ${country}`;

  const { username } = login;

  const nameEl = $("#user_name");
  const usernameEl = $("#username");
  const genderEl = $("#user_gender");
  const dobEl = $("#user_dob");
  const emailEl = $("#user_email");
  const cityEl = $("#user_city");
  const phoneEl = $("#user_phone");
  const imgEl = $("#user_img img")[0];

  usernameEl.html(username);
  nameEl.html(fullName);
  genderEl.html(gender);
  dobEl.html(dateOfBirth);
  cityEl.html(address);
  emailEl.html(email);
  phoneEl.html(phone);
  imgEl.src = photo;
};

const formattedDOB = (date) => {
  const d = new Date(date);

  let day = d.getDate();
  let month = d.toLocaleString("default", { month: "short" });
  let year = d.getFullYear();
  //day mon year
  return `${day} ${month} ${year}`;
};

getUserData();
