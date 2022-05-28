// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const color1 = ["Yellow", "Pink", "White", "Purple"];
const color2 = ["Blue", "Black", "Grey"];

const restaurant1 = [
  "Bento",
  "Sushi",
  "Pancake",
  "Eggy",
  "Tempura",
  "Bento",
  "Eggy",
  "Padang",
  "Tteok",
  "Sushi",
  "Sushi",
];

const restaurant2 = [
  "Tempura",
  "Bento",
  "Sushi",
  "Pancake",
  "Padang",
  "Katsu",
  "Geprek",
  "Pancake",
  "Eggy",
];

const fuEducation = [
  { name: "SD 01", city: "Jakarta", graduate: 2016 },
  { name: "SMP 02", city: "Jakarta", graduate: 2019 },
  { name: "SMA 03", city: "Tangerang" },
];

const suEducation = [
  { name: "SD 02", city: "Jakarta", graduate: 2010 },
  { name: "SMP 03", city: "Bogor", graduate: 2013 },
  { name: "SMA 01", city: "Surabaya", graduate: 2016 },
  { name: "Universitas Maju", city: "Tangerang" },
];

let favoriteColor1 = [...new Set(color1)];
let favoriteColor2 = [...new Set(color2)];
let favoriteRestaurant1 = [...new Set(restaurant1)];
let favoriteRestaurant2 = [...new Set(restaurant2)];

const firstUser = {
  name: "monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: favoriteColor1,
  isHavePet: "Yes",
  education: fuEducation,
  favoriteRestaurant: favoriteRestaurant1,
};

const secondUser = {
  name: "wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: favoriteColor2,
  isHavePet: "No",
  education: suEducation,
  favoriteRestaurant: favoriteRestaurant2,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
