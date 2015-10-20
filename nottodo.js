//lessons
// -avoid global variables
// - make functions reusable

var items = [];
var view = new Object();


view.newListEntry = function(text, index) {
	
	var checkBox = document.createElement("input")
	checkBox.checked = true
	checkBox.type = "checkbox";
	checkBox.id = "cb_" + index;
	// checkBox.onclick = updateItemStatus;

	var span = document.createElement("span");
	span.id = "item_" + index;
	span.className = "checked";

	span.innerText = constructNotText(text, index);

	checkBox.onclick = function() {
		span.className = (span.className == "checked" ? "": "checked");
	}

	var listItem = document.createElement("li");
	
	listItem.appendChild(checkBox);
	listItem.appendChild(span);

	return listItem;
}




function updateItemStatus() {
	var cbId  = this.id.replace("cb_", "");
	var itemText = document.getElementById("item_" + cbId);

    if (this.checked) {
	  itemText.className = "checked";
    } else {
      itemText.className = "";
    }
}


// function replaceMeWithYou(itemText) {
// 	itemText.replace("myself", "yourself");

// }

// function replaceMeToYou(el) {
//     el.innerText = el.innerText
//                     .replace('myself', 'yourself')
//                     .replace('me', 'you')
//                     .replace('mine', 'yours')
//                     .replace('my', 'your')

//     }


//ADDING ITEM TO THE LIST

function constructNotText(itemText, totalItems) {
	var notText;

	switch (totalItems % 11) {
        
		case 7:
		   notText = "Don't " + itemText;
		   break;

		case 6:
		   notText = "Never again " + itemText;
		   break;

		case 0:
		   notText = "Please don't " + itemText;
		   break;

		case 10:
		   notText = "Make your goal not to " + itemText;
		   break;

		case 1:
		   notText = "Don't you dare " + itemText;
		   break;
		
		case 2:
		   notText = "Make sure you don't " + itemText;
		   break;

		case 3:
		   notText = "How about you don't " + itemText + " ever again";
		   break;

		case 4:
		   notText = itemText + " is for loosers";
		   break;
		
		case 5:
		   notText = "Don't even think about planing to " + itemText;
		   break;

		case 8:
		   notText = ("Don't " + itemText + "!!!!").toUpperCase();

		   break;

		default:
		   notText = "Don't " + itemText;
	}
	return notText;

}

function addNewItem(list, itemText) {

	items.push(itemText);

	listItem = view.newListEntry(itemText, items.length)

	list.appendChild(listItem);

}





//Writing the item txt

var newItemBox = document.getElementById("newItemBox");
	newItemBox.focus();


newItemBox.onkeyup = function(e) {

	//ENTER KEY for submit
	if (e.which == 13 ) { 

	    var itemText = newItemBox.value
		if (!itemText || itemText == "") {
			return false;
		}

		addNewItem(document.getElementById('nottodo'), itemText);

		newItemBox.focus();
		newItemBox.select();


    }

};