$('document').ready( function() { //Executar ao carregar a página

   $(".modal-pedro").on("click", function (e) { 
		e.preventDefault();

		let elem = $(this).attr("rel");

		$(".modal-body").html($("#" + elem).html());

		let myModal = new bootstrap.Modal($("#modal-pedro"));

		myModal.show();
	});

} )
   
   //? Irá mudar a classe do elemento e a cor do header/body/footer/destack
  function changeTheme() {

      let src = ($('#logo').attr('src') === './images/logo-default.png') ? './images/logo-darkMode.png' : './images/logo-default.png'

		$('header div').toggleClass('dark')
      $('body').toggleClass('default')
      $('body').toggleClass('dark')
      $(".header__button").toggleClass("default");
      $(".header__button").toggleClass("dark");
      $('#destack').toggleClass('destack')
      $('#destack').toggleClass('destackb')
      $("#destack > div > p").toggleClass('destack__description')
      $("#destack > div > p").toggleClass('destackb__description')
      $("#defaults").toggleClass("dark")
      $('#logo').attr('src', src)
      
  }

  $('#logo').on('click', function() {
     location.reload()
  })


let randomFooter = "#" + Math.floor(Math.random() * 15921905).toString(16);
console.log(randomFooter); 


$("footer").css({
	"background-color": randomFooter,
});
