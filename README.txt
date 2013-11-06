This is just a simple comment preview similar to the way that Chris Coyier displays on http://css-tricks.com.

I did not come up with the idea for concept, I saw a similar implementation on http://css-tricks.com and decided to give it a go, and this is the result.

--------------------------
Installation Instructions
--------------------------

1. Copy the code from commentpreview.php to your comments.php in your WordPress theme. I placed it below the comment entry form itself so that you can view the preview whilst you type.

2. Copy the code from commentpreview.js to where-ever you place your Javascripts for your site. This has 2 dependencies:
	
	a. jQuery	 > //ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js 
	b. Crypto-js > //crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5.js

	Be sure to enqueue your scripts properly! Take a look at
	http://ivanthevariable.com/importance-enqueueing-wordpress/ if you don't know 
	how to enqueue.

3. Style the html from commentpreview.php to match the general look and feel of your site!
