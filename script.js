
        const preSelectedWebsites = [
            "https://www.khanacademy.org",
            "https://www.wikipedia.org",
            "https://www.google.com",
            "https://www.docs.google.com",
            "https://www.duolingo.com",
            "https://www.britannica.com",
            "https://www.quizlet.com",
            "https://www.nationalgeographic.com",
            "https://www.brainpop.com",
            "https://www.codecademy.com",
            "https://www.geogebra.org",
            "https://www.typingclub.com",
            "https://www.canva.com",
            "https://www.desmos.com",
            "https://www.npr.org",
            "https://www.nasa.gov",
            "https://www.flipgrid.com",
            "https://www.noredink.com",
            "https://www.getepic.com",
            "https://www.classroom.google.com"
        ];

        function addHttps(url) {
            if (!url.startsWith("https://")) {
                return "https://" + url;
            }
            return url;
        }


        function performHistoryFlooding() {
            var num = document.getElementById('num').value;
            var url = document.getElementById('url').value;


            url = addHttps(url);

            for (var i = 1; i <= num; i++) {
                var link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            if (!url) {
                alert("The URL field is empty. Flooding unsuccessful.");
            } else {
                alert("History Flooding Successful!\n" + url + "\nNow Appears In Your History " + num + (num == 1 ? " time." : " times."));
            }
        }

        function performPreSelectedFlood() {
            var num = document.getElementById('num').value;
            var websites = [];

            for (var i = 0; i < num; i++) {
                var website = preSelectedWebsites[i % preSelectedWebsites.length];
                websites.push(website);

                var link = document.createElement('a');
                link.href = website;
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

            alert("Pre-Selected Website Flooding Successful!\nFlooded Websites:\n" + websites.join("\n"));
        }
