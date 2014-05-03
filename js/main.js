$(document).ready( function() {
	

	console.log('A quiet greeting');
	// alert('An obnoxious greeting');
	console.log( $('.nav').html() );

	// Change html
	// $('.nav').html("<a href='#'>Click me</a>");


	// Change on click
	$('.box').on('click', function() {
		$(this).toggleClass('active');
	});

	$('.toggle').on('click', function() {
		$('.box').slideToggle(20000);
	});




});