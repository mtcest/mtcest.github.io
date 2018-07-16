$(function(){
	let mobileReady = false;
	if (window.innerWidth > 845){

		$(".stockHeader").append(`<div class="nvbtn" id="about">about</div>
		<div class="nvbtn" id="tos">tos</div>
		<div class="nvbtn" id="requirements">requirements</div>
		<div class="nvbtn" id="news">news</div>
		<div class="nvbtn" id="login">login</div>
		<div class="nvbtn" id="signup">signup</div>`)

	}else{
		$(".stockHeader").append("<img class='mobileStack' src='assets/mobileStack.svg'></img>")

	}

	if (window.innerWidth > 1086){
		$("body").append(`<div class="signupNav">
				<div class="snvph"><div id="suph"></div>&nbsp;username:</div>
				<input type="text" class="snvin" id="Username">
				<div class="snvph">Choose a password:</div>
				<input type="password" class="snvin" id="password">
				<div class="snvph">Repeat password:</div>
				<input type="password" class="snvin" id="passwordRepetition">
				<div class="snvbtn">Sign up</div>
				<div class="disclaimer">By clicking "Signup" you agree to our
				<a href="tos.html">terms of service</a> and are aware of the
				account requirements (<a href="requirements.html">see here</a>).</div>
			</div>`)
		$(".footer").attr("id", "normalFooter")
		$(".mainFooter").attr("id", "nmf")
		}else{
		$(".footer").attr("id", "mobileFooter")
		$(".mainFooter").attr("id", "mmf")

	}

	if (!(window.innerWidth > 618)){
		$(".mainFooter").attr("id", "mmmf")
		$(".subFooter").attr("id", "mmsf")
		$(".footer").attr("id", "mmFooter")

	}

	$(window).resize(function(){
		console.log(window.innerWidth)
		if (window.innerWidth > 845){
			if ($(".nvbtn").length == 0){
				$(".mobileStack").remove()
				$(".mobileNav").remove()
				$(".stockHeader").append(`<div class="nvbtn" id="about">about</div>
				<div class="nvbtn" id="tos">tos</div>
				<div class="nvbtn" id="requirements">requirements</div>
				<div class="nvbtn" id="news">news</div>
				<div class="nvbtn" id="login">login</div>
				<div class="nvbtn" id="signup">signup</div>`)
			}
		}else{
			if ($(".nvbtn").length != 0){
				$(".nvbtn").remove()
				$(".stockHeader").append("<img class='mobileStack' src='assets/mobileStack.svg'></img>")
			}
		}
		if (window.innerWidth > 1086){
			$("body").append(`<div class="signupNav">
					<div class="snvph"><div id="suph"></div>&nbsp;username:</div>
					<input type="text" class="snvin" id="username">
					<div class="snvph">Choose a password:</div>
					<input type="password" class="snvin" id="password">
					<div class="snvph">Repeat password:</div>
					<input type="password" class="snvin" id="passwordRepetition">
					<div class="snvbtn">Sign up</div>
					<div class="disclaimer">By clicking "Signup" you agree to our
					<a href="tos.html">terms of service</a> and are aware of the
					account requirements (<a href="requirements.html">see here</a>).</div>
				</div>`)
			$(".footer").attr("id", "normalFooter")
			$(".mainFooter").attr("id", "nmf")
			}else{
				$(".signupNav").remove()
				$(".footer").attr("id", "mobileFooter")
				$(".mainFooter").attr("id", "nmf")

			}
		if (!(window.innerWidth > 618)){
			$(".footer").attr("id", "mmFooter")
			$(".mainFooter").attr("id", "mmmf")
			$(".subFooter").attr("id", "mmsf")

		}else{
			$(".subFooter").attr("id", "nsf")
			if (window.innerWidth > 1086){
				$(".mainFooter").attr("id", "nmf")
				$(".footer").attr("id", "normalFooter")
			}else{
				$(".mainFooter").attr("id", "mmf")
				$(".footer").attr("id", "mobileFooter")
			}
		}

	})

	$("body").on("click", ".mobileStack", function() {
		if ($(".mobileNav").length == 0){
			$(".stockHeader").append(`<div class='mobileNav'>
				<div class='mnvbtn' id='aboutm'>about</div>
				<div class='mnvbtn' id='tosm'>tos</div>
				<div class='mnvbtn' id='requirementsm'>requirements</div>
				<div class='mnvbtn' id='newsm'>news</div>
				<div class='mnvbtn' id='loginm'>login</div>
				<div class='mnvbtn' id='signupm'>signup</div>
				</div>`)
			$(".mobileNav").fadeIn("fast", function() {
				mobileReady = true
			});
		}
	})

	$("body").on("click", function(e){
		console.log()
		if ($(".mobileNav").length != 0 && mobileReady && ($(e.target).parent().attr("class") != "mobileNav" && $(e.target).attr("class") != "mobileNav")){
			$(".mobileNav").fadeOut("fast", function(){
				$(".mobileNav").remove()
				mobileReady = false
			});
		}
	})
	
});
