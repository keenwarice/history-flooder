
        function performHistoryFlooding() {
            var num = document.getElementById('num').value;
            var url = document.getElementById('url').value;

            for (var i = 1; i <= num; i++) {
                // Simulate clicking a link with the URL put in the box
                var link = document.createElement('a');
                link.href = url;
                link.target = '_blank'; // Open in a new tab/window
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

            alert("History Flooding Successful!\n" + link + "\nNow Appears In Your History " + num + (num === 1 ? " time." : " Times."));
        }
      //Created by Rice
    
