function cekGanjilGenap(angka){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if( angka % 2 == 0){
                resolve()
            } else {
                reject()
            }
        },3000)
    })
}

cekGanjilGenap(3)
.then(() => { console.log ('genap')})
.catch(() => { console.log('ganjil')})

function cekNegativePositive(angka){
    return new Promise((resolve,reject)=> {
        setTimeout(() =>{
            if ( angka >= 0 ){
                resolve()
            } else {
                reject()
            }
        },3000)
    })
}

cekNegativePositive(-1)
.then(() => {console.log('Positive')})
.catch(() =>{console.log('negative')})