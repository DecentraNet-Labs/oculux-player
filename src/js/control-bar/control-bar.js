/**
 * @file control-bar.js
 */
import Component from '../component.js';

// Required children
import './control-bar-left.js';
import './control-bar-right.js';

/**
 * Container of main controls.
 *
 * @extends Component
 */
class ControlBar extends Component {

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */
  createEl() {
    return super.createEl('div', {
      className: 'ocx-control-bar',
      dir: 'ltr'
    });
  }
}

/**
 * Default options for `ControlBar`
 *
 * @type {Object}
 * @private
 */
ControlBar.prototype.options_ = {
  children: [
    'controlBarLeft',
    'controlBarRight'
  ]
};

Component.registerComponent('ControlBar', ControlBar);
export default ControlBar;
