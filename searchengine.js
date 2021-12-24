
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
                    <!-- <span class="search-item">${websites[i].url}</span> -->
                </div>
                
                `;
            }
    }   
    }
    
}


selectElement('.search-input').addEventListener('keyup', getResults);



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