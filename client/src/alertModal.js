const swal = require('sweetalert2')
const Modal = (data) => {
    swal.fire({
        title: data['modalTitle'],
        text: data['modalText'],
        icon: data['modalIcon'],
        confirmButtonText: data['modalButtonText'],
        heightAuto: false
    }).then(()=>{
        if(data['modelRedirectUrl'].length > 0) {
            window.location.href =  data['modelRedirectUrl']
        }
    })
}

exports.modal = Modal