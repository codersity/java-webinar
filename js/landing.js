$('#mc-form').ajaxChimp({
    url: 'http://facebook.us13.list-manage.com/subscribe/post?u=fc8fb4c7e4f7683218475a4c7&id=46557aefe5',
    callback: function (resp){
    	$('#confirmationModal').modal('show');
    }
});

$(document).ready(function(){
	if(window.location.search === "?confirmed"){
		$('#subscribtionConfirmedModal').modal('show');
	}
});