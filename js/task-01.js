const quanityLiItem = document.querySelectorAll(".item")
//console.log(quanityLiItem)
console.log(`Number of categories: ${quanityLiItem.length}`)
   
quanityLiItem.forEach(element => {
  
      const categoryName = element.firstElementChild;
      //console.log(categoryName);
      console.log(`Category: ${element.firstElementChild.textContent}`)
      
      const ulSibling = categoryName.nextElementSibling;
      //console.log(ulSibling);
    

      const liChildren = ulSibling.children;
      //console.log(ulSibling)
      console.log(`Elements: ${liChildren.length}`);
    } );