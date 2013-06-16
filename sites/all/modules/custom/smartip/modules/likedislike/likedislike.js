/**
 * This js file handles only the actions which are related to the like/dislike module.
 * Even the styling is handled by the CSS of this module css file so that it becomes a ready to cook kind of thing.
 */
if(Drupal.jsEnabled) {
	$(document).ready(handleFlag);
}

function handleFlag() {
	
}

//Handling the ajax thing for like node.
function likeNode(nodeId) {
	jQuery.ajax({
		type: "GET",
		url: base_path+"likedislike/like/node/add",
		data: 'entityid='+nodeId+"&entity=node",
		success: function(msg) {
			var arrLikeCount = msg.split("/");
			var likeCount = arrLikeCount[0];
			var dislikeCount = arrLikeCount[1];
			
			var msgDivId = "#dislike-container-"+nodeId+" .dislike-count-entity-node";
			jQuery(msgDivId).html(dislikeCount);
			
			var msgDivId = "#like-container-"+nodeId+" .like-count-entity-node";
			jQuery(msgDivId).html(likeCount);
			
			var imageNameLiked = "likeAct.png";
			var imageNameDislike = "dislike.png";
			
			jQuery("#like-container-"+nodeId+' .like a.entity-node').toggleClass('disable-status');
			jQuery("#dislike-container-"+nodeId+' .dislike a.entity-node').toggleClass('disable-status');
			jQuery("#like-container-"+nodeId+' .like img.entity-node').attr('src',base_path+module_path+"/images/"+imageNameLiked);
			jQuery("#dislike-container-"+nodeId+' .dislike img.entity-node').attr('src',base_path+module_path+"/images/"+imageNameDislike);
		}
	});
}

//Handling the ajax thing for dislie node.
function dislikeNode(nodeId) {
	jQuery.ajax({
		type: "GET",
		url: base_path+"likedislike/dislike/node/add",
		data: 'entityid='+nodeId+"&entity=node",
		success: function(msg) {
			var arrLikeCount = msg.split("/");
			var likeCount = arrLikeCount[0];
			var dislikeCount = arrLikeCount[1];
			
			var msgDivId = "#dislike-container-"+nodeId+" .dislike-count-entity-node";
			jQuery(msgDivId).html(dislikeCount);
			
			var msgDivId = "#like-container-"+nodeId+" .like-count-entity-node";
			jQuery(msgDivId).html(likeCount);
			
			var imageNameDisliked = "dislikeAct.png";
			var imageNameLike = "like.png";
			
			jQuery("#dislike-container-"+nodeId+' .dislike a.entity-node').toggleClass('disable-status');
			jQuery("#like-container-"+nodeId+' .like a.entity-node').toggleClass('disable-status');
			jQuery("#dislike-container-"+nodeId+' .dislike img.entity-node').attr('src',base_path+module_path+"/images/"+imageNameDisliked);
			jQuery("#like-container-"+nodeId+' .like img.entity-node').attr('src',base_path+module_path+"/images/"+imageNameLike);
		}
	});
}

//Handling the ajax thing for like node.
function likeComment(commentId) {
	jQuery.ajax({
		type: "GET",
		url: base_path+"likedislike/like/comment/add",
		data: 'entityid='+commentId+"&entity=comment",
		success: function(msg) {
			var arrLikeCount = msg.split("/");
			var likeCount = arrLikeCount[0];
			var dislikeCount = arrLikeCount[1];
			
			var msgDivId = "#dislike-container-"+commentId+" .dislike-count-entity-comment";
			jQuery(msgDivId).html(dislikeCount);
			
			var msgDivId = "#like-container-"+commentId+" .like-count-entity-comment";
			jQuery(msgDivId).html(likeCount);
			
			var imageNameLiked = "likeAct.png";
			var imageNameDislike = "dislike.png";
			
			jQuery("#like-container-"+commentId+' .like a.entity-comment').toggleClass('disable-status');
			jQuery("#dislike-container-"+commentId+' .dislike a.entity-comment').toggleClass('disable-status');
			jQuery("#like-container-"+commentId+' .like img.entity-comment').attr('src',base_path+module_path+"/images/"+imageNameLiked);
			jQuery("#dislike-container-"+commentId+' .dislike img.entity-comment').attr('src',base_path+module_path+"/images/"+imageNameDislike);
		}
	});
}

//Handling the ajax thing for dislie node.
function dislikeComment(commentId) {
	jQuery.ajax({
		type: "GET",
		url: base_path+"likedislike/dislike/comment/add",
		data: 'entityid='+commentId+"&entity=comment",
		success: function(msg) {
			var arrLikeCount = msg.split("/");
			var likeCount = arrLikeCount[0];
			var dislikeCount = arrLikeCount[1];
			
			var msgDivId = "#dislike-container-"+commentId+" .dislike-count-entity-comment";
			jQuery(msgDivId).html(dislikeCount);
			
			var msgDivId = "#like-container-"+commentId+" .like-count-entity-comment";
			jQuery(msgDivId).html(likeCount);
			
			var imageNameDisliked = "dislikeAct.png";
			var imageNameLike = "like.png";
			
			jQuery("#dislike-container-"+commentId+' .dislike a.entity-comment').toggleClass('disable-status');
			jQuery("#like-container-"+commentId+' .like a.entity-comment').toggleClass('disable-status');
			jQuery("#dislike-container-"+commentId+' .dislike img.entity-comment').attr('src',base_path+module_path+"/images/"+imageNameDisliked);
			jQuery("#like-container-"+commentId+' .like img.entity-comment').attr('src',base_path+module_path+"/images/"+imageNameLike);
		}
	});
}

/**
 * Handling the events on ready function.
 */
jQuery(document).ready(function () {
	//This is handling the click on the like link for node only.
	jQuery('.like-container-entity-node .like a').click(function () {
		var nodeId = jQuery(this).attr('nodeid');
		likeNode(nodeId);
	});
	
	//This is handling the click on the dislike link for node only.
	jQuery('.dislike-container-entity-node .dislike a').click(function () {
		var nodeId = jQuery(this).attr('nodeid');
		dislikeNode(nodeId);
	});
	
	//This is handling the click on the like link for comments only.
	jQuery('.like-container-entity-comment .like a').click(function () {
		var nodeId = jQuery(this).attr('nodeid');
		likeComment(nodeId);
	});
	
	//This is handling the click on the dislike link for node only.
	jQuery('.dislike-container-entity-comment .dislike a').click(function () {
		var nodeId = jQuery(this).attr('nodeid');
		dislikeComment(nodeId);
	});
});