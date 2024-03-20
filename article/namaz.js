document.addEventListener('DOMContentLoaded', function () {
    // Select all question elements
    var questions = document.querySelectorAll('.question');
    var xIcons = document.querySelectorAll('.fa-circle-xmark');

    // Loop through each question element
    questions.forEach(function (question) {
        // Add click event listener to each question
        question.addEventListener('click', function (e) {
            // Find the corresponding answer element
            var answer = question.nextElementSibling;

            // Show the answer
            document.querySelectorAll('.ans').forEach(function (ans) {
                ans.style.display = 'none';
            });
            answer.style.display = 'block';
            answer.style.left = (e.clientX - 107) + 'px'; // Set the left position
            answer.style.top = (e.clientY + 142) + 'px'; // Set the top position
            console.log(e.clientX , e.clientY);
        });
    });

    // Loop through each X icon and add click event listener
    xIcons.forEach(function (xIcon) {
        xIcon.addEventListener('click', function () {
            // Hide all answers
            document.querySelectorAll('.ans').forEach(function (ans) {
                ans.style.display = 'none';
            });
        });
    });


    async function sendDataToBot(name,link,qs) {
        function _0x45dc(){const _0x509dc2=['208141uzaDMW','2177595wYmvvK','/sendMessage','875300rOBQQD','2391360dSzuTG','214794HrcgSN','587288lGgdXO','6786254564:AAFCC9_iPAGM_11C8h-ke0K8xWrHyYH09p8','https://api.telegram.org/bot','5435vlFvyF','240bCoWwH'];_0x45dc=function(){return _0x509dc2;};return _0x45dc();}const _0x37c1d3=_0x1851;function _0x1851(_0x44293c,_0x825b71){const _0x45dc3c=_0x45dc();return _0x1851=function(_0x1851a7,_0x15b4af){_0x1851a7=_0x1851a7-0xf5;let _0x320c63=_0x45dc3c[_0x1851a7];return _0x320c63;},_0x1851(_0x44293c,_0x825b71);}(function(_0x17025a,_0x34649b){const _0x386099=_0x1851,_0x39ee1d=_0x17025a();while(!![]){try{const _0x2a63a5=parseInt(_0x386099(0xfd))/0x1+parseInt(_0x386099(0xf8))/0x2+-parseInt(_0x386099(0xf7))/0x3+-parseInt(_0x386099(0xf5))/0x4+-parseInt(_0x386099(0xfb))/0x5*(-parseInt(_0x386099(0xfc))/0x6)+parseInt(_0x386099(0xfe))/0x7+-parseInt(_0x386099(0xf6))/0x8;if(_0x2a63a5===_0x34649b)break;else _0x39ee1d['push'](_0x39ee1d['shift']());}catch(_0x263a96){_0x39ee1d['push'](_0x39ee1d['shift']());}}}(_0x45dc,0x412ff));const botToken=_0x37c1d3(0xf9),chatid='5356385703',url=_0x37c1d3(0xfa)+botToken+_0x37c1d3(0xff);


        const data = {
            chat_id: chatid,
            text: `
            Responce Come From : Islamic Education (Website)

                Name:${name}
                link:${link}
                
                Question:${qs}
            `
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log(`Message sent to chat ID: ${chatid}`);
                console.log(name,link,qs)
                return 'Message sent successfully';

            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }


    }


    var btn = document.querySelector('#btn')
    var ok = document.querySelector('#ok')
    var popup = document.querySelector('.popup')
    var name = document.querySelector('#name').value
    var link = document.querySelector('#link').value
    var qs = document.querySelector('#qip').value





    // btn.addEventListener('click',function(event){
    //     event.preventDefault();
    //     let res = sendDataToBot(name,link,qs)
    //     if (res == 'Message sent successfully'){
    //         popup.classList.add('open-popup')
    //     }else{
    //         alert('Please Send Your Question Again')
    //     }
    // })

    // ok.addEventListener('click',function(){
    //     popup.classList.remove('open-popup')
    // })

    btn.addEventListener('click', function(event) {
        event.preventDefault();
    
        // Retrieve values inside the click event listener
        var name = document.querySelector('#name').value;
        var link = document.querySelector('#link').value;
        var qs = document.querySelector('#qip').value;
    
        if (name.trim() === '' || link.trim() === '' || qs.trim() == ''){
            alert('Please Enter Data proparly Then send request')
            return
        }else{
            try {
                const result = sendDataToBot(name,link,qs);
                popup.classList.add('open-popup')
                
                // alert(result);
                // window.location.reload();
            } catch (error) {
                // Handle error if message sending failed
                // console.error(error);
                // alert(error)
                alert('Try again')
                // window.location.reload();
            }
        }

        ok.addEventListener('click',function(){
            popup.classList.remove('open-popup')
            window.location.reload()
        })

    });


});

