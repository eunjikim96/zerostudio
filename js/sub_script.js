//tab부분
$(function () {
	//board li a를 클릭하면 
	$(".board li a").click(function () {
		//#board li a(this)의 부모 on이 추가되고 부모의 형제는 on이 지워진다.
		$(this).parent().addClass("on").siblings().removeClass("on")
	});
});


$(function () {
	var acc = document.getElementsByClassName("accordion1", "accordion2", "accordion3", "accordion4", "accordion5", "accordion6", "accordion7", "accordion8");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}

});

function openBoard(evt, boardName) {
	var i, x, tablinks;
	x = document.getElementsByClassName("board");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" opacity", "");
	}
	document.getElementById(boardName).style.display = "block";
	evt.currentTarget.className += " opacity";
}