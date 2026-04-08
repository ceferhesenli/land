window.addEventListener('scroll',() =>{
    const header = document.getElementById('header');
    if(window.scrollY > 1){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
});






const modal = document.getElementById("videoModal");
const btn = document.getElementById("openVideo");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
  modal.querySelector("video").pause(); 
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.querySelector("video").pause();
  }
}

function show1(){
    document.getElementById("feature-icon-one").className="bx bx-rocket";
  let photo = document.getElementById("photo").src="image/features-4.webp";
    document.getElementById("text").innerHTML = "Innovation Excellence";
     document.getElementById("text-one").innerHTML ="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.";

     document.getElementById("text-list").innerHTML="Excepteur sint occaecat cupidatat non proident";
     document.getElementById("text-list-one").innerHTML="Sunt in culpa qui officia deserunt mollit anim";
  document.getElementById("text-list-two").innerHTML="At vero eos et accusamus et iusto odio";
  document.getElementById("text-list-tree").innerHTML="Et harum quidem rerum facilis est et expedita";

  document.getElementById("number-one").innerHTML="99%";
  document.getElementById("number-two").innerHTML="50K+";
  document.getElementById("number-tree").innerHTML="24/7";

  document.getElementById("num-text").innerHTML="Uptime";
  document.getElementById("num-text-one").innerHTML="Users";
  document.getElementById("num-text-two").innerHTML="Support";

  document.getElementById("image-text").innerHTML="Performance";
  document.getElementById("image-text-one").innerHTML="+85% Improvement";
          document.getElementById("image-icon").className="fa-solid fa-chart-line";
}

function show2(){
     document.getElementById("feature-icon-one").className="bx bx-shield";
       let photo = document.getElementById("photo").src="image/features-2.webp";
           document.getElementById("text").innerHTML = "Advanced Security";
          document.getElementById("text-one").innerHTML ="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore.";

            document.getElementById("text-list").innerHTML="Temporibus autem quibusdam et aut officiis";
             document.getElementById("text-list-one").innerHTML="Nam libero tempore cum soluta nobis";
               document.getElementById("text-list-two").innerHTML="Itaque earum rerum hic tenetur a sapiente";
                 document.getElementById("text-list-tree").innerHTML="Quis autem vel eum iure reprehenderit qui";

                   document.getElementById("number-one").innerHTML="256-bit";
                   document.getElementById("number-two").innerHTML="ISO";
                   document.getElementById("number-tree").innerHTML="GDPR";

                    document.getElementById("num-text").innerHTML="Encryption";
                    document.getElementById("num-text-one").innerHTML="Certified";
                     document.getElementById("num-text-two").innerHTML="Compliant";

                       document.getElementById("image-text").innerHTML="Security";
                       document.getElementById("image-text-one").innerHTML="Military Grade";
                       document.getElementById("image-icon").className="bx bx-shield";                    
}

function show3(){
   document.getElementById("feature-icon-one").className="ri-flashlight-line";
    let photo = document.getElementById("photo").src="image/features-6.webp";
    document.getElementById("text").innerHTML = "Lightning Performance";
     document.getElementById("text-one").innerHTML ="Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur quis autem vel.";

      document.getElementById("text-list").innerHTML="Duis aute irure dolor in reprehenderit in voluptate";
       document.getElementById("text-list-one").innerHTML="Excepteur sint occaecat cupidatat non proident";
       document.getElementById("text-list-two").innerHTML="Sunt in culpa qui officia deserunt mollit";
        document.getElementById("text-list-tree").innerHTML="Sed ut perspiciatis unde omnis iste natus";

         document.getElementById("number-one").innerHTML="0.5s";
         document.getElementById("number-two").innerHTML="100%";
          document.getElementById("number-tree").innerHTML="CDN";

          document.getElementById("num-text").innerHTML="Load Time";
           document.getElementById("num-text-one").innerHTML="Optimized";
           document.getElementById("num-text-two").innerHTML="Global";
   
           document.getElementById("image-text").innerHTML="Speed";
           document.getElementById("image-text-one").innerHTML="Ultra Fast";
             document.getElementById("image-icon").className="ri-speed-up-line"; 
}

