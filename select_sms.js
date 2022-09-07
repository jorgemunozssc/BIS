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
    })
    
  })
}


//This script is uased to select the SMS feature and select the default country code.

// [hash]
// -1396374321
//
// [config]
// elementType: button
// elementTypePartially: button
// anchor: form[action ^= "/cart/add"]
// anchorPosition: afterend
// anchorSame: true
// anchorPositionPartially: beforebegin
// detectionName: current
// classes: product-form--atc-button
// style: width: 100%; margin-left: -1px; margin-top: 10px
// styleSame: true
// spacers: false
// syncWidth: false
// keepAbove: false
// selectable: true
// refreshOnChange: true
// refreshOnClick: false
// refreshOnSoldoutChange: false
//
// Integration theme script generated at Fri Mar 11 2022 19:23:08 GMT+0000 (Greenwich Mean Time)
if (BIS.urlIsProductPage() === true) {
  BIS.popup.ready.then(function() {

    // Exit script if product has no sold out variants.
    if (BIS.popup.variants.length < 1) {
      return;
    }


    // Build button that will be inserted in the product page.
    var button = document.createElement('button');
    button.setAttribute('id', 'BIS_trigger');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'product-form--atc-button');
    button.style.cssText = 'width: 100%; margin-left: -1px; margin-top: 10px';
    button.textContent = BIS.currentButtonCaption();

        // Insert the button into the product page.
    BIS.inlineButtonAnchor = 'form[action ^= "/cart/add"]';
    var anchor = document.querySelector(BIS.inlineButtonAnchor);
    anchor.insertAdjacentElement('afterend', button);



    // Control button visibility
    var variantId;
    var originalDisplay = button.style.display;
    BIS.refreshInlineButton = function() {
      try {
        var variant = BIS.detectVariant(BIS.popup);

        if (variant && BIS.popup.variantIsUnavailable(variant)) {
          variantId = variant.id;
          button.style.display = originalDisplay;
        } else {
          button.style.display = 'none';
        }
      } catch (e) {
        console.log(e);
      }
    };
    
    BIS.refreshInlineButton()
    
    BIS.delayedRefreshInlineButton = function() {
      setTimeout(function() { BIS.refreshInlineButton() }, 15)
    };

    // Refresh button visibility on document change.
    document.addEventListener('change', BIS.delayedRefreshInlineButton);



    // Select the variant in popup form.
    button.addEventListener('click', function() {
      BIS.popup.form.selectVariant(variantId);
    });


  });
}


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
    
  })
}
