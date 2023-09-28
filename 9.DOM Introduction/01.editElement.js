function editElement (element, match, replacer) {
   while (element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer);
   }
    //let pattern = new RegExp(match, replacer);
//element.textContent = element.textContent.replace(pattern, replacer);
}

//regex solution