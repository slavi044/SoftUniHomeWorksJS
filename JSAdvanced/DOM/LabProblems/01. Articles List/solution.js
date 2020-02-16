function createArticle() {
	let title = document.getElementById('createTitle').value;
	let content = document.getElementById('createContent').value;
	let section = document.getElementById('articles'); 
	
	let a = document.createElement('article');
	
	let h3 = document.createElement('h3');
	h3.innerHTML = title;

	let p = document.createElement('p');
	p.innerHTML = content;

	if (title.length > 0 && content.length > 0) {
		a.appendChild(h3);
		a.appendChild(p);
		section.appendChild(a);
	}

	document.getElementById('createTitle').value = '';
	document.getElementById('createContent').value = '';
}