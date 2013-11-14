jQuery(document).ready(function() {
	jQuery('.commentInput').each(function() {
		jQuery(this).val('');
	});
	jQuery('.commentInput').change(function() { 
		var author = jQuery('#author').val();
		jQuery('.preview-url').text(author);
		var email = CryptoJS.MD5( jQuery('#email').val().toLowerCase().trim() );
		jQuery('.commentPreview .avatar').attr('src','http://gravatar.com/avatar/' + email);
		var url = jQuery('#url').val();
		jQuery('.preview-url').attr('href',url);
	});
	jQuery('textarea.comment').keyup(function() {
		var comment = jQuery(this).val();
		jQuery('.preview-text').html(comment);
	});
});