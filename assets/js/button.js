const btn = document.querySelector('#button1');


btn.addEventListener('click', () => {
    Swal.fire({
        title: 'Happy Birth Day Sayang, jangan lupa bersyukur masih bisa bertahan sampe sekarang.',
        confirmButtonText: 'Lanjutt',
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Inget jangan pernah ngeluh lagi, apalagi sampe nangis. Jangan lagi ya, aku bakal nemenin kamu.',
                confirmButtonText: 'Lanjut lagi',
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                      title: 'Love you ❤️',
                      confirmButtonText: 'Love you too'
                  })
                }
              })
        }
      })
})