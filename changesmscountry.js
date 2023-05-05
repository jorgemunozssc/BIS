if (BIS.urlIsProductPage() === true) {
  BISPopover.ready.then(function() {

    // Exit script if product has no sold out variants.
    if (BIS.popup.variants.length < 1) {
      return;
    }

    var smsClick = function() {
      var iframe = document.getElementById('BIS_frame');
      var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
      var button = innerDoc.querySelector('#customer-contact-container .btn-group:nth-child(2) button')
      if (!button.classList.contains('active')) button.click()
    }

    document.querySelector('#BIS_trigger').addEventListener('click', function() {
      setTimeout(smsClick, 50) 
      BIS.popup.form.intlTelInput.setCountry('no')
    })
    
    var smsClick = function() {
      var iframe = document.getElementById('BIS_frame');
      var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
      var button = innerDoc.querySelector('#customer-contact-container .btn-group:nth-child(1) button')
      if (!button.classList.contains('active')) button.click()
    }
    
  })
}
