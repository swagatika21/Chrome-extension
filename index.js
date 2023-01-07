let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn =document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))



if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
   render(myLeads)

}
function render(Leads) {

    let listItems = ""
    for (let i = 0; i < Leads.length; i++) {   //this is known as template string
        listItems += `
         <li>
         <a target='_blank' href='${Leads[i]}'>   
         ${Leads[i]}
         </a>
         </li>`

    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick",function()
{  
    localStorage.clear()
    myLeads=[]
   render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    //stringify changes array to string
    //parse will convert it back to array
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

   render(myLeads)
   
})
const tabs=[
    {url:"www"}
]
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs)
    {  
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    });
   
})

