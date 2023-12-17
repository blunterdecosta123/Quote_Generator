const populate = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let myStr = "";
            let url = "https://dummyjson.com/quotes/random";

            let response = await fetch(url);
            let rJson = await response.json();

            myStr += `<b style="color:black;">Quote of the Day:</b> "${rJson.quote}"`;
            document.getElementById("author").innerHTML = `<b>- By</b> ${rJson.author}`;
            document.getElementById("id").innerHTML = `<b>Quote ID:</b> ${rJson.id}`;
            document.getElementById("quote").innerHTML = myStr;

            resolve();
        } catch (err) {
            alert(`Error: ${err}`);
            reject(err);
        }
    });
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    populate();
});
