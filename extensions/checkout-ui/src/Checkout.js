import {
  extension,
  Banner,
  Image
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, api) => {
      vendor = JSON.parse(JSON.stringify(api.lines.current[0].merchandise.product.vendor))
      
      if (vendor == "Solvadarm") {
        var banner = root.createComponent(
          Banner,
          {},
          "Solvadarm branding",
        );
      }
      else if ( vendor == "dyanamic-branding-t" ) {
        var banner = root.createComponent(
          Image, {
            source: 'https://www.solvadermstore.com/cdn/shop/files/logo-horizontal-847-_600dpi_10f1070f-0b26-4f2e-b5f3-e73378aa7888.png?v=1669142891&width=500',
          }
        );
      }
      else {
        var banner = root.createComponent(
          Image, {
            source: 'https://www.virectin.com/cdn/shop/files/logo-header.png?v=1682495044&width=300',
          }
        );
      }

    
    root.appendChild(banner);
  },
);
