//projete axios'u dahil etme
import axios from "axios";
async function getData(userId) {
  //axios ile API dan veriyi çekme işleminin yapılması ve data olarak gelen değişkenin user olarak değiştirip içinde atama
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  //axios ile API dan veriyi çekme işleminin yapılması ve data olarak gelen değişkenin post olarak değiştirip içinde atama

  const { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts/${userId}`
  );
  //gelen veriyi ekrana yazdırma
  console.log("user", user);
  console.log("post", post);
}
//fonksiyonu dışa aktarma
export default getData;
