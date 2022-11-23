var password = document.getElementById('password')
    function genPassword() {
        var chars = 
        '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var passwordlength = 12
        var password = ''
        for (var i = 0; i <= passwordlength; i++){
            var randomNumber = Math.floor(Math.random() * chars.length)
            password += chars.substring(randomNumber, randomNumber + 1)
        }
        document.getElementById('password').value = password
    }

    function copyPassword() {
        var copyText = document.getElementById('password')
        copyText.select()
        copyText.setSelectionRange(0,900)
        document.execCommand('copy')
    }

    function resetPassword() {
        document.getElementById('password').value = ''
    }
    