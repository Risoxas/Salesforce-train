Webruntime.define('lwc/tile', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return ".container" + shadowSelector + " {border: 1px rgb(168, 166, 166) solid;border-radius: 5px;background-color: white;margin:5px;padding: 2px;max-width: 110px;display: flex;}\n.title" + shadowSelector + " {font-weight: strong;}\n.product-img" + shadowSelector + " {max-width: 100px;}\na" + shadowSelector + " {text-decoration: none;}\na:link" + shadowSelector + " {color: rgb(159, 159, 159);}\na:visited" + shadowSelector + " {color: green;}\na:hover" + shadowSelector + " {color: hotpink;}\na:active" + shadowSelector + " {color: blue;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic,
        h: api_element,
        b: api_bind
      } = $api;
      const {
        _m0
      } = $ctx;
      return [api_element("div", {
        classMap: {
          "container": true
        },
        key: 3
      }, [api_element("a", {
        key: 2,
        on: {
          "click": _m0 || ($ctx._m0 = api_bind($cmp.tileClick))
        }
      }, [api_element("div", {
        classMap: {
          "title": true
        },
        key: 0
      }, [api_dynamic($cmp.product.fields.Name.value)]), api_element("img", {
        classMap: {
          "product-img": true
        },
        attrs: {
          "src": $cmp.product.fields.Picture_URL__c.value
        },
        key: 1
      }, [])])])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-tile_tile-host",
      shadowAttribute: "lwc-tile_tile"
    };

    class Tile extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.product = void 0;
      }

      tileClick() {
        const event = new CustomEvent('tileclick', {
          // detail contains only primitives
          detail: this.product.fields.Id.value
        }); // Fire the event from c-tile

        this.dispatchEvent(event);
      }

    }

    lwc.registerDecorators(Tile, {
      publicProps: {
        product: {
          config: 0
        }
      }
    });

    var tile = lwc.registerComponent(Tile, {
      tmpl: _tmpl
    });

    return tile;

});
