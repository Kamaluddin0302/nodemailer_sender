function Sendfun() {
  console.log("Email send");
  fetch("http://localhost:3040/route/sendemail", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      sendemil: "kamaluldin1999@gmail.com",
      tomail: "kamalloungani11@gmail.com",
      text: "Hi beero"
    })
  })
    .then(responece => console.log("Email send"))
    .then(err => console.log(err));
}
