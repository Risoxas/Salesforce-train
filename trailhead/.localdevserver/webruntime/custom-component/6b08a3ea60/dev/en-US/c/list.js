Webruntime.define('lwc/list', ['lwc', 'c/tile', 'c/data'], function (lwc, _cTile, data) { 'use strict';

    _cTile = _cTile && Object.prototype.hasOwnProperty.call(_cTile, 'default') ? _cTile['default'] : _cTile;

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return ".container" + shadowSelector + " {display: flex;flex-direction: row;flex-wrap: wrap;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        k: api_key,
        b: api_bind,
        c: api_custom_element,
        i: api_iterator,
        h: api_element
      } = $api;
      const {
        _m0
      } = $ctx;
      return [api_element("div", {
        classMap: {
          "container": true
        },
        key: 1
      }, api_iterator($cmp.bikes, function (bike) {
        return api_custom_element("c-tile", _cTile, {
          props: {
            "product": bike
          },
          key: api_key(0, bike.fields.Id.value),
          on: {
            "tileclick": _m0 || ($ctx._m0 = api_bind($cmp.handleTileClick))
          }
        }, []);
      }))];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-list_list-host",
      shadowAttribute: "lwc-list_list"
    };

    class List extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.bikes = data.bikes;
      }

      handleTileClick(evt) {
        // This component wants to emit a productselected event to its parent
        const event = new CustomEvent('productselected', {
          detail: evt.detail
        }); // Fire the event from c-list

        this.dispatchEvent(event);
      }

    }

    lwc.registerDecorators(List, {
      fields: ["bikes"]
    });

    var list = lwc.registerComponent(List, {
      tmpl: _tmpl
    });

    return list;

});
