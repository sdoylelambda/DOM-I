const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// 2nd pic
let pic = document.getElementById("cta-img");
pic.setAttribute('src', siteContent["cta"]["img-src"]);

// // 3rd pic
let lastPic = document.getElementById("middle-img");
lastPic.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// // Nav 
const navigation = document.querySelector('nav');
navigation.children[0].textContent = 'Services';
navigation.children[1].textContent = 'Services';
navigation.children[2].textContent = 'Services';
navigation.children[3].textContent = 'Services';
navigation.children[4].textContent = 'Services';
navigation.children[5].textContent = 'Services';

// // a tag
// let a = document.querySelector('a');
// a.setAttribute('src', siteContent["nav"]["img-src"]);

// // button
let btnID = document.getElementById("button");
// btnID.textContent = siteContent.cta['button'];

// // Main Paragraph
// const ftures = document.createElement('p');
// ftures.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// // const secContent = document.querySelector('.contact');
// // secContent.appendChild(ftures);




// const newNavItems = ['Boards', 'Bikes'] 
// newNavItems.forEach(item => {
//   const anchorItem = document.createElement('a')
//   anchorItem.text = item
//   anchorItem.href = '#'
//   anchorItem.style.color = 'green'
//   document.querySelector('nav').appendChild(anchorItem)
// })

// CTA
// document.querySelector('#cta-img').scr = siteContent['cta']['img-src']
// document.querySelector('.cta-text button').innerHTML = siteContent['cta']['button']
// document.querySelector(
//   'cta-text h1'
// ).innerHTML = siteContent['cta']['h1']

// // Contact
// const contacts = document.querySelector('.contact')
// contacts.querySelector('h4').innerHTML = siteContent['contact']['contact-h4']
// const contactPtags = contact.querySelector('p')
// contactPtags[0].innerHTML = siteContent['contact']['address']
// contactPtags[1].innerHTML = siteContent['contact']['phone']
// contactPtags[2].innerHTML = siteContent['contact']['email']

// // Footer
document.querySelector('footer p').innerHTML = 'Copyright Great Idea! 2018'





// // Links

// let linkData = siteContent["nav"];

// // Task 3 New Content
// let node = document.createElement("a");
// console.log(node);
// let testNode = document.createNewNode("Hello World");
// console.log(textNode);
// let text = node.appendChild(testNode);

// document.querySelector("nav").appendChild(testNode);

// let links = document.querySelector("a");
// links.forEach(function(item, i) {
//   item.style.color = "green";
//   item.textContent = linksData['nav-item-${i + 1}'];
// });

// // CTA
// let cta = siteContent["cta"];

// // CTA IMG
// let ctaImg = document.getElementById("cta-img");
// ctaImg.src = cta("img-src");

// // CTA Text
let ctaText = document.querySelector(".cta-text");
let ctaChil = ctaText.childNodes;

// // for loop







// H4




//cta text
let h1Text = document.querySelector("h1");
h1Text.innerText = "DOM is Awesome";

// Bottom Content
// let bottomText = Array.from(document.getElementsByClassName('text-content')
// );
// bottomText.forEach(function)(elem) {
//   const elmArr = Array.from(dlem.children);
// };