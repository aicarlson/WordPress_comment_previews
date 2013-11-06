<!-- This is just a demo ala what Chris Coyier does with his comments @ CSS-tricks.com-->
<div class="commentPreview">
	<h3>Comment Preview</h3>
	<div class="theComment">
		<?php echo get_avatar( 'email@example.com', $size = '75'); ?>
		<div class="preview-content">
			<div class="preview-meta"><a href="" class="preview-url"></a>, <?php echo get_the_date(); ?></div>
			<div class="preview-text"></div>
		</div>
	</div>
</div>