function hideFilter() {
    const brand = document.querySelector(".section4TitleInnerSpecialSettingInnerFilterInnerFilBrandInnerTitleInnerTitle");
    const brandList = document.querySelector(".section4TitleInnerSpecialSettingInnerFilterInnerFilBrandInnerListInner");
  
    const size = document.querySelector(".section4TitleInnerSpecialSettingInnerFilterInnerFilSizeInnerInnerTitleInnerTitle");
    const sizeList = document.querySelector(".section4TitleInnerSpecialSettingInnerFilterInnerFilSizeInnerInnerColorFilterInner");
  
    const lenght = document.querySelector(".section4TitleInnerSpecialSettingInnerFilterInnerFilLengthTitleInnerTitle");
    const lenghtList = document.getElementById("filterLenght");
  
    const color = document.querySelector(".section4TitleInnerSpecialSettingInnerFilterInnerFilColorInnerTitleInnerTitle");
    const colorList = document.querySelector(".section4TitleInnerSpecialSettingInnerFilterInnerFilColorInnerColorInner");
  
    const price = document.querySelector(".section4TitleInnerSpecialSettingInnerFilterInnerFilPriceInnerTitleInnerTitle");
    const priceList = document.querySelector(".section4TitleInnerSpecialSettingInnerFilterInnerFilPriceInnerListStyleInner");
  
  
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