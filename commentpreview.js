jQuery(document).ready(function() {
	jQuery('#author').change(function() {
		var author = jQuery(this).val();
		jQuery('.preview-url').text(author);
	})
	jQuery('#email').change(function() {
		var email = CryptoJS.MD5( jQuery(this).val().toLowerCase().trim() );
		jQuery('.commentPreview .avatar').attr('src','http://gravatar.com/avatar/' + email);
	})
	jQuery('#url').change(function() {
		var url = jQuery(this).val();
		jQuery('.preview-url').attr('href',url);
	})
	jQuery('textarea.comment').keyup(function() {
		var comment = jQuery(this).val();
		jQuery('.preview-text').html(comment);
	})
})