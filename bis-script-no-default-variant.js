// [hash]
// 256382677
//
// [config]
// elementType: button
// elementTypePartially: button
// anchor: form[action ^= "/cart/add"]
// anchorPosition: afterend
// anchorSame: true
// anchorPartially: form[action ^= "/cart/add"] .payment-buttons
// anchorPositionPartially: beforebegin
// autoDetectAnchor: true
// detectionName: From swatches
// classes: btn btn-full
// style: color: white
// styleSame: true
// spacers: false
// syncWidth: false
// keepAbove: false
// selectable: true
// refreshOnChange: true
// refreshOnClick: false
// refreshOnSoldoutChange: false
//
// Integration theme script generated at Tue Mar 21 2023 10:27:07 GMT+0530 (India Standard Time)
if (BIS.urlIsProductPage() === true) {
  BIS.popup.ready.then(function() {

    // Exit script if product has no sold out variants.
    if (BIS.popup.variants.length < 1) {
      return;
    }

      // Custom variant detection
      if (BIS.popup.product.available) {
              // Detect variant from swatches
      if (BIS.popup.product.available) {
        BIS.detectVariant = function(widget) {
          var titles = []
          var selectors = document.querySelectorAll('form[action^="/cart/add"] [type=radio]:checked')
          for (var i = 0; i < selectors.length; ++i) {
            titles.push(selectors[i].value)
          }
          return widget._variantsByTitle[titles.join(' / ')];
        }
      }
      }
  

    // Build button that will be inserted in the product page.
    var button = document.createElement('button');
    button.setAttribute('id', 'BIS_trigger');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-full');
    button.style.cssText = 'color: white';
    button.textContent = BIS.currentButtonCaption();

    
    var defaultAnchor = null;

    // Skip checking special anchors if 'Force Anchor' is chosen
    if (true) {

      var specialAnchors = [
        '.product-form__buttons',
        '.shopify-payment-button',
        '.shopify-payment-terms',
        '.swym-wishlist-cta',
        '.swym-button-bar',
        '.wk-button',
        '.cbb-frequently-bought-container',
        '.products-button-wrap'
      ];

      for (var i = 0; i < specialAnchors.length; i++) {
        var specialAnchor = specialAnchors[i];
        if (document.querySelector(specialAnchor)) {
          defaultAnchor = specialAnchor;
          break;
        }
      }
    }

    // Insert the button into the product page.
    BIS.inlineButtonAnchor = defaultAnchor || 'form[action ^= "/cart/add"]';
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
