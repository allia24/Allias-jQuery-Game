/* Yes and No buttons*/
$(".restart2").hide();
$(".yes-button").click(function() {
 
    $(".car1").show();
    $(".car2").show();
    $(".car3").show();

});
$(".yes-button").click(function() {
    $(".car").show();
});
$(".yes-button").click(function() {
    $(".title").hide();
});

$(".yes-button").click(function() {
    $(".no-button").hide(); 
     $(".yes-button").hide(); 
});

$(".yes-button").click(function() {
    $(".no").hide();
});

$(".no-button").click(function() {
    $(".no").show();
    $(".restart2").show();
    $(".title").hide();
    $(".yes-button").hide();
    $(".no-button").hide();
});

/* Car 1 */
$(".car1").dblclick(function() {
    $(".turnt").show();
});

$(".car1").dblclick(function() {
    $(".car3").hide();
});

$(".car1").dblclick(function() {
    $(".car2").hide();
});

$(".car1").dblclick(function() {
    $(".car").hide();
});

$(".car1").dblclick(function() {
    $(".left").show();
});
$(".car1").dblclick(function() {
    $(".right").show();
});
/*Car 2 */
$(".car2").dblclick(function() {
    $(".turnt").show();
});

$(".car2").dblclick(function() {
    $(".car1").hide();
});

$(".car2").dblclick(function() {
    $(".car3").hide();
});

$(".car2").dblclick(function() {
    $(".car").hide();
});
$(".car2").dblclick(function() {
    $(".left").show();
});
$(".car2").dblclick(function() {
    $(".right").show();
});
/*Car 3 */
$(".car3").dblclick(function() {
    $(".turnt").show();
});
$(".car3").dblclick(function() {
    $(".car2").hide();
});
$(".car3").dblclick(function() {
    $(".car1").hide();
});
$(".car3").dblclick(function() {
    $(".car").hide();
});
$(".car3").dblclick(function() {
    $(".left").show();
});
$(".car3").dblclick(function() {
    $(".right").show();
});
/* left turn */
$(".left").click(function() {
    $(".Speed").show();
});
$(".left").click(function() {
    $(".right").hide();
});
$(".left").click(function() {
    $(".left").hide();
});
$(".left").click(function() {
    $(".turnt").hide();
});
$(".left").click(function() {
    $(".mph").show();
});
$(".left").click(function() {
    $(".yespeed").show();
});
$(".left").click(function() {
    $(".nospeed").show();
});
/* Right turn */
$(".right").click(function() {
    $(".Speed").show();
});
$(".right").click(function() {
    $(".left").hide();
});
$(".right").click(function() {
    $(".turnt").hide();
});
$(".right").click(function() {
    $(".right").hide();
});
$(".right").click(function() {
    $(".mph").show();
});
$(".right").click(function() {
    $(".yespeed").show();
});
$(".right").click(function() {
    $(".nospeed").show();
});
$(".nospeed").click(function() {
	$(".cliff").show();
});
/* Speed */

$(".yespeed").click(function() {
    $(".morespeed").show(); 
});
$(".yespeed").click(function() {
    $(".clifft").show(); 
});

$(".yespeed").click(function() {
	$(".Speed").hide();
});
$(".yespeed").click(function() {
	$(".yespeed").hide();
    $(".nospeed").hide();
});

$(".yespeed").click(function() {
	$(".cliff").show();
});
$(".yespeed").click(function() {
	$(".noc").show();
});
$(".nospeed").click(function() {
    $(".nomorespeed").show();
});
$(".nospeed").click(function() {
	$(".nospeed").hide();
    $(".yespeed").hide();
});
$(".nospeed").click(function() {
    $(".clifft").show(); 
});
$(".nospeed").click(function() {
    $(".noc").show(); 
});
$(".nospeed").click(function() {
	$(".cliff").show();
});
/* Cliff (no) */

$(".noc").click(function() {
	$(".noct").show();
});
$(".noc").click(function() {
	$(".morespeed").hide();
});
$(".noc").click(function() {
	$(".nomorespeed").hide();
});
$(".noc").click(function() {
	$(".mph").hide();
});
$(".noc").click(function() {
	$(".clifft").hide();
});
$(".noc").click(function() {
	$(".cliff").hide();
});
$(".noc").click(function() {
	$(".cop").show();
});
$(".noc").click(function() {
	$(".car1").hide();
    $(".car2").hide();
    $(".car3").hide();
});
$(".noc").click(function() {
	$(".noc").hide();
    $(".restart2").show();
});
$(".cliff").mouseenter(function() {
	$(".cliff").css("border", "solid 2px green");
});
$(".cliff").click(function() {
	$(".escape").show();
});
$(".cliff").click(function() {
	$(".cliff").hide();
});
$(".cliff").click(function() {
	$(".noc").hide();
});
$(".cliff").click(function() {
	$(".mph").hide();
});
$(".cliff").click(function() {
	$(".morespeed").hide();
});
$(".cliff").click(function() {
	$(".clifft").hide();
});
$(".cliff").click(function() {
	$(".confetti").show();
    $(".restart2").show();
});
/* restart button */
$(".restart2").click(function() {
	$(".raceflags").show();
    $(".title").show();
    $(".yes-button").show();
    $(".no-button").show();
    $(".confetti").hide();
    $(".car1").hide();
    $(".car2").hide();
    $(".car3").hide();
    $(".escape").hide();
    $(".restart2").hide();
    $(".noct").hide();
    $(".cop").hide();
    $(".Speed").hide();
    $(".no").hide();
});


