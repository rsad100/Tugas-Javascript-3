fetch("https://jsonplaceholder.typicode.com/users") //mereturn json sebagai promise
  .then (res => res.json()) //parsing promise yang berbentuk json sebagai object javascript
  .then ((data) => {
    data.map(a => console.log(a.name)) //mengambil object javascript yang sudah diparsing dan menggunakan method map untuk menampilkan nama saja
    //let nama = data.map(a => a.name)
    //console.log(nama)
  })
  .catch(error => console.log("error"))