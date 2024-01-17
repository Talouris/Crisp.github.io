function hideFilter() {
    const brand = document.querySelector(".brand-title");
    const brandList = document.querySelector(".brand-list-inner");
  
    const size = document.querySelector(".size-title");
    const sizeList = document.querySelector(".size-list-inner");
  
    const lenght = document.querySelector(".dress-title");
    const lenghtList = document.getElementById("filterLenght");
  
    const color = document.querySelector(".color-title");
    const colorList = document.querySelector(".color-list-inner");
  
    const price = document.querySelector(".price-title");
    const priceList = document.querySelector(".price-list-inner");
  
  
    const arrOfFilter = [brand,size,lenght,color,price];
    const arrOfFilterLists = [brandList,sizeList,lenghtList,colorList,priceList];
  
    for(let i= 0; i < arrOfFilter.length; i++) {
      arrOfFilter[i].addEventListener('click', () => handleClickFilter(arrOfFilter[i], arrOfFilterLists[i]));
      if (arrOfFilter[i].classList.contains('active')) {
        arrOfFilter[i].classList.remove('active');
        arrOfFilterLists[i].style.display = "none";
      }
    }
  
  }
  
  function handleClickFilter(elemetIndex, elementList) {
    elemetIndex.classList.contains('active') ? (elementList.style.display = "none", elemetIndex.classList.remove('active')) : (elementList.style.display = "block", elemetIndex.classList.add('active'));
    // if (elemetIndex.classList.contains('active')) {
    //   elementList.style.display = "none";
    //   elemetIndex.classList.remove('active');
    // } else {
    //   elementList.style.display = "block";
    //   elemetIndex.classList.add('active');
    // } 
  }  
  
  hideFilter()