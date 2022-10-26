'use strict';

let orderLists = document.querySelectorAll('[data-list]');
let choicesLinks = document.querySelectorAll('.link-desktop');
let choicesBtns = document.querySelectorAll('.btn-mobile');
let orderSelects = document.querySelectorAll('.alternative-choices__select');

for (let choicesBtn of choicesBtns) {

  for (let choicesLink of choicesLinks) {

    if (mobileWidth.matches) {
      choicesBtn.classList.toggle('active');
    } else if (tabletWidth.matches) {
      choicesLink.classList.toggle('active');
    }
    
    orderLists.forEach(makeOrder);

    mobileWidth.addEventListener('change', function(evt) {

      if (evt.matches) {
        choicesBtn.classList.toggle('active');   
        choicesLink.classList.toggle('active'); 
      }

      orderLists.forEach(makeOrder);
    
    });

    tabletWidth.addEventListener('change', function(evt) {

      if (evt.matches) {
        choicesBtn.classList.toggle('active');   
        choicesLink.classList.toggle('active'); 
      }
      
      orderLists.forEach(makeOrder);
    
    });

  }

} 

function makeOrder(orderList) {  
  let orderLinks = orderList.querySelectorAll('.active');
  
  orderList.addEventListener('click', function(evt) {
    let target = evt.target.closest('a');

    if (!target) return; 
    
    for (let i = 0; i < orderLinks.length; i++) {
      
      for (let orderSelect of orderSelects) {

        if (orderList.dataset.list === orderSelect.dataset.order) {

          if (target == orderLinks[i]) {
            orderSelect.selectedIndex = i;
          }

        }

      }
      
    }
      
  });

}


