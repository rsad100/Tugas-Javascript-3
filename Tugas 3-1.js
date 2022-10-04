const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        //mereturn array pertama yang memenuhi kondisi testing function
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

cekHariKerja("selasa")
  .then((result) => {
    console.log(`${result} adalah hari kerja`);
  })
  .catch((error) => {
    console.log(error);
  });

//Then catch akan digunakan ketika promise diterima. Jika resolve maka yang dijalankan adalah .then jika reject maka yang dijalankan adalah .catch

async function test(day, callback) {
  try {
    //code block untuk dicoba
    const workDay = await callback(day); //menunggu promise dari callback
    return `${workDay} Adalah hari kerja`;
  } catch (error) {
    //code block yang berjalan ketika ada error di try
    return error.message;
  }
}

//ketika function test dijalankan maka code block yang ada didalam try akan dicoba untuk dijalankan. 
//variable workday akan diisi dengan function callback(day) ketika promise dikirimkan
//code block didalam catch akan berjalan ketika terjadi error didalam codeblock try

async function doAsync() {
  console.log(await test("sabtu", cekHariKerja));
}

doAsync();
