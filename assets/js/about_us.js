AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".about_us-cards");
const exp = [
  {
     title: "Software Development Intern",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    desp: "Welcome to the channel! I'm Lavish, a computer science student pursuing my B-Tech degree. I'm incredibly passionate about technology and I'm thrilled to share my knowledge with all of you amazing individuals.",
    desp2: "On this channel, you can expect a wide array of educational videos covering topics such as Google Cloud and the Qwiklab program, as well as insights into various other events. I'll also be sharing programming videos, tips and tricks, interviews, internships, and much more!",
    desp3: "My goal is to provide you with valuable content that you can apply to your own learning journey. If you enjoy the videos , I invite you to join our ever-growing family by hitting that red subscribe button. Together, we can continue to explore the exciting world of technology.",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({  desp , desp2 , desp3}) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <article class="card-body">
          <header>
            <ol>
            <div class="desptext">
              ${desp}
            </div>
            </ol>
            <ol>
            <div class="desptext">
              ${desp2}
            </div>
            </ol>
            <ol>
            <div class="desptext">
              ${desp3}
            </div>
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Telegram",
    cardImage: "assets/images/experience-page/1.png",
    description:
      "Join now ",
    link:"https://t.me/bteckyls"
  },
  {
    title: "Whatapp Channel",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Join now ",
    link:"https://whatsapp.com/channel/0029Va7uSWT7oQhlRVJKka1Q" 
  },
  {
    title: "Instagram",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Join now ",
    link:"https://www.instagram.com/lavish_sheth_ls/"
  },
  {
    title: "LinkedIn",
    cardImage: "assets/images/experience-page/4.png",
    description:
      "Join now ",
    link:"https://www.linkedin.com/in/lavish-sheth-163844215/"
  },
  {
    title: " Btecky Whatapp Community 1",
    cardImage: "assets/images/experience-page/c1.png",
    description:
      "Join now , Join Community 2 if Coummunity 1 is full ",
    link:"https://chat.whatsapp.com/IiJY9d1LUjXKjzQxLahf7E" 
  },
  {
    title: "Btecky Whatapp Community 2",
    cardImage: "assets/images/experience-page/c2.png",
    description:
      "Join now ",
    link:"https://whatsapp.com/channel/0029Va7uSWT7oQhlRVJKka1Q" 
  },
  {
    title: "Btecky Whatapp Group 1",
    cardImage: "assets/images/experience-page/g1.png",
    description:
      "Join now ",
    link:"https://chat.whatsapp.com/Cg9oFyxsQ3Q2A4pVQiLg1A" 
  },
  {
    title: "Btecky Whatapp Group 2",
    cardImage: "assets/images/experience-page/g2.png",
    description:
      "Join now ",
    link:"https://chat.whatsapp.com/K8IjflRKrV19wmhAzAtvkA" 
  },
  {
    title: "Btecky Whatapp Group 3",
    cardImage: "assets/images/experience-page/g3.png",
    description:
      "Join now ",
    link:"https://chat.whatsapp.com/EpTufAUu4Bu8Ym3cbnKBuF" 
  },
  {
    title: "Btecky Whatapp Group 4",
    cardImage: "assets/images/experience-page/g4.png",
    description:
      "Join now ",
    link:"https://chat.whatsapp.com/FS5Jxa4MuDEACz6LXaEwZj" 
  },
  {
    title: "Btecky OpenSource - 1",
    cardImage: "assets/images/experience-page/o1.png",
    description:
      "Join now ",
    link:"https://chat.whatsapp.com/Dz6LRmBjVlGIT8kSHYJPq9" 
  },
  {
    title: "Btecky OpenSource - 2",
    cardImage: "assets/images/experience-page/o2.png",
    description:
      "Join now ",
    link:"https://chat.whatsapp.com/KMg8wBIDzUHBjNWlxKfKRH" 
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description, link}) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle"><Em>${title}</Em></h2><br>
          <p class="copy">${description}</p></div>
        <a href="${link}" target="_blank" class="sociallink"><stronge>Link to connect</stronge> </a> 
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Lavish Sheth",
    subtitle: "Owner",
    image: "assets/images/experience-page/lavish.png",
    desp: "I am Lavish Sheth, a System Engineer and former Impetus intern. I create content and founded @btecky and @algorithm&code. As a Google Cloud Facilitator, I've helped over 1000 students globally. I also teach coding and technical skills to empower aspiring tech professionals.",
    href: "https://www.linkedin.com/in/lavish-sheth-163844215/",
  },
  {
    title: "KushaL Agrawal",
    subtitle: "Moderator and Event Manager",
    image: "assets/images/experience-page/kushal.jpg",
    desp: "Experienced campus ambassador with Coding Ninjas, Btecky, Lets Upgrade, and Syncloop. Skilled in community engagement and leadership. Hack2 Skill campus ambassador with strong communication abilities.",
    href: "https://www.linkedin.com/in/kushal-agrawal347/",
  },
  {
    title: "Bhargav shirin",
    subtitle: "Mentor",
    image: "assets/images/experience-page/bhargav.jpg",
    desp: "Student at GITAM University | OCI certified Developer Professional | Certified Cloud Architect | Firebase | Kubernetes | Docker | GCP | AZURE | AWS | Web Developer | Git & Github | Tech Enthusiast",
    href: "https://www.linkedin.com/in/bhargav-shirin-nalamati-34092a263/",
  },
  {
    title: "Sumit Kumar",
    subtitle: "Technical Adviser",
    image: "assets/images/experience-page/sumit.jpg",
    desp: "Syncloop Campus Ambassador with expertise in technical writing, content creation, and cloud computing. Strong communicator with a passion for community engagement and leadership.",
    href: "https://www.linkedin.com/in/sumit-kumar-6999999cloudcomputing/",
  },
];
  const showCards3 = () => {
    let output = "";
    mentor.forEach(
      ({ title, image, subtitle, desp, href }) =>
        (output += `  
        <div class="blog-slider__item swiper-slide">
          <div class="blog-slider__img">
              <img src="${image}" alt="">
          </div>
          <div class="blog-slider__content">
            <div class="blog-slider__title">${title}</div>
            <span class="blog-slider__code">${subtitle}</span>
            <div class="blog-slider__text">${desp}</div>
            <a href="${href}" target="_blank" class="blog-slider__button">Connect him on linkedIn </a>   
          </div>
        </div>
        `)
    );
    hackathonsection.innerHTML = output;
  };
  document.addEventListener("DOMContentLoaded", showCards3);
