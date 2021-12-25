
//search engine
//dont touch it grrrrr
var i = 2;
var b;
function selectElement(selector){
    return document.querySelector(selector);
}

function clearResults() {
    selectElement('.search-results').innerHTML = "";
}

function getResults() {
    const search = selectElement('.search-input').value;

    clearResults();

    if(search.length > 0){
     for(i = 0; i < websites.length; i++){
         
        if (
            websites[i].title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            websites[i].url.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            )
            {   
                //console.log(i);
                selectElement('.search-results').innerHTML +=  `
                
                <div class ="search-results-item" onclick=onClickFunction()>
                    <span class="search-item">${websites[i].title}</span>

                    <span class="search-url" id=${websites[i].url} ></span>
                    <span class="search-pageNumber" id=${i+1}></span>

                </div>
                
                `;
            }
    }   
    }
    
}

selectElement('.search-input').addEventListener('keyup', getResults);



function onClickFunction(clickedURL) {
    //var a = document.querySelector(".search-results-item div:nth-child(" + i + ")")
    var b = document.getElementsByTagName("span")[2].getAttribute("id");
    console.log("id");
    c= b -= 1;
    console.log(c);
    //console.log("*shrugs*");
    //console.log(a);
    //console.log(clickedURL) 
    //window.open("index.html"/*,"_self"*/);
    
}
//------------------------------------------------------------------------------------------------------------ D A T A B A S E -------------------------------------------------------------------------------------------


const websites = 
[
    {
        title: "Search",
        url: "https://www.youtube.com/",
        pageNumber: "0"
    },
    {
        title: "NTNet",
        url: "https://itch.io/",
        pageNumber: "1"
    },
    {
        title: "Home",
        url: "index.html",
        pageNumber: "2"
    },

    
]