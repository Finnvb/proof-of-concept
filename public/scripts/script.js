


    document.addEventListener('DOMContentLoaded', () => {
        document
          .getElementById('myForm')
          .addEventListener('submit', handleForm);
      });

      function handleForm(ev) {
        ev.preventDefault(); //stop the page reloading
        //console.dir(ev.target);
        let myForm = ev.target;
        let fd = new FormData(myForm);

        //add more things that were not in the form
        // fd.append('api-key', 'myApiKey');

        //look at all the contents
        for (let key of fd.keys()) {
          console.log(key, fd.get(key));
        }
        let json = convertFD2JSON(fd);

        //send the request with the formdata
        let url = 'http://localhost:1337/';
        let h = new Headers();
        h.append('Content-type', 'application/json');

        let req = new Request(url, {
          headers: h,
          body: json,
          method: 'POST',
        });
        //console.log(req);
        fetch(req)
          .then((res) => res.json())
          .then((data) => {
            console.log('Response from server');
            console.log(data);
          })
          .catch(console.warn);
      }

      function convertFD2JSON(formData) {
        let obj = {};
        for (let key of formData.keys()) {
          obj[key] = formData.get(key);
        }
        return JSON.stringify(obj);
      }