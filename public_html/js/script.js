$(document).ready(function() {
    $('#contact').validate({
        debug: true,
        errorClass: 'alert alert-danger',
        ErrorLabelContainer: '#output-area',
        errorElement: 'div',
        // ruels here define what is good or bad input
        // each rule satrts with the form input elements NAME attrivbrute
        rules : {
            name : {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000
            }
        },
        messages: {
            name: {
                required: 'Name is required.'
            },
            email: {
                email: 'Please provide a valid email.',
                required: 'Email is required.'
            },
            message: {
                required: 'A message is required.',
                maxlength: 'Message is too long.'
            }
        },
        submitHandler: (form) => {
            $('#contact')ajaxSubmit({
                type: 'POST',
                url: $('#contact').attr('action'),
                success: (ajaxOutput) => {
                    $('#output-area').css('display', '')
                    $('#output-area').html(ajaxOutput)

                    if($('.alert-success' >= 1)){
                        $('#contact')[0].reset()
                    }

                }
            })

        }
    })
})