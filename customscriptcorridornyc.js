// BIS.integration

// Exit script if it's not running on a product page.
if (BIS.urlIsProductPage() === true) {
  BIS.popup.ready.then(function() {

    // Configuration
    // -------------------------

    // this store wants to be able to use a threshold higher than zero to be 'sold out'. Refer [HS-39742]
    // BIS.popup.settings.instock_qty_level = 2

    // Sometimes the variant is only selected after a certain time
    // For these cases, set the delay to about 50, or 0 otherwise
    selectCheckDelay = 0

    // If true, the button will be always visible in partially sold out pages
    var buttonAlwaysVisible = true

    // invert variant options in title
    var invertOptions = false

    var debugMode = true

    //-------------------------

    // Selected variant
    var variant_id

    // Back in Stock button
    var button

    // Store original button display style (inline-block, block, etc.)
    var displayStyle

    // Return if there is no sold out variants
    if (BIS.popup.variants.length < 1) {
      return;
    }

    var debug = function(text) {
      if (debugMode) { console.log("[Back in Stock] " + text) }
    }

    var completelySoldOut = function() {
      return BIS.popup.product.available == false
    }

    var completelySoldOutButton = 
      "<button id='BIS_trigger' class='button' " +
        "style='margin-top: 0.5em; width: 325px; max-width: 100%; padding: 21px 10px 20px'>" +
        BIS.Config.button.caption +
      "</button>"

    var partiallySoldOutButton =
      "<a id='BIS_trigger' class='button' " +
        "style='cursor: pointer; margin-top: 1em; width: 325px; max-width: 100%; text-align: center; display: block'>" +
        BIS.Config.button.caption +
      "</a>"

    var createButton = function() {
      var div = document.createElement('div')
      div.innerHTML = completelySoldOut() ? completelySoldOutButton : partiallySoldOutButton
      displayStyle = div.firstChild.style.display
      return div.firstChild
    }

    var insertButton = function() {
      if (completelySoldOut()) {
        BIS.$('form[action="/cart/add"]').append(button);
        // $('.product-menu-slideout').after(button)
        // $('#shopify-section-related-products').css('margin-top', '120px');
      } else {
        // $('.product-menu-slideout').after(button)
        BIS.$('form[action="/cart/add"]').append(button);
      }
      if (!BIS.$('#BIS_trigger')) {
        debug('Warning: button not inserted in the page')
      }

    }

    var showButton = function() {
      button.style.display = displayStyle
    }

    var hideButton = function() {
      button.style.display = 'none'
    }

    // var selectedVariantTitle = function() {
    //   return $('.swatches-select .active-swatch .basel-tooltip-label')[0].textContent
    // }

    // Show or hide link based on selected variant
    var showButtonIfSelected = function() {
      var variant = BIS.detectVariant(BIS.popup)
      // var variant = $('#add-to-cart-form .single-option-selector').map(function() { return $(this).val() }).toArray().join(" / ")

      if (!variant) {
        debug('Warning: no variant selected detected')
      }

      if (variant && BIS.popup.variantIsUnavailable(variant)) {
        variant_id = variant.id
        showButton()
      } else {
        hideButton()
      }
    }

    var reload = function() {
      try {
        debug('reload function called')

        if (buttonAlwaysVisible) {
          showButton()
        } else {
          setTimeout(showButtonIfSelected, selectCheckDelay);
        }

      } catch (e) { console.log(e) };
    };

    // Invert options position
    var invert = function() {
      var iframe = BIS.popup.form.frame
      var innerDoc = iframe.contentDocument || iframe.contentWindow.document
      $(innerDoc).find('.selectpicker option').each(function(i) {
        var inverse = $(this).html().split(" / ").reverse().join(" / ")
        $(this).html(inverse)
      });
    }

    button = createButton()
    insertButton()

    button.addEventListener('click', function() {
      BISPopover.form.selectVariant(variant_id)
      if (invertOptions) setTimeout(invert, 40)
      invertOptions = false
    });

    setTimeout(reload, 13);

    document.addEventListener('change', reload);

    // Hack to watch when an element displaces the BIS position after BIS loaded
    // var BISmoved = false
    // function moveBIS() {
    //   if (BISmoved) { return }
    //   if ($('#AddToCart').next().attr('id') == 'BIS_trigger' ) {
    //     setTimeout(moveBIS, 100)
    //   } else {
    //     $('#BIS_trigger').detach().insertAfter('#AddToCart')
    //     BISmoved = true
    //   }
    // }
    // moveBIS()


    // When the above code (change event on document) don't work
    // var clickContainer = document.getElementsByClassName('Popover__ValueList')[0]
    // var elements = clickContainer.addEventListener('click', function() {
    //   setTimeout(reload, 50);
    // })

  });
}

