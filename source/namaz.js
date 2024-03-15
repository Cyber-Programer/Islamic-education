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
        const botToken = '6786254564:AAFCC9_iPAGM_11C8h-ke0K8xWrHyYH09p8';
        const chatid = '5356385703';
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;


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

