const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
const input = document.getElementById('myInput');
const add = document.getElementById('.addBtn')


let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}

// function showHide() {
//     let task = document.getElementById('addtask')
//     if (task.value == 1) {
//         document.getElementById('hidden-panel').style.display = 'block'
//     } else {
//         document.getElementById('hidden-panel').style.display = 'none'
//     }
// }
function showHide(){
    var x = document.getElementById("addtask");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


function addTodo(){
    let todoText = input.value;
    if(todoText != ''){
        input.value = '';

		var li = document.createElement('li');
		var ul = document.querySelector('ul')
		var attr = document.createAttribute('draggable');
		li.className = "list-item";
		attr.value = "true";
		li.setAttributeNode(attr);

		li.appendChild(document.createTextNode(todoText));
		ul.appendChild(li);
    }
}

// add.addEventListener('click', addTodo);

function go(){
	location.href= "draganddrop1.html";
}