function show4(){
     document.getElementById("feature-icon-one").className="ri-heart-pulse-fill";
       let photo = document.getElementById("photo").src="image/features-1.webp";
        document.getElementById("text").innerHTML = "Premium Support";
         document.getElementById("text-one").innerHTML ="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";

               document.getElementById("text-list").innerHTML="Neque porro quisquam est qui dolorem ipsum";
               document.getElementById("text-list-one").innerHTML="Quia dolor sit amet consectetur adipisci velit";
                document.getElementById("text-list-two").innerHTML="Sed quia non numquam eius modi tempora";
                 document.getElementById("text-list-tree").innerHTML="Incidunt ut labore et dolore magnam aliquam";

           document.getElementById("number-one").innerHTML="24/7";
           document.getElementById("number-two").innerHTML="2min";
           document.getElementById("number-tree").innerHTML="Expert";
            
           document.getElementById("num-text").innerHTML="Available";
           document.getElementById("num-text-one").innerHTML="Response";
           document.getElementById("num-text-two").innerHTML="Team";

            document.getElementById("image-text").innerHTML="Support";
            document.getElementById("image-text-one").innerHTML="Always Here";
             document.getElementById("image-icon").className="ri-customer-service-line";

}

function changeContent(text, imgSrc){
  let textEl = document.getElementById("text");
  let photoEl = document.getElementById("photo");
  
  textEl.classList.add("hidden");
  photoEl.classList.add("hidden");

  setTimeout(()=>{
    textEl.innerText =text;
    photoEl.src = imgSrc;

    textEl.classList.remove("hidden");
    photoEl.classList.remove("hidden");
  },400)
};


function startCounter(id,target,speed){
  let el = document.getElementById(id);
  let count = 0;
  let interval = setInterval(() =>{
    el.textContent = count;
    count++;
    if(count>target){
      clearInterval(interval);
    }
  },speed)
}

startCounter("counter1", 250,10);
startCounter("counter2", 99,20);
startCounter("counter3", 47,45);
startCounter("counter4",156,10);


const toggle = document.getElementById('toggle');
  const toggleCircle = document.getElementById('toggleCircle');
  const boxes = [
    document.getElementById('pricing-box-1'),
    document.getElementById('pricing-box-2'),
    document.getElementById('pricing-box-3')

  ];

  let monthly = true;

  toggle.addEventListener('click', () => {
    monthly = !monthly;
    if(monthly){
      toggleCircle.style.left = '3px';
      toggleCircle.style.background = '#fff';
      toggle.style.background = '#00a19e2d';
      boxes[0].innerHTML = '<sup>$</sup>12 <sup> /mo</sup>';
      boxes[1].innerHTML = '<sup>$</sup>29 <sup> /mo</sup>' ;
      boxes[2].innerHTML = '<sup>$</sup>59<sup> /mo</sup>' ;
    
    } else {
      toggleCircle.style.left = '33px';
      toggleCircle.style.background = '#fff';
      toggle.style.background = '#00a19eff';
      boxes[0].innerHTML = '<sup>$</sup>120<sup>/yr</sup>';
      boxes[1].innerHTML = '<sup>$</sup>290<sup>/yr</sup>' ;
      boxes[2].innerHTML = '<sup>$</sup>590<sup>/yr</sup>' ;
    }
  });




  const accordionbox = document.querySelectorAll(".accordionbox");

  accordionbox.forEach(acc => {
    acc.addEventListener("click", () => {
      acc.classList.toggle("active");
    });
  });


  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.menu');

menu.onclick = () => {
 navbar.classList.toggle('active');
}
 window.onscroll = () =>{
 navbar.classList.remove('active');
 }

    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdown = document.querySelector(".dropdown");

    
    dropdownBtn.addEventListener("click", function(e){
      e.preventDefault();

      if(dropdown.style.display === "block"){
        dropdown.style.display = "none";   // bağla
      } else {
        dropdown.style.display = "block";  // aç
      }
    });

