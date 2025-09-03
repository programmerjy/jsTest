async function getData(){
    try{
        let response = await fetch("https://wrong.url");
    let data = await response.json();
    console.log("Data: ", data);
    }catch(error){
        console.log("Error: ", error);
    }
}

getData();