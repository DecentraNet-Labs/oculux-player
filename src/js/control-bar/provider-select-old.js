import Component from '../component';
import MenuButton from '../menu/menu-button.js';
import * as Dom from '../utils/dom';

/**
 * Creates DOM element of 'select' & its options.
 *
 * @extends Component
 */
class ProviderSelect extends MenuButton {
  constructor(player, options = {}) {
    super(player, options);

    super.controlText("Provider Select")
    super.setIcon('jackal')
  }


  
  /**
   * Dynamically update the options within the select element.
   *
   * @param {Array} newOptions
   *        An array of new options where each option is an array: [value, label].
   */
  updateOptions(newOptions) {
    // Clear existing options.
    while (this.el_.firstChild) {
      this.el_.removeChild(this.el_.firstChild);
    }
    // Rebuild options based on newOptions array.
    newOptions.forEach((optionData) => {
      const optionId = this.options_.labelId + '-' + optionData[1].replace(/\W+/g, '');
      const option = Dom.createEl('option', {
        id: optionId,
        value: this.localize(optionData[0]),
        textContent: optionData[1]
      });
      option.setAttribute('aria-labelledby', `${this.selectLabelledbyIds} ${optionId}`);
      this.el_.appendChild(option);
    });
  }
}

Component.registerComponent('ProviderSelect', ProviderSelect);
export default ProviderSelect;
