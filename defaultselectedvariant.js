if (BIS.urlIsProductPage() === true) {
   BIS.popup.ready.then(function() {
     var button = document.querySelector('button[data-target="back-in-stock-modal"]');
      button.addEventListener('click', function() {
        var variantId = document.querySelector('[name=id]').value;
        console.log(BIS.popup._variantsById[variantId]);
        BIS.popup.form.selectVariant(variantId);
      });
   });
}
