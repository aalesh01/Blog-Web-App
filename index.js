getdata();

async function getdata(){
   const response =  await fetch('http://localhost:3000/blog/');
   const data = await response.json();

   data.forEach(element => {
       let card = document.createElement("div");

       let time=document.createElement("h4");
       time.innerText = element.created_date;

       let title = document.createElement("h1");
       title.innerText = element.title;

       let body = document.createElement("p");
       body.innerText=element.body;

       let author = document.createElement("h3");
       author.innerText=element.author;

       let category = document.createElement("p");
       category.innerText=element.category;

       let tags = document.createElement("p");
       tags.innerText=element.tags;

       let viewBT=document.createElement("button");
       viewBT.innerText="View";

       let editBT = document.createElement("button");
       editBT.innerText="Edit";
       editBT.addEventListener("click",function(){
           location.href= "/blog/edit.html";
           localStorage.setItem("editID",element.id);
       })

       let deleteBT =  document.createElement("button");
       deleteBT.innerText="delete";
       deleteBT.addEventListener("click",deleteblog);

       async function deleteblog(){
           await fetch(`  http://localhost:3000/blog/${element.id}`,{
             method:"DELETE"
           })
       }

       card.append(time, title, body, author, category, tags,viewBT,editBT, deleteBT);

       document.getElementById("allCards").append(card);

   });

}


document.getElementById("here").addEventListener("click",function(){
    location.href= "blog/create.html";
})
