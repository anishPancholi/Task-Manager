import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://task-manager-51aec-default-rtdb.asia-southeast1.firebasedatabase.app/"
    //paste your database url 
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const taskListInDB = ref(database, "taskList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const taskListEl = document.getElementById("task-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    if(validateInput(inputValue)){  //otherwise add empty string also
        push(taskListInDB, inputValue)
    
        clearInputFieldEl()
    }
    
})

function validateInput(inputValue) {

    if (inputValue.trim() === '') {
        alert('Please enter task ');
        return false; // Prevent further actions
    }
    return true;
}

onValue(taskListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        cleartaskListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            
            appendItemTotaskListEl(currentItem)
        }    
    } else {
        taskListEl.innerHTML = "No items here... yet"
    }
})

function cleartaskListEl() {
    taskListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemTotaskListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `taskList/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    taskListEl.append(newEl)
}
