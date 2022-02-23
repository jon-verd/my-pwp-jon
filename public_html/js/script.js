
// Contact form JS
$(document).ready(function() {
    $('#contact').validate({
        debug: true,
        errorClass: 'alert alert-danger',
        ErrorLabelContainer: '#output-area',
        errorElement: 'div',
        // rules here define what is a good or bad input
        // each rule starts with the form input elements NAME attribute
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
            $('#contact').ajaxSubmit({
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

// Website-Design CSS

