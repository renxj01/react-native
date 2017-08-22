$(function(){
	load();
});
function load(){
	var num = $("#loadmore").attr("data");	
	var i = 1; //设置当前页数
	if(num==23){
		url = '/e/action/get_news_index1.php'
	}else{
		url = '/e/action/get_news_index.php'
	}
	
	$('#loadmore').on('click',function(){
	$.ajax({
	url : url,
	type:'POST',
	data:{"next":i,'table':'news','action':'getmorenews','limit':12,'small_length':120,'classid':num},
	dataType : 'html',
	beforeSend:function(){
	$("#loadmore").show().html('<img src="/style2016/img/loading.gif"  />正在努力加载中...');
	$('#loadmore').attr('disabled','disabled');
	},
	success : function(data){
	if(data){
	$("#showajaxnews").append(data);
	$("#loadmore").removeAttr('disabled');
	$("#loadmore").html('<img src="/style2016/img/click.png">&nbsp;&nbsp点击加载更多');
	i++;
	}else{
	$("#loadmore").show().html("已全部加载完毕！");
	$('#loadmore').attr('disabled','disabled');
	return false;
	}
	}
	});
	});
}