const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["January","February","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"),[])
        }
    },4000);
}

function showMonth (test1,test2) {
    if ( test1 == null ){
    return test2.map(newArray => console.log(newArray));
    //newArray1 = test2.map(newArray => newArray)
    //console.log (newArray1)
    }
    else {
        return console.log(test1.message)
    }
    
}

getMonth( showMonth );