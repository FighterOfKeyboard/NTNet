
//search engine
//dont touch it grrrrr
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
     for(let i = 0; i < websites.length; i++){
        if (
            websites[i].title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            websites[i].url.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            )
            {
                selectElement('.search-results').innerHTML +=  `
                
                <div class ="search-results-item">
                    <span class="search-item">${websites[i].title}</span>
                    <span class="search-url" id=${websites[i].url}></span>
                </div>
                
                `;
            }
    }   
    }
    
}

selectElement('.search-input').addEventListener('keyup', getResults);


var x = 1;
function onClickFunction() {
    var sec = document.querySelector('.search-results div:nth-child(1)')
    var shit = document.getElementsByTagName("span")[1].getAttribute("id");
    console.log(shit);
    window.open("index.html","_self");

}
//------------------------------------------------------------------------------------------------------------ D A T A B A S E -------------------------------------------------------------------------------------------


const websites = 
[
    {
        title: "NTNet",
        url: "www.ntnet.nt"
    },

    {

    },
]