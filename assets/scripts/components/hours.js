(function () {

  // this.storeHours = function () {

      const time = new Date();
      
      const day = time.getDay();
      let hr = time.getHours();
      hr = (hr >= 12) ? hr - 12: hr;
      const min = time.getMinutes();

      const daylist = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

      let hourNode;
      document.querySelectorAll('[hours]').forEach(elem => {

          hourNode = document.createElement('span');
          // hourNode.innerHTML = elem.innerHTML;
          hourNode.appendChild(document.createTextNode(`${daylist[day]} ${hr}:${min}`));
          elem.classList ? hourNode.classList = elem.classList : false;
          elem.id ? hourNode.id = elem.id : false;

          // for (let prop in elem.dataset) {
          //     hourNode.innerHTML = hourNode.innerHTML.replaceAll('%' + prop.replace('p', ''), elem.dataset[prop]);
          // }

          elem.parentNode.insertBefore(hourNode, elem);
          elem.remove();
      });
  // }

}());