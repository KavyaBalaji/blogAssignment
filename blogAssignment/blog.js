function navToNextPage(){
window.location.href = 'createblog.html';
}
function cancelBlog(){
	document.getElementById('blogTitle').value="";
	document.getElementById('blogContent').value = "";
}
function saveBlog(){
	var res = JSON.parse(localStorage.getItem("blogContent"));
	if(res == null)
		res = [];		
	var title = $("#blogTitle").val();
	var content = $("#blogContent").val();
	var titId= document.getElementById('titId').value;
	if(titId == ''){
		var myObj = JSON.stringify({
			
			Title : title,
			Content : content
		});
		res.push(myObj);
		localStorage.setItem("blogContent",JSON.stringify(res));
		window.location.href = 'index.html';
	}else{
		res[titId]=JSON.stringify({			
			Title : title,
			Content : content
		});
		localStorage.setItem("blogContent",JSON.stringify(res));
		window.location.href = 'index.html';
	}
}

function loadBlogPage(){
	var blogLoads = JSON.parse(localStorage.getItem("blogContent"));
	for(var i=0; i < blogLoads.length; i++){
		var blogLoad=JSON.parse(blogLoads[i]);
		var displayTitle = '<div class="blog"><div id="titleEdit"><input type="text" id="displayTitle" name="title" placeholder="Title" value='+blogLoad.Title+'><i class="fa fa-pencil" aria-hidden="true" style="margin-left:2%;" onClick ="editBlog('+i+')"></i></div><div id="contentEdit"><textarea id="displayContent" name="displayContent" rows="5" cols="10" placeholder="Content"> '+blogLoad.Content +' </textarea></div></div>';
		document.getElementById("checkContent").innerHTML+= displayTitle;		
	}
}

function editBlog(i){
	document.location.href="createblog.html?id="+i;
}



	