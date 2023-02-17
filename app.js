let course = document.querySelector(".my-courses");
let courseList = document.getElementById('course-list');


course.addEventListener('click', function() {
  let item = courseList.classList;


  if(item.contains('hide')){

    item.remove('hide')
    console.log('yass b')

  }
  else{

    item.add('hide')
    console.log('yassss')

  }
});


let toggleBtn = document.querySelector(".toggle-btn");
let nav = document.querySelector(".nav");

toggleBtn.addEventListener('click', function() {

  let items = nav.classList;

  if (items.contains('hide')) {
    items.remove('hide');
  }
  else{
    items.add('hide');
  }
})
