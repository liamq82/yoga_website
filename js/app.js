$(document).ready(function() {
  $('#view_timetable_link').smoothScroll({offset: -100});
	$('#view_classes_link').smoothScroll({offset: -50});

	$('#class_1').click(function() {
    $.smoothScroll({
      direction: 'left',
      scrollElement: $('div.scrollme'),
      scrollTarget: '#class_1_description'
    });
    return false;
  	});
  	$('#class_2').click(function() {
    $.smoothScroll({
      direction: 'left',
      scrollElement: $('div.scrollme'),
      scrollTarget: '#class_2_description'
    });
    return false;
  	});
  	$('#class_3').click(function() {
    $.smoothScroll({
      direction: 'left',
      scrollElement: $('div.scrollme'),
      scrollTarget: '#class_3_description'
    });
    return false;
  	});
  	$('#class_4').click(function() {
    $.smoothScroll({
      direction: 'left',
      scrollElement: $('div.scrollme'),
      scrollTarget: '#class_4_description'
    });
    return false;
  	});
  	
});