import { replaceExtraSpacesToOneSpace } from "../tools/util/regexHelper.js";

export class Task {
  _date = "";
  _name = "";
  _note = "";

  /**
   * 
   * @param {String} date 
   * @param {String} name 
   * @param {String} note 
   */
  constructor(date, name, note) {
    this._date = date;
    this._name = name;
    this._note = note;
  }

  getTaskAdapted() {
    return {
      dateTime: this.adapterDate(),
      name: this.adapterName(),
      note: this.adapterNote(),
    };
  }

  adapterName() {
    const nameAdapted = this._name.trim();
    return replaceExtraSpacesToOneSpace(nameAdapted);
  }

  adapterDate() {
    return this._date.trim();
  }

  adapterNote() {
    const dateAdapted = this._note.trim();
    return replaceExtraSpacesToOneSpace(dateAdapted);
  }
}
