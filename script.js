let comment_list = document.getElementById("comment_list")

fetch('https://dummyjson.com/comments')
.then(res => res.json())
.then((res)=>{
    res.comments.forEach((element,index) => {
        if (index < 10) {
            let li = document.createElement("li");
            li.innerText= element.body;
            comment_list.appendChild(li);
        }
    });
});