//lessons
// -avoid global variables
// - make functions reusable



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

function addNewItem(list, itemText) {

	totalItems++;

	var listItem = document.createElement("li");
	
	var checkBox = document.createElement("input")
	checkBox.checked = true
	checkBox.type = "checkbox";
	checkBox.id = "cb_" + totalItems;
	// checkBox.onclick = updateItemStatus;

	var span = document.createElement("span");
	span.id = "item_" + totalItems;
	span.className = "checked";
 

    //////When the checkbox is unchecked change the lines"
     




	//replace MYSELF to YOURSELF
     



	

	totalItems = (totalItems % 11) + 1;

    switch ( totalItems) {
        

		case 7:
		   span.innerText = "Don't " + itemText;
		   break;

		case 6:
		   span.innerText = "Never again " + itemText;
		   break;

		case 11:
		   span.innerText = "Please don't " + itemText;
		   break;

		case 10:
		   span.innerText = "Make your goal not to " + itemText;
		   break;

		case 1:
		   span.innerText = "Don't you dare " + itemText;
		   break;
		
		case 2:
		   span.innerText = "Make sure you don't " + itemText;
		   break;

		case 3:
		   span.innerText = "How about you don't " + itemText + " ever again";
		   break;

		case 4:
		   span.innerText = itemText + " is for loosers";
		   break;
		
		case 5:
		   span.innerText = "Don't even think about planing to " + itemText;
		   break;

		case 8:
		   span.innerText = ("Don't " + itemText + "!!!!").toUpperCase();

		   break;

		default:
		   span.innerText = "Don't " + itemText;
	}


	checkBox.onclick = function() {
		span.className = (span.className == "checked" ? "": "checked");
	}

	listItem.appendChild(checkBox);
	listItem.appendChild(span);

	list.appendChild(listItem);

}

var totalItems = 0;

//Writing the item txt

var inItemText = document.getElementById("inItemText");
	inItemText.focus();

inItemText.onkeyup = function(e) {

		// var itemText = e.which;

	//ENTER KEY for submit
	if (e.which == 13 ) { 

	    var itemText = inItemText.value
		if (!itemText || itemText == "") {
			return false;
		}

		addNewItem(document.getElementById('nottodo'), itemText);

		inItemText.focus();
		inItemText.select();


    }

};