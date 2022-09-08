// [hash]
// 183147657
//
// [config]
// elementType: button
// elementTypePartially: button
// anchor: form[action *= "/cart/add"]
// anchorPosition: beforeend
// anchorSame: true
// anchorPartially: .add-to-cart-wrapper
// anchorPositionPartially: beforebegin
// detectionName: current
// classes: btn btn--full btn--green button
// style: min-height: 54px; margin-top: 10px
// styleSame: true
// spacers: false
// syncWidth: false
// keepAbove: false
// selectable: true
// refreshOnChange: true
// refreshOnClick: false
// refreshOnSoldoutChange: false
//
// Integration theme script generated at Thu Sep 08 2022 10:00:30 GMT-0300 (Brasilia Standard Time)

console.log('[BIS] custom script loaded')

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
    button.setAttribute('class', 'btn btn--full btn--green button');
    button.style.cssText = 'min-height: 54px; margin-top: 10px';
    button.textContent = BIS.currentButtonCaption();

        // Insert the button into the product page.
    BIS.inlineButtonAnchor = 'form[action *= "/cart/add"]';
    var anchor = document.querySelector(BIS.inlineButtonAnchor);
    if (!anchor) {
      console.log("[BIS] Couldn't find anchor element")
    }


    anchor.insertAdjacentElement('beforeend', button);



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
