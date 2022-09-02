/***Find Metodu***/
//Finde methodu bize koşula uygun ilk elemanı döndürüyor eğer istenilen özellikte bir eleman yoksa da bize undifiend döndürüyor.

const numbers=[1,15,6,12,10,17]

//Burda değeri 10 dan büyük ilk dizi elemanını döndüreceğiz

const found=numbers.find((number)=>{

    return number>10;

})

console.log(found)

/*------------------------------*/

const users=[
    {
        id:1,
        name:"Emre"
    },
    {
        id:2,
        name:"Gurbet"
    },
    {
        id:3,
        name:"Sevil"
    },

]

//Burda sadece id=2 değerine sahip olanı bize versin

const idDegeri=users.find((user,index,arr)=>{
    console.log(index)
    return user.id===2

})

console.log(idDegeri)